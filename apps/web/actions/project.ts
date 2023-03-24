import { request } from "@/services/request/cms-request";
import { IImage } from "./types";

export type IProject = {
  attributes: {
    stack: {
      data: {
        attributes: IImage["data"]["attributes"];
      }[];
    };
  };
};

export const PROJECT = "project";

export const getProject = async () => {
  const { data } = await request.get<IProject>("/project?populate=deep");

  return data;
};
