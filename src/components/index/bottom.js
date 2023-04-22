import { Grid, GridItem, VStack, Heading, Link, Text, Divider, Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import bg from '../../../public/AdobeStock_386588109.jpeg';

const style = {
  height: '100%',
  width: '100%',
  backgroundImage: `url(${bg.src})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  // position: 'relative',
};

export default function BottomPanel() {
  return (
  <>
    <Grid w="100vw" h="100vh" templateRows="5fr 2fr" gap={14}>
      <GridItem w="100%" h="100%" style={style} display="flex" justifyContent="end">
        <VStack px={20} pt={32} w="45%" spacing={8}>
          <Heading variant="tagline" as="h2">Investing in and building business relationships with people who share our values.</Heading>
          <Box w="100%">
            <Link variant="learnMore" w="max-content" as={NextLink} href="/contact">Schedule a Meeting</Link>
          </Box>
        </VStack>
      </GridItem>
      <GridItem w="100%" h="100%" px={20}>
        <Grid templateColumns="7fr repeat(3, 5fr)" gap={14}>
          <GridItem>
            <VStack spacing={6} w="65%">
              <Heading as="h2" w="100%" color="#33647E">Business Strategy</Heading>
              <Divider borderColor="#33647E" />
            </VStack>
          </GridItem>
          <GridItem>
            <VStack spacing={3}>
              <Heading as="h4" fontSize="28px" w="100%" color="#33647E">Investments</Heading>
              <Text fontSize="18px">We seek opportunities to invest in and build business relationships with people who share our values.</Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack spacing={3}>
              <Heading as="h4" fontSize="28px" w="100%" color="#33647E">Consulting</Heading>
              <Text fontSize="18px">We always look forward to sharing our knowledge and expertise.</Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack spacing={3}>
              <Heading as="h4" fontSize="28px" w="100%" color="#33647E">Investors</Heading>
              <Text fontSize="18px">We seek investors who want to help others grow and prosper.</Text>
            </VStack>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  </>);
}