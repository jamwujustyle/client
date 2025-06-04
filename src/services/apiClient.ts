import axios, {AxiosError, InternalAxiosRequestConfig} from "axios";
import Cookies from "js-cookie"
import camelcaseKeys from "camelcase-keys"

// Helper function to get the right base URL
export const getApiUrl = (path: string = '') => {
  const isAuth = path.includes('auth');
  const baseUrl = isAuth
    ? process.env.NEXT_PUBLIC_API_AUTH_URL
    : process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseUrl) throw new Error('API base URL is not defined');

  const cleanPath = path.replace(/^\//, '');
  return `${baseUrl.replace(/\/$/, '')}/${cleanPath}`;
};

const refreshTokenService = async (): Promise<{access: string}> => {
    const refreshToken = Cookies.get("refreshToken");
    if (!refreshToken) {
        console.error("Refresh token not found in cookies.");
        throw new Error("No refresh token");
    }

    const response = await fetch(getApiUrl('/auth/refresh'), {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ refresh: refreshToken })
    })
    if(!response.ok) {
        const errorData = await response.json().catch(() => ({ detail: "Refresh failed with status " + response.status}));
        console.error("Token refresh API call failed: ", errorData)
        throw new Error(errorData.detail || "Refresh token failed")
    }
    const data = await response.json()

    if (!data.access) {
        console.error("Refresh response missing 'access' token: ", data)
        throw new Error('Invalid refresh response format')
    }
    return { access: data.access}
}

const triggerLogout = () => {
    console.error('Triggering logout due to refresh failure or missing token.')
    localStorage.removeItem('token') // Fixed: use removeItem instead of remove
    Cookies.remove("refreshToken")

    if (typeof window !== 'undefined') {
        window.location.href = "/"
    }
}

// Create Axios instance WITHOUT baseURL
const api = axios.create({
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

let isRefreshing = false;
let failedQueue: {resolve: (value: unknown ) => void; reject: (reason?: AxiosError) => void }[] = [];

const processQueue = (error: AxiosError | null, token: string | null = null) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        }
        else {
            prom.resolve(token)
        }
    })
    failedQueue = [];
}

api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem("token");
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
)

api.interceptors.response.use(
    (response) => {
        if (response.data && typeof response.data === 'object' && response.data !== null) {
            try{
                if (Array.isArray(response.data)) {
                    response.data = response.data.map(item =>
                        typeof item === 'object' && item !== null ? camelcaseKeys(item, {deep: true}) : item // Fixed: use item instead of response.data
                    );
                }
                else {
                    response.data = camelcaseKeys(response.data, {deep: true})
                }
            }
            catch (error) {
                console.warn("Failed to camelCase success response data: ", error)
            }
        }
        return response;
    },
    async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

        if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                }).then(token => {
                    if (originalRequest.headers) {
                        originalRequest.headers['Authorization'] = `Bearer ${token}`
                    }
                    return api(originalRequest)
                }).catch(err => {
                    console.error("API Client: Queued request failed after refresh attempt: ", err);
                    return Promise.reject(err)
                })
            }
            originalRequest._retry = true
            isRefreshing = true;

            try {
                const { access: newAccessToken } = await refreshTokenService();
                localStorage.setItem("token", newAccessToken)

                if (originalRequest.headers) {
                    originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
                }

                processQueue(null, newAccessToken);
                return api(originalRequest)
            }
            catch(refreshError) {
                console.error("API Client: Token refresh failed: ", refreshError);
                processQueue(refreshError instanceof AxiosError ? refreshError : null, null);
                triggerLogout()
                return Promise.reject(refreshError)
            }
            finally {
                isRefreshing = false;
            }
        }
        if (error.response?.data && typeof error.response.data === 'object' && error.response.data !== null && !Array.isArray(error.response.data)) {
            try {
                error.response.data = camelcaseKeys(error.response.data as Record<string, unknown>, { deep: true});
            }
            catch (err) {
                console.warn("Failed to camelCase error response data: ", err)
            }
        }
        return Promise.reject(error)
    }
)


export const apiClient = {
    request: async <T>(
        url: string,
        config: {
                method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
                body?: unknown;
                params?: Record<string, unknown>;
                headers?: Record<string, string>;
        }
    ): Promise<T> => {
        try {
            // Use getApiUrl to get the full URL with correct base
            const fullUrl = getApiUrl(url);

            const requestConfig: InternalAxiosRequestConfig = {
                url: fullUrl,
                method: config.method,
                data: config.body,
                params: config.params,
                headers: (config.headers || {}) as import("axios").AxiosRequestHeaders,
            };

            if (config.body instanceof FormData) {
                if (!requestConfig.headers) {
                    requestConfig.headers = {} as import("axios").AxiosRequestHeaders;
                }
                requestConfig.headers['Content-Type'] = 'multipart/form-data';
            }

            const response = await api.request(requestConfig);
            return response.data as T;
        } catch (error) {
            throw error;
        }
    }
};