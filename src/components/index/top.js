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
      {/* <Flex w="40%"> */}
        <Header />
        <Box position="absolute" w="40%" top="30%" left="10%">
          <Heading as="h2" color="#00263E" fontSize="40px">Investing in and building business relationships with people who share our values.</Heading>
        </Box>
      {/* </Flex> */}
    </div>
  </>)
}