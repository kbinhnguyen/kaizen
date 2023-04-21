import { Stack, Box, Link, Center } from '@chakra-ui/react';

export default function NavBar() {
  return (
    <Stack
      direction="row"
      spacing={12}
      align="center"
    >

      <Link href="/about">ABOUT</Link>
      <Link href="/investment">INVESTMENT</Link>
      <Link href="/consulting">CONSULTING</Link>
      <Link href="/investor">INVESTOR</Link>
      <Link href="/contact">CONTACT</Link>
    </Stack>
  );
}