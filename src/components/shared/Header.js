import { Heading, Flex, Image, Box, Spacer } from '@chakra-ui/react';
import NextImage from 'next/image';
import Logo from '../../../public/Group.png';
import NavBar from './NavBar.js';

export default function Header() {
  return (
    <Flex p={12}>
      <Box w="200px"
      // position="relative"
      >
        <NextImage
        // objectFit="cover"
        // layout="fill"
        src={Logo} alt="kaizen-logo" />
      </Box>
      <Spacer />
      <NavBar />
    </Flex>
  );
}