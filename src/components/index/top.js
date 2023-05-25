import { Heading, Flex, Box } from '@chakra-ui/react';
import bg from '../../../public/AdobeStock_381853198_resized.jpeg';
import Header from '../shared/Header';

const style = {
  height: '100vh',
  minHeight: 'min(800px, 100vh)',
  maxHeight: 'max(800px, 100vh)',
  width: '100vw',
  minWidth: '280px',
  backgroundImage: `url(${bg.src})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

export default function TopPanel() {
  return (
    <div style={style} className="fadeIn">
      <Header />
      <Box id="taglineWrapper" w={{ base: '85%', lg: '50%' }} pt={{ base: '40%', md: '10%' }} pl={{ base: 10, md: '10%'}}>
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