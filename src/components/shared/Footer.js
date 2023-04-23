import { Heading, Flex, Image, Box, Spacer, Divider, Text, HStack, VStack } from '@chakra-ui/react';
import NextImage from 'next/image';
import Logo from '../../../public/logo-group.png';
import NavBar from './FooterNavBar';

export default function Footer() {
  return (
    <Flex
      direction="column"
      w="100vw"
      h="50vh"
      bg="#00263E"
      alignItems="center"
      justifyContent="center"
      py={12}
      px={20}
    >
      <Box w="200px">
        <NextImage src={Logo} alt="kaizen-logo" />
      </Box>
      <Spacer />
      <VStack spacing={6} w="100%">
        <NavBar />
        <Divider />
        <Flex w="100%" justifyContent="space-between">
          <Text color="#C2D5ED">2023 Kaizen Capital Partners. All Rights Reserved.</Text>
          <HStack spacing={8}>
            <Text color="#C2D5ED">Terms & Conditions</Text>
            <Text color="#C2D5ED">Privacy Policy</Text>
          </HStack>
        </Flex>
      </VStack>
    </Flex>
  );
}