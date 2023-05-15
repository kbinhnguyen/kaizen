import {
  Box, VStack, Heading, Text, Grid, GridItem, HStack, Divider, IconButton, Link,
} from '@chakra-ui/react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import Head from 'next/head';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import Img from '../../public/AdobeStock_514819294.jpeg';
import LinkedInIcon from '../../public/LI-In-Bug.png';
import OharaImg from '../../public/Joe_OHara.jpeg';
import DavisImg from '../../public/Joe_Davis.jpeg';

const ohara = {
  name: "Joseph M. O'Hara",
  title: 'Managing Partner',
  linkedIn: 'https://www.linkedin.com/in/jmohara/',
  img: OharaImg,
};

const davis = {
  name: 'Joseph W. Davis',
  title: 'Partner',
  linkedIn: 'https://www.linkedin.com/in/joe-davis-8a44b820/',
  img: DavisImg,
};

const staff = [ohara, davis];

const LIIcon = () => (
  <Box w="25px" h="25px" position="relative" m={0}>
    <NextImage
      style={{objectFit: 'contain'}}
      fill={true}
      src={LinkedInIcon}
      alt="linkedIn-logo"
    />
  </Box>
);


export default function About() {
  return (
    <>
      <Head>
        <title>Kaizen | About Us</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header />
        <VStack pt={6} pb={{ base: 16, md: 20 }} w="100vw" h="max-content" spacing={{ base: 4, md: 12 }} minWidth="350px">
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
            <Box w="100%" h={{ base: '40vh', md: '75vh' }} minHeight={{ base: '250px', md: '500px' }} position="relative">
              <NextImage
                style={{objectFit: 'cover'}}
                fill={true}
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
            <Grid w="100%"
              templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)'}}
              templateRows={{ base: 'repeat(2, max-content)', md: '1fr' }}
              gap={{ base: 8, md: 16 }}
              pt={2}
            >
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
                        <Heading as="h5" fontSize="20px" fontWeight="450">01.</Heading>
                        <Text>Respect</Text>
                      </HStack>
                      <Divider borderColor="#5F5E5E" />
                    </VStack>
                  </GridItem>
                  <GridItem>
                    <VStack spacing={4}>
                      <HStack spacing={4} w="100%">
                        <Heading as="h5" fontSize="20px" fontWeight="450">02.</Heading>
                        <Text>Integrity</Text>
                      </HStack>
                      <Divider borderColor="#5F5E5E" />
                    </VStack>
                  </GridItem>
                  <GridItem>
                    <VStack spacing={4}>
                      <HStack spacing={4} w="100%">
                        <Heading as="h5" fontSize="20px" fontWeight="450">03.</Heading>
                        <Text>Responsibility</Text>
                      </HStack>
                      <Divider borderColor="#5F5E5E" />
                    </VStack>
                  </GridItem>
                  <GridItem>
                    <VStack spacing={4}>
                      <HStack spacing={4} w="100%">
                        <Heading as="h5" fontSize="20px" fontWeight="450">04.</Heading>
                        <Text>Kaizen</Text>
                      </HStack>
                      <Divider borderColor="#5F5E5E" />
                    </VStack>
                  </GridItem>
                  <GridItem>
                    <VStack spacing={4}>
                      <HStack spacing={4} w="100%">
                        <Heading as="h5" fontSize="20px" fontWeight="450">05.</Heading>
                        <Text>Pride</Text>
                      </HStack>
                      <Divider borderColor="#5F5E5E" />
                    </VStack>
                  </GridItem>
                </Grid>
              </GridItem>
            </Grid>
            <Text fontWeight="700" fontSize={{base: '20px', md: '24px' }} alignSelf="start" pt={{ base: 6, md: 0 }}>OUR TEAM</Text>
            <Grid
              w="100%"
              gap={{ base: 8, md: 10 }}
              templateRows={{ base: 'repeat(2, max-content)', md: 'repeat(1, max-content)' }}
              templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
            >
              {staff.map(({ name, title, img, linkedIn }) => (
                <GridItem key={name}>
                  <VStack spacing={2}>
                    <Box w="100%" h="450px" position="relative">
                      <NextImage
                        style={{objectFit: 'cover'}}
                        fill={true}
                        src={img}
                        alt={`${name.split(' ')[1]}`}
                      />
                    </Box>
                    <Text w="100%" textAlign="left" color="#757575" pt={{ base: 0, md: 4 }}>
                      {name}
                    </Text>
                    <HStack spacing={{ base: 2, md: 4 }} width="100%">
                      <Text textAlign="left" fontSize={{ base: '14px', sm:'16px', md: '18px' }}>
                        {title}
                      </Text>
                      <Link as={NextLink} href={linkedIn} display="flex" alignItems="center" target="_blank" rel="noopener noreferrer">
                        <Box w="25px" h="25px" position="relative" m={0} as="button" _hover={{ opacity: 0.7 }}>
                          <NextImage
                            style={{objectFit: 'contain'}}
                            fill={true}
                            src={LinkedInIcon}
                            alt="linkedIn-logo"
                          />
                        </Box>
                      </Link>
                    </HStack>
                  </VStack>
                </GridItem>
              ))}
            </Grid>
          </VStack>
        </VStack>
        <Footer />
      </main>
    </>
  );
};