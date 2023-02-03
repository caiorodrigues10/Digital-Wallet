import { Box, IconButton } from '@mui/material';
import { AiOutlineRight } from 'react-icons/ai';
import { useAppContext } from '../../context/AppContext';
import { SideHeader } from './components/SideHeader';
import { SideItem } from './components/SideItem';
import { ArrowSide, ContainerSideBar } from './style';

const SideBar: React.FC = () => {
  const { asideIsOpen, handleAsideOpen, handleAsideClose } = useAppContext();

  return (
    <ContainerSideBar asideOpen={asideIsOpen}>
      <ArrowSide
        asideOpen={asideIsOpen}
        onClick={() => (!asideIsOpen ? handleAsideOpen() : handleAsideClose())}
      >
        <IconButton aria-label="delete" size="small">
          <AiOutlineRight />
        </IconButton>
      </ArrowSide>
      <SideHeader />
      <SideItem />
    </ContainerSideBar>
  );
};

export { SideBar };
