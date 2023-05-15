
import { Box, VStack, Heading, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import Head from 'next/head';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import Img from '../../public/AdobeStock_252906008.jpeg';

export default function Consulting() {

  return (
    <>
      <Head>
        <title>Kaizen | Consulting</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header />
        <VStack
          pb={{ base: 12, sm: 20, md: 28, lg: 40}}
          w="100vw" h="max-content"
          spacing={{ base: 8, md: 16 }}
          minWidth="350px"
        >
          <VStack
            w={{ base: '100%', md: '80%', lg: '50%' }}
            spacing={{ base: 0, md: 4 }}
            px={{ base: 10, md: 0 }}
            py={10}
            position="relative"
          >
            <Box
              position="absolute"
              w={{ base: '35%', md: '40%' }}
              h={{ base: '90%', md: '100%' }}
              right={{ base: 32, md: 40 }}
              top={{ base: '5%', md: 0 }}
              zIndex="-30"
              bg="#DCE3EB"
            ></Box>
            <Heading w={{ base: '85%', lg: '80%' }} pl={{ base: 8, sm: 10, md: 14, lg: 16 }} as="h2">Knowledge & Expertise</Heading>
            <Heading as="h1" fontSize={{ base: '46px', md: '64px' }}>Consulting</Heading>
            <Text w={{ base: '85%', md: '80%' }}  color="#656565" pt={{ base: 2, md: 8 }} textAlign="justify">
              Investing, owning and managing our own companies have put us in an excellent position to add value to your company. We always look forward to sharing our knowledge and expertise.
            </Text>
          </VStack>
          <VStack
            w={{ base: '100%', md: '85%', lg: '60%' }}
            px={{ base: 10, md: 0 }}
            spacing={{ base: 4, md: 8 }}
            display="flex"
            textAlign="justify"
          >
            <Text fontWeight="700" fontSize={{ base: '20px', sm: '22px', md: '24px' }} alignSelf="start">INVESTMENT EXPERTISE</Text>
            <VStack spacing={2}>
              <Text fontWeight="700" alignSelf="start">
                Mergers & Acquisitions
              </Text>
              <Text>
                Having experience on both the buyer and seller side of transactions, we bring a unique perspective and process which produces an extremely high rate of successful conclusions. Our ability to explain and translate the transaction points to all parties involved and structure creative terms is an advantage to our partners. We are particularly effective in the emotional transactions involving partners and family succession.
              </Text>
            </VStack>
            <Text>
              Our underlining objective is to create a mutually beneficial transaction by guiding the parties through our defined process when buying, selling or combining businesses: identify all of the constituents and empathetically determine their needs, objectives and desires; creatively brainstorm potential structures and terms to best meet the needs of all involved in the transaction; discuss and evaluate the options ultimately selecting the appropriate one; develop implementation plans; and establish a review system to resolve any issues as we move through settlement.
            </Text>
            <Text>
              We are also available to assist post-settlement to integrate new managers and avoid “near death” experiences. Unanticipated events happen, but having a trusted advisor assisting as you lead the transition can prove to be beneficial.
            </Text>
            <VStack spacing={2}>
              <Text fontWeight="700" alignSelf="start">
                Strategic Planning
              </Text>
              <Text>
                Reach your goals and objectives by having a clearly articulated vision and plan for your team. Our strategic planning process will put your organization in a position to take advantage of today’s sales and tomorrow’s opportunities by aligning your resources and strategies. Having an experienced, independent and objective strategic planning consultant to question, probe and challenge subjective thinking, while fostering collaboration, produces a great result.
              </Text>
            </VStack>
            <Text>
              Our process follows a framework to analyze and assess the factors that create an effective strategic plan: industry profile; SWOT analysis; key industry success factors; distinctive competence; strategy formulation; strategy implementation; and evaluation and control.
            </Text>
            <Text>
              We believe a small business exists for the benefit of its owner(s) and is the vehicle for achieving their dreams and vision. Challenge your company to attain its full potential when entrepreneurial passion, personal drivers, and marketplace opportunity are in alignment. If your goals are important to you, we can help present them to your team with the clarity that assures success.
            </Text>
            <VStack spacing={2}>
              <Text fontWeight="700" alignSelf="start">
                Corporate Governance
              </Text>
              <Text>
                We guide leaders in all aspects of corporate governance by focusing on people, practices, and policies. Applying best practices for management oversight and establishing behavioral dynamics of a corporate board or advisory group enhances the reputation of your organization and makes it more attractive to customers, investors, and suppliers.
              </Text>
            </VStack>
            <Text>
              It is never too early to establish a good corporate governance program that balances the various relationships between your company and its constituencies. Our goal is to provide the insights and controls you need to better manage your organization and achieve your vision and goals. We can also help interview and secure board members or advisors and, in limited situations, make our own team members available.
            </Text>
            <VStack spacing={2}>
              <Text fontWeight="700" alignSelf="start">
                Executive Coaching
              </Text>
              <Text>
                Many small business leaders and entrepreneurs find a trusted advisor, who has the knowledge and confidence to offer outside perspective and advice, a powerful influence in keeping their company moving toward its goals. As an ally, friend and motivator, we can help you identify strengths and weaknesses, expose talents, reignite passion, and discover new opportunities.
              </Text>
            </VStack>
            <Text pb={{ base: 0, sm: 2, md: 4, lg: 6 }}>
              Our team members have served on public and private boards, held C level positions in companies of all sizes, and counseled dozens of business leaders. Our process begins with a mutual interview to assure personal compatibility and appropriate skills matching.
            </Text>
            <Box
              w="100%"
              px={{ base: 10, md: 0 }}
              h={{ base: '35vh', md: '75vh' }} minHeight={{ base: '250px', md: '500px' }} position="relative"
            >
              <NextImage
                style={{objectFit: 'cover'}}
                fill={true}
                src={Img}
                alt="hill-top"
              />
            </Box>
          </VStack>
        </VStack>
        <Footer />
      </main>
    </>
  );
};