import Cookies from 'js-cookie';

export const API_BASE_URL = `${import.meta.env.VITE_BASE_URL}/api/v1`;

export const cryptoAPI = 'crypto';
export const signUpAPI = 'auth/register';
export const loginAPI = 'auth/login'
export const watchlistAPI = "watchlist";



export const getAPIConfig = () => {
  const authData = Cookies.get('authentication');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let auth: any;

  if (authData) auth = JSON.parse(authData);

  // headers config
  const config = {
    headers: {
      Authorization: `Bearer ${auth?.token}`,
    },
  };

  return config;
};


