import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { colorSystem } from '../../styles/colors';
import { ContainerForm, ContainerLogin, FormLogin, SideTrapeze } from './style';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { push } = useRouter();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <ContainerLogin>
      <ContainerForm>
        <FormLogin>
          <Image src="/images/logoDark.svg" alt="" width="200" height="200" />
          <TextField
            label="User"
            variant="outlined"
            sx={{
              width: '100%',
            }}
          />
          <FormControl
            sx={{
              m: 1,
              width: '100%',
            }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            alignItems="center"
            mt="-1.3rem"
          >
            <FormControlLabel
              control={<Checkbox />}
              label="Me manter conectado"
              sx={{
                color: colorSystem.textOvershadowed,
                span: { fontSize: '14px' },
              }}
            />
            <Link href="#" underline="hover" fontWeight="600" fontSize="14px">
              Forgot password
            </Link>
          </Box>
          <Button
            variant="contained"
            sx={{ width: '100%', textTransform: 'none' }}
            onClick={() => push('/home')}
          >
            Sign in
          </Button>

          <Box
            display="flex"
            width="100%"
            justifyContent="center"
            gap="0.25rem"
            alignItems="center"
            fontSize="14px"
          >
            <Typography color={colorSystem.mainTextSystem}>
              Don't have an account?
            </Typography>
            <Link href="/singUp" underline="hover" fontWeight="600">
              Sign up
            </Link>
          </Box>
        </FormLogin>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{ gap: '3rem', img: { marginLeft: '4rem' } }}
        >
          <Image
            src="/images/avatarLogin.svg"
            alt=""
            width="486"
            height="444"
          />
          <Typography
            variant="h4"
            color="#FBFBF2"
            fontWeight="600"
            textAlign="center"
            gutterBottom
          >
            Centralize seus gastos <br /> em um só lugar, rápido e fácil.
          </Typography>
        </Box>
      </ContainerForm>
      <SideTrapeze />
    </ContainerLogin>
  );
};

export default Login;
