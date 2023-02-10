import { Box, Button, Typography } from '@mui/material';
import { Container404, PolygonOne, PolygonTwo } from '../styles/pages/404';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Page404: React.FC = () => {
  const { push } = useRouter();
  return (
    <Container404>
      <PolygonOne />
      <PolygonTwo />
      <Image src="/images/404.svg" alt="Image 404" width="600" height="250" />
      <Box>
        <span>Page not found</span>
        <Button fullWidth variant="contained" onClick={() => push('/home')}>
          Go back
        </Button>
      </Box>
    </Container404>
  );
};

export default Page404;
