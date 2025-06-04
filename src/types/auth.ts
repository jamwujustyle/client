interface RegisterRequestType {
    username: string
    email: string
    password: string
    confirmPassword: string
}
interface LoginRequestType {
    email: string
    password: string
}

export type { RegisterRequestType, LoginRequestType }