import {
  ContainerInputSearch,
  ContainerNavBar,
  GroupHeader,
  GroupItems,
} from './style';
import { BiSearchAlt } from 'react-icons/bi';
import SplitButton from './components/Flag';
import { useAppContext } from '../../context/AppContext';
import { Autocomplete, TextField } from '@mui/material';

const NavBar: React.FC = () => {
  const { asideIsOpen } = useAppContext();

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'A Shawshank Redemption', year: 1994 },
    { title: 'A Godfather', year: 1972 },
    { title: 'A Godfather: Part II', year: 1974 },
  ];

  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <>
      <ContainerNavBar asideOpen={asideIsOpen}>
        <BiSearchAlt size={30} color="#4c4c4c" />
        <SplitButton />
      </ContainerNavBar>

      <ContainerInputSearch>
        <BiSearchAlt size={30} color="#4c4c4c" />
        <Autocomplete
          options={options.sort(
            (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
          )}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.title}
          sx={{
            width: '100%',
            border: 'none',
            fieldset: { border: 'none' },
            svg: { display: 'none' },
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
