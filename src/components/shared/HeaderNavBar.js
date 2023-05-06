import {
  Stack, Link, Box, Menu, MenuButton, MenuList, MenuItem, useBreakpointValue
} from '@chakra-ui/react';
import NextLink from 'next/link';
import NextImage from 'next/image';
import HamburgerIcon from '../../../public/hamburger.svg';
import { menu } from './menuItems';


export default function HeaderNavBar() {
  const isMobile = useBreakpointValue({ base: true, md: true, lg: false });

  if (!isMobile) {
    return (
      <Stack
        direction="row"
        spacing={{ lg: 6, xl: 12 }}
        align="center"
      >
        {menu.map(({ item, href }) => (
           <Link key={item} variant="topNavBar" as={NextLink} href={href}>{item}</Link>
        ))}
      </Stack>
    );
  }
  return (
    <Menu>
      <MenuButton as={Box} w="max-content" _hover={{ cursor: 'pointer' }}>
        <NextImage src={HamburgerIcon} alt="hamburger-icon" />
      </MenuButton>
      <MenuList>
        {menu.map(({ item, href }) => (
          <MenuItem key={item}>
            <Link as={NextLink} href={href} _hover={{ textDecoration: 'none' }} w="100%">{item}</Link>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}