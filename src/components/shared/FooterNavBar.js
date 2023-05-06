import { Stack, Link, Flex, useBreakpointValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { menu } from './menuItems';

export default function FooterNavBar() {
  const isDesktop = useBreakpointValue({ md: true, base: false });

  if (isDesktop) {
    return (
      <Flex w="100%" direction="row" justifyContent="space-between">
        <Link variant="bottomNavBar" as={NextLink} href="#top">TOP</Link>
        <Stack
          direction="row"
          spacing={12}
          align="center"
        >
          <Link variant="bottomNavBar" as={NextLink} href="/">HOME</Link>
          {menu.map(({ item, href }) => (
            <Link key={item} variant="bottomNavBar" as={NextLink} href={href}>{item}</Link>
          ))}
        </Stack>
        <div />
      </Flex>
    );
  }

  return (
    <Stack w="100%" direction="column" spacing={{ base: 4, md: 8 }}>
      <Stack w="100%" direction="column" spacing={{ base: 2, md: 6 }} align="start">
        <Link  w="100%" variant="bottomNavBar" as={NextLink} href="/">HOME</Link>
        {menu.map(({ item, href }) => (
          <Link key={item} variant="bottomNavBar" as={NextLink} href={href}>{item}</Link>
        ))}
      </Stack>
      <Link variant="bottomNavBar" as={NextLink} href="#top" alignSelf="center">TOP</Link>
    </Stack>
  );
}