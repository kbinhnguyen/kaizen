import { Box, VStack, Heading, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import Img from '../../public/placeholder1.png';

export default function Investments() {
  return (
    <>
      <Header />
      <Box position="absolute" w="20%" h="92vh" right="37%" top={32} zIndex="-30" bg="#DCE3EB"></Box>
      <VStack pt={6} pb={40} w="100vw" h="max-content" spacing={16}>
        <VStack w="50%" spacing={4}>
          <Heading w="65%" as="h2">Building Relationships</Heading>
          <Heading as="h1" fontSize="64px">Investments</Heading>
          <Text w="80%" color="#656565" pt={8} textAlign="justify">
            Investments come in many forms: people, money, energy and time. While all are important, our first priority is always people. We seek opportunities to invest in and build business relationships with people who share our values and perspectives on free enterprise.
          </Text>
        </VStack>
        <VStack w="55%" spacing={8} display="flex" textAlign="justify">
          <Text>
            We don’t just lend money; we partner with people and work with them to attain their goals and objectives through business. While we often invest financial resources, we also provide independent insights, governance, and management consulting rooted in decades of experience.
          </Text>
          <Text>
            Our investment partners are a diverse group, yet they all share a common vision for the opportunities of small business. We talk about “the three C’s”:
          </Text>
          <Text fontWeight="700" fontSize="24px" alignSelf="start">INVESTMENT STRATEGY</Text>
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
            We do not broker companies but do offer mergers and acquisitions consulting for both sellers and buyers. Please contact us for additional information and current criteria for a potential acquisition.
          </Text>
          <Box w="100%" h="500px" position="relative">
            <NextImage
              objectFit="cover"
              layout="fill"
              src={Img}
              alt="image"
            />
          </Box>
          <Text fontWeight="700" fontSize="24px" alignSelf="start" pt={4}>BUSINESS FUNDING</Text>
          <Text>
            An entrepreneur’s decision on how to finance is a balance of timing, capital requirements, desired control, and retained equity. We can help evaluate the option which is best for you and your company.
          </Text>
        </VStack>


      </VStack>
      <Footer />
    </>
  );
}