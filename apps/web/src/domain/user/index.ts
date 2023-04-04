export type IUser = {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  jwt: string;
  isLoggingIn: boolean;
};

export const User: IUser = {
  isLoggingIn: false,
  jwt: '',
  id: 0,
  username: '',
  email: '',
  provider: '',
  confirmed: false,
  blocked: false,
};
