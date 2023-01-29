import Image from "next/image";
import { useCallback, useState } from "react";
import { ButtonFooter } from "./style";

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
  const handleActive = useCallback(() => {
    setActive(title);
  }, [setActive, title]);

  return (
    <ButtonFooter active={active === title} onClick={handleActive}>
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