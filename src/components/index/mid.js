import { useState } from 'react';
import {
  Heading, VStack, HStack, Grid, GridItem, Text, Icon, IconButton, Button, Link, Box
} from '@chakra-ui/react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import FirstImg from '../../../public/AdobeStock_52149427.jpeg';
import SecondImg from '../../../public/AdobeStock_7179061.jpeg';


const CircleIcon = (props) => (
  <Icon viewBox='0 0 200 200' {...props}>
    <path
      fill='currentColor'
      d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
    />
  </Icon>
);

const sections = {
    'Investments': {
    description: 'Investments come in many forms: people, money, energy and time. While all are important, our first priority is always people. We seek opportunities to invest in and build business relationships with people who share our values and perspectives on free enterprise.',
    link: '/investments',
  },
  'Consulting': {
    description: 'Investing, owning and managing our own companies have put us in an excellent position to add value to your company. We always look forward to sharing our knowledge and expertise.',
    link: '/consulting',
  },
  'Investors': {
    description: 'Our investors serve as a great source for industry perspective, offer a network of relationships, and where appropriate, serve as board members and advisors to portfolio companies. We seek investors who are passionate about free enterprise and want to help small business entrepreneurs grow and prosper.',
    link: '/investor',
  }
};

export default function MidPanel() {
  const [section, setSection] = useState('Investments');

  return (
  <>
    <Grid w="100vw" minHeight="1600px" h="200vh" templateRows='repeat(2, 1fr)' px={20}>
      <GridItem h="100%" pt={12} pb={6}>
        <Grid h="100%" templateColumns="repeat(2, 1fr)">
          <GridItem w="80%">
            <VStack spacing={6} pt={28}>
              <Heading variant="accented" as="h3" w="100%">OUR APPROACH</Heading>
              <Heading fontSize="48px" as="h2" w="100%">Plan for tomorrow. Today.</Heading>
              <Text>
                Kaizen Capital Partners is a resource for companies needing equity capital for transition and growth. We are a private investment firm seeking to help companies and their owners build value and provide exceptional return for all stakeholders.
              </Text>
            </VStack>
          </GridItem>
          <GridItem h="100%" position="relative">
            <NextImage
              objectFit="cover"
              layout="fill"
              src={FirstImg}
              alt="high-rise-buildings"
            />
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem h="100%" pb={12} pt={6}>
        <Grid h="100%" templateColumns="repeat(2, 1fr)">
          <GridItem h="100%" position="relative">
            <NextImage
              objectFit="cover"
              layout="fill"
              src={SecondImg}
              alt="pebbles"
            />
          </GridItem>
          <GridItem pl={12}>
            <HStack pt={28} spacing={12} h="60%">
              <VStack spacing={1}>
                <CircleIcon
                  color={section == 'Investments' ? '#33647E' : '#DCE3EB'}
                  onClick={() => setSection('Investments')}
                />
                <CircleIcon
                  color={section == 'Consulting' ? '#33647E' : '#DCE3EB'}
                  onClick={() => setSection('Consulting')}
                />
                <CircleIcon
                  color={section == 'Investors' ? '#33647E' : '#DCE3EB'}
                  onClick={() => setSection('Investors')}
                />
              </VStack>
              <VStack spacing={4}>
                <Heading variant="pageName" as="h3" w="100%">{section}</Heading>
                <Text>{sections[section].description}</Text>
                <Box w="100%">
                  <Link variant="learnMore" w="max-content" as={NextLink} href={sections[section].link}>Learn More</Link>
                </Box>
              </VStack>
            </HStack>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  </>)
}