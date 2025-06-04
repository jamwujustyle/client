import { getApiUrl } from "./env";

export const AUTH_API_ENDPOINTS = {
    register: getApiUrl('/auth/register'),
    login: getApiUrl('/auth/login')
}