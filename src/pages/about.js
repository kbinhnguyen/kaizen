import { Box, VStack, Heading, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import Img from '../../public/placeholder2.png';


export default function About() {
  return (
    <>
      <Header />
      <VStack pt={6} pb={40} w="100vw" h="max-content" spacing={12}>
        <VStack w="50%" spacing={4}>
          <Heading w="100%" pl={48} as="h2">About</Heading>
          <Heading w="100%" as="h1" fontSize="64px" textAlign="right" pr={72}>Kaizen</Heading>
        </VStack>
        <VStack w="55%" spacing={8} display="flex" textAlign="justify" pb={6}>
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
          <VStack spacing={6} py={4}>
            <Heading as="h3" color="#33647E" fontSize="26px" textAlign="center">
            “I believe that entrepreneurs perform the most noble acts of anyone in a free society.
            <br />By putting their capital at risk and creating jobs for others,<br />they keep the Great American Dream alive.”
            </Heading>
            <Text textAlign="left" w="100%">– Clay Mathile, founder, Aileron and author “Dream No Little Dreams”</Text>
          </VStack>
          <Text fontWeight="700" fontSize="24px" alignSelf="start">OUR VISION</Text>
          <Text>
            First, the ultimate measurement in life is not how many widgets you sell or your final bank balance. We believe our responsibility is to “leave the campsite in better condition than when we arrived.” Our skill set is business and we use those skills to affect a positive influence on individuals and organizations. We help people reach their goals and ambitions so they may do the same for others. That’s not to say a business should not be profitable. In fact, profit from a prudently run business operation ensures sustainability and allows us to further our mission.
          </Text>
          <Text>
            Second, we sincerely appreciate and respect the opportunities afforded everyone within the United States of America. We believe in the free enterprise system: freedom for individuals and businesses to operate and compete. We believe small business, through the jobs they create and the value they bring to their communities, is the fuel which drives economic growth and improves people’s lives.
          </Text>
        </VStack>
      </VStack>
      <Footer />
    </>
  );
};