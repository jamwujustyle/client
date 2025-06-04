interface RegisterRequestType {
    username: string
    email: string
    password: string
    confirmPassword: string
}
interface RegisterResponseType extends RegisterRequestType {
    id: number;
}

interface LoginRequestType {
    email: string
    password: string
}
interface LoginResponseType {
    access: string;
    refresh: string;
}

export type { RegisterRequestType, RegisterResponseType, LoginRequestType, LoginResponseType }