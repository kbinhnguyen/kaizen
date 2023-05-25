import { Box, VStack, Heading, Text, Divider, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import Head from 'next/head';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

export default function Investors() {
  return (
    <>
      <Head>
        <title>Kaizen | Investor</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <VStack pt={6} pb={{ base: 12, md: 24 }} w="100vw" h="max-content" spacing={{ base: 8, md: 16 }} minWidth="280px">
          <VStack w={{ base: '100%', md: '80%', lg: '50%' }} spacing={{ base: 0, md: 4 }} px={{ base: 10, md: 0 }}>
            <Heading
              fontSize={{ base: '20px', sm: '30px' }}
              w={{ base: '85%', lg: '80%' }}
              pl={{ base: 8, sm: 10, md: 14, lg: 16 }}
              as="h2"
            >
              Industry Perspective
            </Heading>
            <Heading as="h1" fontSize={{ base: '32px', sm: '46px', md: '64px' }}>Investors</Heading>
            <Text w={{ base: '85%', md: '80%' }} color="#656565" pt={{ base: 0, md: 8 }} textAlign="justify">
              Our investors serve as a great source for industry perspective, offer a network of relationships, and where appropriate, serve as board members and advisors to portfolio companies. We seek investors who are passionate about free enterprise and want to help small business entrepreneurs grow and prosper.
            </Text>
          </VStack>
          <VStack w={{ base: '100%', md: '85%', lg: '60%' }} spacing={{ base: 4, md: 8 }} display="flex" px={{ base: 10, md: 0 }}>
            <Divider borderColor="#5F5E5E" />
            <Text fontWeight="700" fontSize={{ base: '20px', md: '24px' }} alignSelf="start">HERE&apos;S HOW TO REACH US</Text>
            <Text pt={{ base: 0, md: 2 }} alignSelf="start" w="max-content">7086 Corporate Way<br />Dayton, OH 45459-4294</Text>
            <VStack pt={{ base: 0, md: 2 }} spacing={0} w="100%">
              <Text alignSelf="start">
                E: <Link as={NextLink} href="mailto:jdavis@kaizen-cp.com">jdavis@kaizen-cp.com</Link>
              </Text>
              <Text alignSelf="start">T: (937) 696-8006</Text>
            </VStack>
          </VStack>
        </VStack>
      </main>
      <Footer />
    </>
  );
}