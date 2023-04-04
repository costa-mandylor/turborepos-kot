import { useState } from 'react';

import { IUseToggle } from '../port';

export function useToggle(): IUseToggle {
  const [isToggle, setToggle] = useState<boolean>(false);

  const onToggle = () => {
    setToggle((prev) => !prev);
  };

  return { isToggle, onToggle };
}
