import axios from 'axios';

import { AuthenticationService } from '@/application/port';
import { BEARER } from '@/libs/cmsAuth';
import { request } from '@/libs/request';

import { ICMSUserRes } from './types';

export const cmsAuth: AuthenticationService = async (params) => {
  const data: ICMSUserRes = await request.post('/auth/local', params);

  return {
    ...data.user,
    jwt: data?.jwt,
    isLoggingIn: true,
  };
};

export const getCMSUser = async (token: string) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_CMS_API_URL}/users/me`, {
    headers: { Authorization: `${BEARER} ${token}` },
  });

  return data;
};
