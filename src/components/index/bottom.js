import {
  Grid, GridItem, VStack, Heading, Link, Text, Divider, Box,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import bg from '../../../public/AdobeStock_386588109.jpeg';

const style = {
  height: '100%',
  backgroundImage: `url(${bg.src})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

export default function BottomPanel() {
  return (
    <Grid
      w="100vw"
      h={{ base: 'max-content', md: '100vh' }}
      minHeight={{ base: 'max-content', md: '800px'}}
      templateRows={{ base: '500px 550px', md: '5fr 2fr'}}
      gap={{ base: 0, md: 14 }}
      className="eleToWatch"
    >
      <GridItem w="100%" h="100%" style={style} display="flex" justifyContent="end">
        <VStack pr={{ base: 10, md: 20}} pt={{ base: 32, sm: 36, lg: 40 }} w={{ base: '65%', lg: '45%' }} spacing={8}>
            <Heading variant="tagline" as="h2">Permanent Capital allows us to be patient for long-term results.</Heading>
          <Box w="100%">
            <Link variant="learnMore" w="max-content" as={NextLink} href="/about">Learn More</Link>
          </Box>
        </VStack>
      </GridItem>
      <GridItem w="100%" h="100%" px={{ base: 10, md: 20 }} display="flex" alignItems="center">
        <Grid
          templateColumns={{ base: '1fr', md: '7fr repeat(3, 5fr)' }}
          templateRows={{ base: 'repeat(4, max-content)', md: '1fr' }}
          gap={{ base: 8, md: 14 }}
          pb={{ base: 8, md: 14 }}
        >
          <GridItem>
            <VStack spacing={{ base: 2, md: 6 }} w={{ base: '80%', md: '100%', lg: '65%' }}>
              <Heading as="h2" w="100%" color="#33647E">Business Strategy</Heading>
              <Divider borderColor="#33647E" />
            </VStack>
          </GridItem>
          <GridItem>
            <VStack spacing={3}>
              <Heading as="h4" fontSize={{ base: '24px', md: '28px' }} w="100%" color="#33647E">Investments</Heading>
              <Text w="100%" fontSize="18px">We seek opportunities to invest in and build business relationships with people who share our values.</Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack spacing={3}>
              <Heading as="h4" fontSize={{ base: '24px', md: '28px' }} w="100%" color="#33647E">Consulting</Heading>
              <Text w="100%" fontSize="18px">We always look forward to sharing our knowledge and expertise.</Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack spacing={3}>
              <Heading as="h4" fontSize={{ base: '24px', md: '28px' }} w="100%" color="#33647E">Investors</Heading>
              <Text w="100%" fontSize="18px">We seek investors who want to help others grow and prosper.</Text>
            </VStack>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
}