import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { useAppContext } from '../../../../context/AppContext';
import { ButtonFooter } from './style';

interface SideFooterProps {
  title: string;
  src: string[];
  setActive: (value: string) => void;
  active: string;
  path: string;
}

const SideFooter: React.FC<SideFooterProps> = ({
  title,
  src,
  active,
  setActive,
  path,
}) => {
  const { asideIsOpen } = useAppContext();
  const { push } = useRouter();
  const handleActive = useCallback(() => {
    setActive(title);
    push(path);
  }, [setActive, title]);

  return (
    <ButtonFooter
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
    </ButtonFooter>
  );
};

export { SideFooter };
