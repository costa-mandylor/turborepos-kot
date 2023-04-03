import { useState } from 'react';

export function useToggle() {
  const [isToggleModal, setToggleModal] = useState<boolean>(false);

  const onToggleModal = () => {
    setToggleModal((prev) => !prev);
  };

  return { isToggleModal, onToggleModal };
}
