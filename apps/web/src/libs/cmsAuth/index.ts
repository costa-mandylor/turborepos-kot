export const AVATAR_API = 'https://ui-avatars.com/api';
export const API = 'http://localhost:1337/api';
export const AUTH_TOKEN = 'authToken';
export const BEARER = 'Bearer';

export const getToken = () => {
  return localStorage.getItem(AUTH_TOKEN);
};

export const setToken = (token: string) => {
  if (token) {
    localStorage.setItem(AUTH_TOKEN, token);
  }
};

export const removeToken = () => {
  localStorage.removeItem(AUTH_TOKEN);
};
