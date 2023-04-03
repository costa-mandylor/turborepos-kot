export type ILocale = 'en' | 'vi';

export type IImage = {
  data: {
    id: number;
    attributes: {
      alternativeText?: string;
      caption?: string;
      name: string;
      width: number;
      height: number;
      formats: {
        small: {
          ext: string;
          url: string;
          hash: string;
          mime: string;
          name: string;
          path: null;
          size: number;
          width: number;
          height: number;
          provider_metadata: {
            public_id: string;
            resource_type: string;
          };
        };
        thumbnail: {
          ext: string;
          url: string;
          hash: string;
          mime: string;
          name: string;
          size: number;
          width: number;
          height: number;
          provider_metadata: {
            public_id: string;
            resource_type: string;
          };
        };
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: null;
      provider: string;
      provider_metadata: {
        public_id: string;
        resource_type: string;
      };
      createdAt: string;
      updatedAt: string;
    };
  };
};

export type ICMSUserRes = {
  jwt: string;
  user: {
    blocked: boolean;
    confirmed: boolean;
    createdAt: Date;
    email: string;
    id: number;
    provider: string;
    updatedAt: Date;
    username: string;
  };
};
