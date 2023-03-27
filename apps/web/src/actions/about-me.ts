import { request } from '@/libs/request';

import { IImage, ILocale } from './types';

export type IAboutMe = {
  attributes: {
    desc: string;
    educations: {
      data: Array<{
        id: number;
        attributes: {
          dateFrom: Date;
          dateTo: Date;
          location: string;
          name: string;
          createdAt: Date;
          updatedAt: Date;
          locale: ILocale;
        };
      }>;
    };
    works: {
      data: Array<{
        id: number;
        attributes: {
          company: string;
          dateFrom: string;
          title: string;
          position: string;
          dateTo: Date;
          createdAt: Date;
          updatedAt: Date;
          publishedAt: Date;
          locale: ILocale;
          logo: IImage;
          localizations: {
            data: [];
          };
        };
      }>;
    };
  };
};

export const ABOUT_ME = 'about-me';

export const getAboutMe = async () => {
  const { data } = await request.get<IAboutMe>('/about-me?populate=deep');

  return data;
};
