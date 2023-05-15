import { Heading, Flex, Box, useBreakpointValue } from '@chakra-ui/react';
import bg from '../../../public/AdobeStock_381853198.jpeg';
import Header from '../shared/Header';

const style = (isDesktop) => ({
  height: isDesktop ? '100vh' : '600px',
  minHeight: isDesktop ? '800px' : '600px',
  width: '100vw',
  minWidth: '350px',
  backgroundImage: `url(${bg.src})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
});

export default function TopPanel() {
  const isDesktop = useBreakpointValue({ md: true, base: false });

  return (
  <>
    <div style={style(isDesktop)}>
      <Header />
      <Box w={{ base: '85%', lg: '50%' }} pt={{ base: '10%', md: '5%' }} pl={{ base: 10, md: '10%'}}>
        <Heading as="h2" variant="tagline">Investing in and building business relationships with people who share our values.</Heading>
      </Box>
    </div>
  </>)
}