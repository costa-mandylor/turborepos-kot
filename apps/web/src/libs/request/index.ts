/* eslint-disable @typescript-eslint/no-unsafe-argument */
import axios from 'axios';
import qs from 'qs';

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CMS_API_URL,
  withCredentials: true,
  timeout: 10 * 1000, // 10 seconds
  paramsSerializer: {
    serialize: (params) => {
      return qs.stringify(params, { encodeValuesOnly: true });
    },
  },
});

request.defaults.headers.common['Content-Type'] = 'application/json';

// export const refreshAccessTokenFn = async () => {
//   const response = await authApi.get<ILoginResponse>('auth/refresh');
//   return response.data;
// };

// request interceptor
request.interceptors.request.use(function (config) {
  const token = `bearer ${process.env.NEXT_PUBLIC_CMS_AUTH_TOKEN}`;
  config.headers.Authorization = token;

  return config;
});

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    const originalRequest = error.config;
    const errMessage = error.response.data.message as string;
    if (errMessage.includes('not logged in') && !originalRequest._retry) {
      originalRequest._retry = true;
      // await refreshAccessTokenFn();
      return request(originalRequest);
    }
    return Promise.reject(error);
  },
);
