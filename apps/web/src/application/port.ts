import * as z from 'zod';

import { IUser } from '@/domain/user';

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
export type IUseToggle = {
  isToggle: boolean;
  onToggle: () => void;
};

// User
export type IUseDispatchUser = {
  dispatchUser: (user: IUser) => void;
};

export type IUseRemoveUser = {
  removeUser: () => void;
};
