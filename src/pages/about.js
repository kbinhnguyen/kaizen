import {
  Box, VStack, Heading, Text, Grid, GridItem, HStack, Divider
} from '@chakra-ui/react';
import NextImage from 'next/image';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import Img from '../../public/placeholder2.png';
import ProfileImg from '../../public/placeholder3.png';

const staff = [];
const profile = {
  name: 'Name',
  title: 'Title/Position',
  img: ProfileImg,
};

for (let i = 0; i < 6; i++) {
  staff.push(profile);
};

export default function About() {
  return (
    <>
      <Header />
      <VStack pt={6} pb={{ base: 16, md: 20 }} w="100vw" h="max-content" spacing={{ base: 4, md: 12 }}>
        <VStack w={{ base: '100%', md: '80%', lg: '50%' }} spacing={{ base: 0, md: 4 }} px={{ base: 10, md: 0 }}>
          <Heading w="100%" pl={{ base: 12, sm: 24, md: 48 }} as="h2">About</Heading>
          <Heading as="h1" fontSize={{ base: '46px', md: '64px' }}>Kaizen</Heading>
        </VStack>
        <VStack
          w={{ base: '100%', md: '85%', lg: '60%' }}
          px={{ base: 10, md: 0 }}
          spacing={{ base: 6, md: 10 }}
          display="flex"
          textAlign="justify"
          pb={{ base: 2, md: 4 }}
        >
          <Text>
            Kaizen Capital Partners is a resource for companies needing equity capital for transition and growth. We are a private investment firm seeking to help companies and their owners build value and provide exceptional returns for all stakeholders.
          </Text>
          <Box w="100%" h="500px" position="relative">
            <NextImage
              objectFit="cover"
              layout="fill"
              src={Img}
              alt="image"
            />
          </Box>
          <VStack spacing={6} py={{ base: 2, md: 4 }}>
            <Heading as="h3" color="#33647E" fontSize={{ base: '20px', sm: '24px', md: '26px'}} textAlign="center">
            “I believe that entrepreneurs perform the most noble acts of anyone in a free society.
            <br />By putting their capital at risk and creating jobs for others,<br />they keep the Great American Dream alive.”
            </Heading>
            <Text textAlign="left" w="100%">– Clay Mathile, founder, Aileron and author “Dream No Little Dreams”</Text>
          </VStack>
          <Text fontWeight="700" fontSize={{base: '20px', md: '24px' }} alignSelf="start">OUR VISION</Text>
          <Text>
            First, the ultimate measurement in life is not how many widgets you sell or your final bank balance. We believe our responsibility is to “leave the campsite in better condition than when we arrived.” Our skill set is business and we use those skills to affect a positive influence on individuals and organizations. We help people reach their goals and ambitions so they may do the same for others. That’s not to say a business should not be profitable. In fact, profit from a prudently run business operation ensures sustainability and allows us to further our mission.
          </Text>
          <Text>
            Second, we sincerely appreciate and respect the opportunities afforded everyone within the United States of America. We believe in the free enterprise system: freedom for individuals and businesses to operate and compete. We believe small business, through the jobs they create and the value they bring to their communities, is the fuel which drives economic growth and improves people’s lives.
          </Text>
          <Grid w="100%" templateColumns="repeat(2, 1fr)" gap={{ base: 8, md: 16 }} pt={2}>
            <GridItem>
              <Text fontWeight="700" fontSize={{base: '20px', md: '24px' }} alignSelf="start" pb={6}>OUR VALUES</Text>
              <Text textAlign="left">
                Our values help communicate our mission and guide our personal actions and business relationships
              </Text>
            </GridItem>
            <GridItem>
              <Grid w="100%" templateRows="repeat(5, max-content)" gap={8}>
                <GridItem>
                  <VStack spacing={4}>
                    <HStack spacing={4} w="100%">
                      <Heading as="h5" fontSize="20px">01.</Heading>
                      <Text>Respect</Text>
                    </HStack>
                    <Divider borderColor="#5F5E5E" />
                  </VStack>
                </GridItem>
                <GridItem>
                  <VStack spacing={4}>
                    <HStack spacing={4} w="100%">
                      <Heading as="h5" fontSize="20px">02.</Heading>
                      <Text>Integrity</Text>
                    </HStack>
                    <Divider borderColor="#5F5E5E" />
                  </VStack>
                </GridItem>
                <GridItem>
                  <VStack spacing={4}>
                    <HStack spacing={4} w="100%">
                      <Heading as="h5" fontSize="20px">03.</Heading>
                      <Text>Responsibility</Text>
                    </HStack>
                    <Divider borderColor="#5F5E5E" />
                  </VStack>
                </GridItem>
                <GridItem>
                  <VStack spacing={4}>
                    <HStack spacing={4} w="100%">
                      <Heading as="h5" fontSize="20px">04.</Heading>
                      <Text>Kaizen</Text>
                    </HStack>
                    <Divider borderColor="#5F5E5E" />
                  </VStack>
                </GridItem>
                <GridItem>
                  <VStack spacing={4}>
                    <HStack spacing={4} w="100%">
                      <Heading as="h5" fontSize="20px">05.</Heading>
                      <Text>Pride</Text>
                    </HStack>
                    <Divider borderColor="#5F5E5E" />
                  </VStack>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
          <Text fontWeight="700" fontSize={{base: '20px', md: '24px' }} alignSelf="start">OUR TEAM</Text>
          <Grid
            w="100%"
            gap={{ base: 8, md: 10 }}
            templateRows={{ base: 'repeat(6, max-content)', md: 'repeat(3, max-content)' }}
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
          >
            {staff.map(({ name, title, img }) => (
              <GridItem key={name}>
                <VStack spacing={2}>
                  <Box w="100%" h="450px" position="relative">
                    <NextImage
                      objectFit="cover"
                      layout="fill"
                      src={img}
                      alt="image"
                    />
                  </Box>
                  <Text w="100%" textAlign="left" color="#757575" pt={{ base: 0, md: 4 }}>
                    {name}
                  </Text>
                  <Text w="100%" textAlign="left" fontSize="16px">
                    {title}
                  </Text>
                </VStack>
              </GridItem>
            ))}
          </Grid>
        </VStack>
      </VStack>
      <Footer />
    </>
  );
};