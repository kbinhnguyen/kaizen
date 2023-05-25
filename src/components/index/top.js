import { Heading, Flex, Box, useBreakpointValue } from '@chakra-ui/react';
import bg from '../../../public/AdobeStock_381853198_resized.jpeg';
import Header from '../shared/Header';

const style = (isDesktop) => ({
  height: 'max(100vh, 780px)',
  minHeight: '780px',
  width: '100vw',
  minWidth: '320px',
  backgroundImage: `url(${bg.src})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
});

export default function TopPanel() {
  const isDesktop = useBreakpointValue({ md: true, base: false });

  return (
    <div style={style(isDesktop)} className="fadeIn">
      <Header />
      <Box w={{ base: '85%', lg: '50%' }} pt={{ base: '10%', md: '5%' }} pl={{ base: 10, md: '10%'}}>
        <Heading
          as="h2"
          variant="tagline"
        >
          Investing in and building business relationships with people who share our values.
        </Heading>
      </Box>
    </div>
  );
}