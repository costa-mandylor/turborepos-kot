import axios from 'axios';

import { BEARER } from '@/libs/cmsAuth';
import { request } from '@/libs/request';

type ICMSLogin = {
  identifier: string;
  password: string;
};

export type ICMSUserRes = {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  jwt: string;
};

export const cmsLogin = async (params: ICMSLogin): Promise<ICMSUserRes> => {
  return await request.post('/auth/local', params);
};

export const getCMSUser = async (token: string) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_CMS_API_URL}/users/me`, {
    headers: { Authorization: `${BEARER} ${token}` },
  });

  return data;
};
