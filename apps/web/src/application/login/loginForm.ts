import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { ISchemaAuth, schema } from '../port';

export function useLoginForm() {
  const { handleSubmit, control } = useForm<ISchemaAuth>({
    resolver: zodResolver(schema({ identifierMess: 'Identifier is required', passwordMess: 'Password is required' })),
  });

  return { handleSubmit, control };
}
