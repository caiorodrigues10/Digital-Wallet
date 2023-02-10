import {
  TextField,
  Typography,
  Link,
  Button,
  Box,
  Divider,
} from '@mui/material';
import { ContainerSingUp, ContentForm, Info } from './styles';
import { FaFacebookF } from 'react-icons/fa';
import Image from 'next/image';
import { colorSystem } from '../../styles/colors';

const SingUp: React.FC = () => {
  return (
    <ContainerSingUp>
      <ContentForm>
        <Box>
          <h2>Create account</h2>
          <TextField
            label="Name"
            variant="outlined"
            sx={{
              width: '100%',
            }}
          />
          <TextField
            label="Last name"
            variant="outlined"
            sx={{
              width: '100%',
            }}
          />
          <TextField
            label="Email"
            variant="outlined"
            sx={{
              width: '100%',
            }}
          />
          <TextField
            label="Password"
            variant="outlined"
            sx={{
              width: '100%',
            }}
          />
          <TextField
            label="Confirm password"
            variant="outlined"
            sx={{
              width: '100%',
            }}
          />
          <Typography fontSize="14px">
            By clicking Create account, I agree that I have read and accepted
            the{' '}
            <Link href="#" underline="hover" fontWeight="600">
              Terms of Use
            </Link>{' '}
            and{' '}
            <Link href="#" underline="hover" fontWeight="600">
              Privacy Policy.
            </Link>
          </Typography>
          <Button variant="contained">Create account</Button>
          <Divider>
            <Typography color="#8B8B8B" fontSize="14px">
              or use account
            </Typography>
          </Divider>
          <Button
            variant="contained"
            sx={{
              background: '#3B5998',
              '&:hover': {
                background: '#2f477c',
              },
            }}
            startIcon={<FaFacebookF color="#fff" size="14px" />}
          >
            Facebook
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: '#000',
              border: '1px solid #000',
              '&:hover': {
                border: '1px solid #000',
              },
            }}
            startIcon={
              <Image src="/images/google.svg" alt="" width="14" height="14" />
            }
          >
            google
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
              Already have an account?
            </Typography>
            <Link href="/login" underline="hover" fontWeight="600">
              Log in
            </Link>
          </Box>
        </Box>
      </ContentForm>
      <Info>
        <Image src="/images/coinPig.svg" alt="" width="600" height="600" />
        <Typography
          color="#FBFBF2"
          fontSize="24px"
          fontWeight="500"
          maxWidth="600px"
          textAlign="center"
        >
          Here at DFT, we are willing to direct you to the fastest path for you
          to reach your goals.
        </Typography>
      </Info>
    </ContainerSingUp>
  );
};
export default SingUp;
