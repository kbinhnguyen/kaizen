import {
  Heading, Flex, Image, Box, Spacer, Divider, Text, HStack, VStack,
  Grid, GridItem, useBreakpointValue,
} from '@chakra-ui/react';
import NextImage from 'next/image';
import Logo from '../../../public/logo-group.png';
import NavBar from './FooterNavBar';

export default function Footer() {
  const isDesktop = useBreakpointValue({ md: true, base: false });

  return (
    <Flex
      direction="column"
      w="100vw"
      h={{ base: 'max-content', md: '50vh' }}
      minHeight={{ base: 'max-content', md: '380px' }}
      bg="#00263E"
      alignItems="center"
      justifyContent="center"
      py={{ base: 8, md: 12 }}
      px={{ base: 10, md: 20 }}
    >
      <Box w="200px" pb={{ base: 8, md: 0 }}>
        <NextImage src={Logo} alt="kaizen-logo" />
      </Box>
      <Spacer />
      <VStack spacing={6} w="100%">
        <NavBar />
        <Divider />
        <Flex w="100%" justifyContent="space-between" direction={{ base: 'column', md: 'row' }}>
          {isDesktop && (
            <>
              <Text color="#C2D5ED">&copy; 2023 Kaizen Capital Partners. All Rights Reserved.</Text>
              <HStack spacing={8} alignSelf="center">
                <Text color="#C2D5ED">Terms & Conditions</Text>
                <Text color="#C2D5ED">Privacy Policy</Text>
              </HStack>
            </>
          )}
          {!isDesktop && (
            <>
              <Grid w="100%" templateColumns="repeat(2, 1fr)" h="max-content" gap={0} pb={4}>
                <GridItem w="100%" borderRight="1px solid #C2D5ED" pr={4} display="flex" justifyContent="center" alignItems="center">
                  <Text w="100%" color="#C2D5ED" align="end">Terms & Conditions</Text>
                </GridItem>
                <GridItem borderLeft="1px solid #C2D5ED" w="100%" pl={4} display="flex" justifyContent="center" alignItems="center">
                  <Text w="100%" color="#C2D5ED" align="start">Privacy Policy</Text>
                </GridItem>
              </Grid>
              <Text alignSelf="center" color="#C2D5ED" w="100%">&copy; 2023 Kaizen Capital Partners. All Rights Reserved.</Text>
            </>
          )}
        </Flex>
      </VStack>
    </Flex>
  );
}