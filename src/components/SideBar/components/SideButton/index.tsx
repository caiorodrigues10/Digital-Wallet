import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { useAppContext } from '../../../../context/AppContext';
import { ButtonSide } from './style';

interface SideButtonProps {
  src: string[];
  active: string;
  setActive: (value: string) => void;
  title: string;
  path: string;
}

const SideButton: React.FC<SideButtonProps> = ({
  active,
  src,
  setActive,
  title,
  path,
}) => {
  const { asideIsOpen } = useAppContext();
  const { push } = useRouter();
  const handleActive = useCallback(() => {
    setActive(title);
    push(path);
  }, [setActive, title]);

  return (
    <ButtonSide
      active={active.toLowerCase() === title.toLowerCase() ? true : false}
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
