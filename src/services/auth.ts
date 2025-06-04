import { RegisterRequestType, RegisterResponseType, LoginRequestType, LoginResponseType } from "@/types/auth";
import { AUTH_API_ENDPOINTS } from "@/configs/api-endpoints";
import { apiClient } from "./apiClient";

export const authService = {
    register: async (payload: RegisterRequestType): Promise<RegisterResponseType> => {
        const response = await apiClient.request(AUTH_API_ENDPOINTS.register, {
            method: "POST",
            body: payload
        })

        return response as RegisterResponseType
    },
    login: async (payload: LoginRequestType): Promise<LoginResponseType> => {
        const response = await apiClient.request(AUTH_API_ENDPOINTS.login, {
            method: "POST",
            body: payload
        })

        return response as LoginResponseType
    }
}