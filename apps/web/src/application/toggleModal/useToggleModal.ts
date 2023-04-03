import { useState } from 'react';

export function useToggleModal() {
  const [isToggleModal, setToggleModal] = useState<boolean>(false);

  const onToggleModal = () => {
    setToggleModal((prev) => !prev);
  };

  return { isToggleModal, onToggleModal };
}
