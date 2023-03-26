import { request } from '@/libs/request';
import { IImage } from './types';

export type IProject = {
  attributes: {
    stack: {
      data: {
        attributes: IImage['data']['attributes'];
      }[];
    };
    programs: {
      data: {
        attributes: {
          createdAt: Date;
          description: string;
          githubLink: string;
          image: {
            data: {
              attributes: IImage['data']['attributes'];
            }[];
          };
          previewLink: string;
          publishedAt: Date;
          techstack: string;
          title: string;
          updatedAt: string;
        };
      }[];
    };
  };
};

export const PROJECT = 'project';

export const getProject = async () => {
  const { data } = await request.get<IProject>('/project?populate=deep');

  return data;
};
