import { Heading, VStack, Grid, GridItem, Box, Text, } from '@chakra-ui/react';
import NextImage from 'next/image';
import FirstImg from '../../../public/AdobeStock_52149427.jpeg';


export default function MidPanel() {
  return (
  <>
    <Grid w="100vw" h="200vh" templateRows='repeat(2, 1fr)' px={20}>
      <GridItem h="100%" pt={12} pb={6}>
        <Grid h="100%" templateColumns="repeat(2, 1fr)">
          <GridItem w="80%">
            <VStack spacing={6} pt={48}>
              <Heading variant="accented" as="h3" w="100%">OUR APPROACH</Heading>
              <Heading fontSize="48px" as="h2" w="100%">Plan for tomorrow. Today.</Heading>
              <Text>
                Kaizen Capital Partners is a resource for companies needing equity capital for transition and growth. We are a private investment firm seeking to help companies and their owners build value and provide exceptional return for all stakeholders.
              </Text>
            </VStack>
          </GridItem>
          <GridItem h="100%" position="relative">
            {/* <Box w="100%" h="100%"> */}
              <NextImage
                // width="100%"
                // height="100%"
                objectFit="cover"
                // position="absolute"
                layout="fill"
                src={FirstImg}
                alt="high-rise-buildings"
              />
            {/* </Box> */}
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem h="100%" pb={12} pt={6}>2nd item</GridItem>
    </Grid>
  </>)
}