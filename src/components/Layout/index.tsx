import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import { BsCalendar3 } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import { GoSettings } from 'react-icons/go';
import { IoWallet } from 'react-icons/io5';
import { MdInsertChart } from 'react-icons/md';

interface BreadCrumbProps {
  path: string;
  name: string;
}

interface BodyPage {
  paths: BreadCrumbProps[];
  children: ReactNode;
}

const BodyPage: React.FC<BodyPage> = ({ paths, children }) => {
  const { push } = useRouter();

  return <div></div>;
};

export { BodyPage };
