declare module 'js-cookie' {
    interface CookieAttributes {
        expires?: number | Date;
        path?: string;
        domain?: string;
        secure?: boolean;
        sameSite?: 'strict' | 'lax' | 'none';
    }

    interface Cookies {
        get(name: string): string | undefined;
        set(name: string, value: string, attributes?: CookieAttributes): string | undefined;
        remove(name: string, attributes?: CookieAttributes): void;
        getJSON(name: string): any;
    }
    const Cookies: Cookies;
    export default Cookies;

}