import {
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  IconButton,
  FormControlLabel,
  Checkbox,
  Link,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { SideBar } from '../../components/SideBar';

const Home: React.FC = () => {
  return (
    <Box>
      <SideBar />
    </Box>
  );
};

export default Home;
