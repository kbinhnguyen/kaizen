import { Box, VStack, Heading, Text, Divider, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

export default function Contact() {
  return (
    <>
      <Header />
      <VStack pt={{ base: 0, md: 6 }} pb={{ base: 12, md: 24 }} w="100vw" h="max-content" spacing={{ base: 8, md: 16 }} minWidth="350px">
        <VStack w={{ base: '100%', md: '80%', lg: '50%' }} px={{ base: 10, md: 0 }}>
          <Heading as="h1" fontSize={{ base: '46px', md: '64px' }}>Contact</Heading>
        </VStack>
        <VStack w={{ base: '100%', md: '85%', lg: '60%' }} spacing={{ base: 4, md: 8 }} display="flex" px={{ base: 10, md: 0 }}>
          <Text fontWeight="700" fontSize={{ base: '20px', md: '24px' }} alignSelf="start">HERE&apos;S HOW TO REACH US</Text>
          <Text pt={{ base: 0, md: 2 }} alignSelf="start" w="max-content">7086 Corporate Way<br />Dayton, OH 45459-4294</Text>
          <VStack pt={{ base: 0, md: 2 }} spacing={0} w="100%">
            <Text alignSelf="start">
              E: <Link as={NextLink} href="mailto:johara@cybeck.com">johara@cybeck.com</Link>
            </Text>
            <Text alignSelf="start">T: (937) 291-1900 ext. 256</Text>
          </VStack>
        </VStack>
      </VStack>
      <Footer />
    </>
  );
}