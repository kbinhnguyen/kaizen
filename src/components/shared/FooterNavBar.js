import { Stack, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function FooterNavBar() {
  return (
    <Stack
      direction="row"
      spacing={12}
      align="center"
    >
      <Link variant="bottomNavBar" as={NextLink} href="/">HOME</Link>
      <Link variant="bottomNavBar" as={NextLink} href="/about">ABOUT</Link>
      <Link variant="bottomNavBar" as={NextLink} href="/investments">INVESTMENTS</Link>
      <Link variant="bottomNavBar" as={NextLink} href="/consulting">CONSULTING</Link>
      <Link variant="bottomNavBar" as={NextLink} href="/investor">INVESTOR</Link>
      <Link variant="bottomNavBar" as={NextLink} href="/contact">CONTACT</Link>
    </Stack>
  );
}