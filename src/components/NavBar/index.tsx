import {
  Autocomplete,
  TextField,
  IconButton,
  Avatar,
  Box,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { useAppContext } from '../../context/AppContext';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import SplitButton from './components/Flag';
import { HiBell } from 'react-icons/hi';
import {
  ContainerInputSearch,
  ContainerNavBar,
  GroupHeader,
  GroupItems,
} from './style';

const NavBar: React.FC = () => {
  const { asideIsOpen } = useAppContext();
  const [openInput, setOpenInput] = useState(false);

  const refInput = useRef<any>(null);

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'A Godfather: Part II', year: 1974 },
  ];

  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  const search = {
    visible: { opacity: 1, y: openInput ? 0 : -100 },
    hidden: { opacity: 0, y: -100 },
  };

  useOnClickOutside(refInput, () => setOpenInput(false));

  return (
    <>
      <ContainerNavBar asideOpen={asideIsOpen}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ opacity: openInput ? '0' : '1' }}
        >
          <IconButton
            id="fade-button"
            aria-haspopup="true"
            onClick={() => !openInput && setOpenInput(true)}
          >
            <BiSearchAlt size={25} color="#4c4c4c" />
          </IconButton>
        </motion.div>
        <Box display="flex" gap="1rem" alignItems="center">
          <SplitButton />
          <HiBell size={25} color="#4c4c4c" />
          <Avatar
            alt="My Profile"
            src="https://avatars.githubusercontent.com/u/50969875?s=400&u=882f6d16e06ae724972740f36cc5b003390e68c5&v=4"
          />
        </Box>
      </ContainerNavBar>
      <ContainerInputSearch
        ref={refInput}
        transition={{ type: 'spring' }}
        component={motion.div}
        animate="visible"
        initial="hidden"
        variants={search}
      >
        <BiSearchAlt size={25} color="#4c4c4c" />
        <Autocomplete
          options={options.sort(
            (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
          )}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.title}
          sx={{
            width: '90%',
            border: 'none',
            fieldset: { border: 'none' },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{ border: 'none' }}
              placeholder="Search..."
            />
          )}
          renderGroup={(params) => (
            <li>
              <GroupHeader>{params.group}</GroupHeader>
              <GroupItems>{params.children}</GroupItems>
            </li>
          )}
        />
      </ContainerInputSearch>
    </>
  );
};

export { NavBar };
