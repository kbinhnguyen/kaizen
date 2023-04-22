import { Heading, Flex, Image, Box, Spacer } from '@chakra-ui/react';
import NextImage from 'next/image';
import Logo from '../../../public/Group.png';
import NavBar from './HeaderNavBar';

export default function Header() {
  return (
    <Flex px={20} py={16} >
      <Box w="200px">
        <NextImage src={Logo} alt="kaizen-logo" />
      </Box>
      <Spacer />
      <NavBar />
    </Flex>
  );
}