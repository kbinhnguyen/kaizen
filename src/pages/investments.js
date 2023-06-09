import { useEffect, useRef } from 'react';
import {
  Box, VStack, Heading, Text, Divider, List, ListItem, Grid, GridItem, Link, HStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import Head from 'next/head';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import Img from '../../public/AdobeStock_51349670_resized.jpeg';
import CustomAccordion from '../components/investments/CustomAccordion';
import PlusIcon from '../../public/plus_round_icon.svg';
import MinusIcon from '../../public/minus_round_icon.svg';

export default function Investments() {
  const expandRef = useRef(null);
  const isDesktop = useBreakpointValue({ md: true, base: false });

  useEffect(() => {
    expandRef.current.style.height = isDesktop ? '100%' : '95%';
  }, [isDesktop, expandRef]);

  return (
    <>
      <Head>
        <title>Kaizen | Investments</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <VStack pb={{ base: 8, sm: 24, md: 40 }} w="100vw" h="max-content" spacing={{ base: 0, md: 6 }} minWidth="280px">
          <VStack
            w={{ base: '100%', md: '85%', lg: '60%' }}
            px={{ base: 10, md: 0 }}
            spacing={{ base: 2, md: 4 }}
            pt={12}
            pb={{ base: 12, md: 12 }}
            position="relative"
          >
            <Box
              position="absolute"
              w={{ base: '45%', sm: '40%', md: '35%' }}
              h={0}
              right={{ base: 20, sm: 32, md: 40, lg: 60 }}
              top={{ base: '3%', md: 0 }}
              zIndex="-30"
              bg="#DCE3EB"
              ref={expandRef}
              className="expandDown"
            ></Box>
            <Heading
              fontSize={{ base: '22px', sm: '30px' }}
              w={{ base: '85%', lg: '80%' }}
              pl={{ base: 6, sm: 10, md: 32 }}
              as="h2"
              className="fontMoveUp fontTransition"
            >
              Building Relationships
            </Heading>
            <Heading as="h1" fontSize={{ base: '36px', sm: '46px', md: '64px' }} className="fontMoveUp fontTransition">Investments</Heading>
            <Text w={{ base: '85%', md: '67%' }} color="#656565" pt={{ base: 2, md: 8 }} pb={8} textAlign="justify">
              Investments come in many forms: people, money, energy and time. While all are important, our first priority is always people. We seek opportunities to invest in and build business relationships with people who share our values and perspectives on free enterprise.
            </Text>
            <VStack w="100%" spacing={{ base: 4, md: 8 }} textAlign="justify">
              <Text>
                We don’t just lend money; we partner with people and work with them to attain their goals and objectives through business. While we often invest financial resources, we also provide independent insights, governance, and management consulting rooted in decades of experience.
              </Text>
              <Text>
                Our investment partners are a diverse group, yet they all share a common vision for the opportunities of small business. We talk about “the three C’s”:
              </Text>
            </VStack>
          </VStack>
          <VStack
            w={{ base: '100%', md: '85%', lg: '60%' }}
            px={{ base: 10, md: 0 }}
            spacing={{ base: 4, md: 8 }}
            display="flex"
            textAlign="justify"
          >
            <List
              w={{ base: '100%', md: '75%' }}
              spacing={{ base: 6, sm: 8, md: 12 }}
              fontSize="20px"
              pt={4}
              pb={6}
              textAlign="left"
            >
              <ListItem>
                <Grid w="95%" h="max-content" templateColumns="1fr 12fr" pb={{ base: 4, md: 8 }} gap={{ base: 2, md: 4 }}>
                  <GridItem>
                    <Heading
                      h="100%"
                      as="h5"
                      fontSize={{ base: '18px', md: '20px' }}
                      fontWeight="700"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      01.
                    </Heading>
                  </GridItem>
                  <GridItem fontWeight="700" fontSize={{ base: '18px', md: '20px' }}>Character</GridItem>
                  <GridItem></GridItem>
                  <GridItem fontSize={{ base: '18px', md: '20px' }}>
                    Personal and business values, culture, and beliefs.
                  </GridItem>
                </Grid>
                <Divider borderColor="#5F5E5E" />
              </ListItem>
              <ListItem>
                <Grid w="95%" h="max-content" templateColumns="1fr 12fr" pb={{ base: 4, md: 8 }} gap={{ base: 2, md: 4 }}>
                  <GridItem>
                    <Heading
                      h="100%"
                      as="h5"
                      fontSize={{ base: '18px', md: '20px' }}
                      fontWeight="700"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      02.
                    </Heading>
                  </GridItem>
                  <GridItem fontWeight="700" fontSize={{ base: '18px', md: '20px' }}>Capability</GridItem>
                  <GridItem></GridItem>
                  <GridItem fontSize={{ base: '18px', md: '20px' }}>
                    Industry knowledge, technical ability, and experience in small business.
                  </GridItem>
                </Grid>
                <Divider borderColor="#5F5E5E" />
              </ListItem>
              <ListItem>
                <Grid w="95%" h="max-content" templateColumns="1fr 12fr" pb={{ base: 4, md: 8 }} gap={{ base: 2, md: 4 }}>
                  <GridItem h="100%">
                    <Heading
                      h="100%"
                      as="h5"
                      fontSize={{ base: '18px', md: '20px' }}
                      fontWeight="700"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      03.
                    </Heading>
                  </GridItem>
                  <GridItem fontWeight="700" fontSize={{ base: '18px', md: '20px' }}>Commitment</GridItem>
                  <GridItem></GridItem>
                  <GridItem fontSize={{ base: '18px', md: '20px' }}>
                    Personal passion and willingness to invest money, energy and time. We prefer meeting our potential partners, hosting an open exchange of background information, and getting to know each other long before we actually review “the numbers.” We believe no amount of legal paperwork will ever mitigate a poor business relationship.
                  </GridItem>
                </Grid>
                <Divider borderColor="#5F5E5E" />
              </ListItem>
            </List>
            <Text fontWeight="700" fontSize={{ base: '20px', sm: '22px', md: '24px' }} alignSelf="start">INVESTMENT STRATEGY</Text>
            <VStack spacing={2}>
              <Text fontWeight="700" alignSelf="start">
                Mezzanine Financing
              </Text>
              <Text>
                While we have partnered with companies during the start-up phase, our lending experience and expertise is focused on mezzanine financing. We look for entrepreneurs and companies with a proven business model requiring an infusion of intellectual and financial capital to fuel growth and expansion. Those facing barriers preventing activities such as: corporate acquisitions, product development, geographical or facility expansion or new equipment purchases can benefit from our expertise and understanding of business. We can craft a creative financing package utilizing interest, participation, and equity that is affordable and matches the needs of the growing organization.
              </Text>
            </VStack>
            <VStack spacing={2}>
              <Text fontWeight="700" alignSelf="start">
                Operating Partnerships
              </Text>
              <Text>
                Our unique Operating Partnership (OP) Program&trade; is a true example of partnering to reach an entrepreneur’s goals and objectives. It is a marriage of talents between you and our team to build a great company. This is where we excel! We view ourselves as “business catalysts” unlocking the potential of people and companies. Our Operating Partnership Program was developed to match the demonstrated skills of an operations-oriented individual with the proven skills and track record of Kaizen Capital Partners.
              </Text>
            </VStack>
            <VStack spacing={2}>
              <Text fontWeight="700" alignSelf="start">
                Acquisitions
              </Text>
              <Text>
                Our company acquisitions support our efforts in providing value to our partners. While we will occasionally review a company proposal independent of management, we are focused on matching an opportunity with an existing operations-oriented partner.
              </Text>
            </VStack>
            <Text pb={4}>
              We do not broker companies but do offer mergers and acquisitions consulting for both sellers and buyers. Please&nbsp;
              <Link as={NextLink} href="/contact" textDecoration="underline">contact us</Link>
              &nbsp;for additional information and current criteria for a potential acquisition.
            </Text>
            <Box
              w="100%"
              h={{ base: '30vh', md: '75vh' }}
              minHeight={{ base: '150px', md: '500px' }}
              position="relative"
              maxHeight="400px"
            >
              <NextImage
                style={{objectFit: 'cover'}}
                fill={true}
                src={Img}
                priority={true}
                alt=""
              />
            </Box>
            <Text fontWeight="700" fontSize={{ base: '20px', sm: '22px', md: '24px' }} alignSelf="start" pt={4}>BUSINESS FUNDING</Text>
            <Text>
              An entrepreneur’s decision on how to finance is a balance of timing, capital requirements, desired control, and retained equity. We can help evaluate the option which is best for you and your company.
            </Text>
            <CustomAccordion />
          </VStack>
        </VStack>
      </main>
      <Footer />
    </>
  );
}