import { Box, IconButton } from '@mui/material';
import { AiOutlineRight } from 'react-icons/ai';
import { SideHeader } from './components/SideHeader';
import { SideItem } from './components/SideItem/SideItem';
import { ArrowSide, ContainerSideBar } from './style';

const SideBar: React.FC = () => {
  return (
    <ContainerSideBar>
      <ArrowSide>
        <IconButton aria-label="delete" size="small">
          <AiOutlineRight />
        </IconButton>
      </ArrowSide>
      <SideHeader />
      <SideItem/>
    </ContainerSideBar>
  );
};

export { SideBar };
