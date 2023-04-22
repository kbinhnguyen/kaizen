import { Heading, Flex, Box, } from '@chakra-ui/react';
import bg from '../../../public/AdobeStock_381853198.jpeg';
import Header from '../shared/Header';

const style = {
  height: '100vh',
  width: '100vw',
  backgroundImage: `url(${bg.src})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'relative',
};

export default function TopPanel() {
  return (
  <>
    <div style={style}>
      <Header />
      <Box position="absolute" w="45%" top="30%" left="10%">
        <Heading as="h2" variant="tagline">Investing in and building business relationships with people who share our values.</Heading>
      </Box>
    </div>
  </>)
}