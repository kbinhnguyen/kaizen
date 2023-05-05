import {
  Flex, Image, Spacer, Link
} from '@chakra-ui/react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import Logo from '../../../public/Group.png';
import NavBar from './HeaderNavBar';

export default function Header() {
  return (
    <Flex px={{ base: 10, md: 20 }} py={{ base: 12, md: 16 }} >
      <Link w="200px" as={NextLink} href="/">
        <NextImage src={Logo} alt="kaizen-logo" />
      </Link>
      <Spacer />
      <NavBar />
    </Flex>
  );
}