import Image from 'next/image';
import { useCallback, useState } from 'react';
import { useAppContext } from '../../../../context/AppContext';
import { ButtonSide } from './style';

interface SideButtonProps {
  src: string[];
  active: string;
  setActive: (value: string) => void;
  title: string;
}

const SideButton: React.FC<SideButtonProps> = ({
  active,
  src,
  setActive,
  title,
}) => {
  const { asideIsOpen } = useAppContext();
  const handleActive = useCallback(() => {
    setActive(title);
  }, [setActive, title]);

  return (
    <ButtonSide
      active={active === title}
      onClick={handleActive}
      asideOpen={asideIsOpen}
    >
      <Image
        src={src[active === title ? 1 : 0]}
        alt=""
        width="30"
        height="30"
      />
      {title}
    </ButtonSide>
  );
};

export { SideButton };
