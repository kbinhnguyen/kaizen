import { Box, VStack, Heading, Text, Divider } from '@chakra-ui/react';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

export default function Investors() {
  return (
    <>
      <Header />
      <VStack pt={6} pb={24} w="100vw" h="max-content" spacing={16}>
        <VStack w="50%" spacing={4}>
          <Heading w="55%" as="h2">Industry Perspective</Heading>
          <Heading as="h1" fontSize="64px">Investors</Heading>
          <Text w="80%" color="#656565" pt={8} textAlign="justify">
            Our investors serve as a great source for industry perspective, offer a network of relationships, and where appropriate, serve as board members and advisors to portfolio companies. We seek investors who are passionate about free enterprise and want to help small business entrepreneurs grow and prosper.
          </Text>
        </VStack>
        <VStack w="55%" spacing={8} display="flex">
          <Divider borderColor="#5F5E5E" />
          <Text fontWeight="700" fontSize="24px" alignSelf="start">HERE&apos;S HOW TO REACH US</Text>
          <Text pt={2} alignSelf="start" w="30%">7086 Corporate Way Dayton, OH 45459-4294</Text>
          <VStack pt={2} spacing={0} w="100%">
            <Text alignSelf="start">E: johara@cybeck.com</Text>
            <Text alignSelf="start">T: (937) 291-1900 ext. 256</Text>
          </VStack>
        </VStack>
      </VStack>
      <Footer />
    </>
  );
}