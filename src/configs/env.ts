export const getApiUrl = (path: string = '') => {
  const isAuth = path.includes('auth');
  const baseUrl = isAuth
    ? process.env.NEXT_PUBLIC_API_AUTH_URL
    : process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseUrl) throw new Error('API base URL is not defined');

  const cleanPath = path.replace(/^\//, '');
  return `${baseUrl.replace(/\/$/, '')}/${cleanPath}`;
};
