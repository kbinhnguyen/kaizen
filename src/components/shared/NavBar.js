import { Stack, Box, Link, Center } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function NavBar() {
  return (
    <Stack
      direction="row"
      spacing={12}
      align="center"
    >

      <Link as={NextLink} href="/about">ABOUT</Link>
      <Link as={NextLink} href="/investments">INVESTMENTS</Link>
      <Link as={NextLink} href="/consulting">CONSULTING</Link>
      <Link as={NextLink} href="/investor">INVESTOR</Link>
      <Link as={NextLink} href="/contact">CONTACT</Link>
    </Stack>
  );
}