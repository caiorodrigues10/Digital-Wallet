import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import { useAppContext } from '../../context/AppContext';
import { NavBar } from '../NavBar';
import { SideBar } from '../SideBar';
import { Container, Content, MainContainer } from './style';

interface BreadCrumbProps {
  path: string;
  name: string;
}

interface BodyPage {
  paths: BreadCrumbProps[];
  children: ReactNode;
}

const BodyPage: React.FC = () => {
  const { asideIsOpen, handleAsideOpen } = useAppContext();

  return (
    <MainContainer asideOpen={asideIsOpen}>
      <SideBar />
      <Container>
        <NavBar />
        <Content>oi</Content>
      </Container>
    </MainContainer>
  );
};

export { BodyPage };
