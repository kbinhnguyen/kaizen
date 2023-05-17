import {
  Stack, Link, Box, Menu, MenuButton, MenuList, MenuItem, useBreakpointValue, Button,
  Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton,
  useDisclosure, Divider, Flex,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import NextImage from 'next/image';
import HamburgerIcon from '../../../public/hamburger.svg';
import CloseButton from '../../../public/close_button.svg';
import Logo from '../../../public/Group.png';
import { menu } from './menuItems';


export default function HeaderNavBar() {
  const isMobile = useBreakpointValue({ base: true, md: true, lg: false });
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (!isMobile) {
    return (
      <Stack
        direction="row"
        spacing={{ lg: 6, xl: 12 }}
        align="center"
      >
        {menu.map(({ item, href }) => (
           <Link className="topNavBar" key={item} variant="topNavBar" as={NextLink} href={href}>{item}</Link>
        ))}
      </Stack>
    );
  }

  return (
    <>
      <Box as={Button} px={0} bg="none" w="max-content" _hover={{ bg: 'none' }} onClick={onOpen}>
        <NextImage src={HamburgerIcon} alt="hamburger-icon" />
      </Box>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader pt={4} display="flex" direction="row" justifyContent="space-between" alignItems="center">
            <Link as={NextLink} href="/" _hover={{ boxShadow: 'none' }} _focus={{ boxShadow: 'none' }}>
              <Box w="150px">
                <NextImage src={Logo} alt="kaizen-logo" />
              </Box>
            </Link>
            <Box h="30px" w="30px" _hover={{ opacity: 0.6, cursor: 'pointer' }} onClick={() => onClose()} position="relative">
              <NextImage src={CloseButton} alt="close-button" style={{ objectFit: 'contain' }} fill={true} />
            </Box>
          </DrawerHeader>
          <DrawerBody>
            <Stack
              direction="column"
              spacing={6}
              align="center"
              w="100%"
            >
              <Divider borderColor="#CDCDCD" opacity={1} w="100vw" />
              {menu.map(({ item, href }) => (
                <Link key={item} variant="mobileNavBar" as={NextLink} href={href} w="100%">{item}</Link>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}