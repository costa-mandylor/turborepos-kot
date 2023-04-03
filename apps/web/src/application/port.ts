import * as z from 'zod';

import { IUser } from '@/domain/login';

// Auth
export const schema = ({ identifierMess, passwordMess }: { identifierMess?: string; passwordMess?: string }) => {
  return z.object({
    identifier: z.string().min(1, { message: identifierMess }),
    password: z.string().min(1, { message: passwordMess }),
  });
};

const schemaAuth = schema({});

export type ISchemaAuth = z.infer<typeof schemaAuth>;

export type AuthenticationService = (value: ISchemaAuth) => Promise<IUser>;

// Modal
export type IUseToggleModal = {
  isToggleModal: boolean;
  onToggleModal: () => void;
};

// User
export type IUseGetUser = {
  user: IUser;
};

export type IUseDispatchUser = {
  dispatchUser: (user: IUser) => void;
};

export type IUseRemoveUser = {
  removeUser: () => void;
};
