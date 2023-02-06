import Image from 'next/image';
import { useCallback, useState } from 'react';
import { useAppContext } from '../../../../context/AppContext';
import { ButtonFooter } from './style';

interface SideFooterProps {
  title: string;
  src: string[];
  setActive: (value: string) => void;
  active: string;
}

const SideFooter: React.FC<SideFooterProps> = ({
  title,
  src,
  active,
  setActive,
}) => {
  const { asideIsOpen } = useAppContext();
  const handleActive = useCallback(() => {
    setActive(title);
  }, [setActive, title]);

  return (
    <ButtonFooter
      active={active.toLowerCase() === title.toLowerCase()}
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
    </ButtonFooter>
  );
};

export { SideFooter };
