import { useState, useEffect } from 'react';
import {
  Heading, Grid, GridItem, Text, Icon, Button, Link, Box, Stack,
} from '@chakra-ui/react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import FirstImg from '../../../public/AdobeStock_52149427_resized.jpeg';
import SecondImg from '../../../public/AdobeStock_7179061_resized.jpeg';


const CircleIcon = (props) => (
  <Icon viewBox='0 0 200 200' {...props}>
    <path
      fill='currentColor'
      d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
    />
  </Icon>
);

const investments = {
  name: 'Investments',
  description: 'Investments come in many forms: people, money, energy and time. While all are important, our first priority is always people. We seek opportunities to invest in and build business relationships with people who share our values and perspectives on free enterprise.',
  link: '/investments',
};

const consulting = {
  name: 'Consulting',
  description: 'Investing, owning and managing our own companies have put us in an excellent position to add value to your company. We always look forward to sharing our knowledge and expertise.',
  link: '/consulting',
};

const investors = {
  name: 'Investors',
  description: 'Our investors serve as a great source for industry perspective, offer a network of relationships, and where appropriate, serve as board members and advisors to portfolio companies. We seek investors who are passionate about free enterprise and want to help small business entrepreneurs grow and prosper.',
  link: '/investor',
};

const sections = [investments, consulting, investors];

export default function MidPanel() {
  const [section, setSection] = useState(0);

  useEffect(() => {
    const timeOutId = setTimeout(() => setSection((section + 1) % 3), 5000);
    return () => clearTimeout(timeOutId);
  }, [section]);

  return (
    <Grid
      w="100vw"
      minHeight={{ base: 'max-content', md: '1600px' }}
      h={{ md: '200vh', base: 'max-content'}}
      templateRows={{ base: 'repeat(2, max-content)', md: 'repeat(2, 1fr)'}}
      templateColumns="1fr"
    >
      <GridItem w="100%" h="100%" className="eleToWatch">
        <Grid
          templateRows={{base: 'repeat(2, max-content)', md: '1fr' }}
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)'}}
          w="100%" h="100%"
        >
          <GridItem w="100%" pl={{ base: 10, md: 20}} pr={{ base: 10, lg: 20 }}>
            <Stack
              spacing={{ base: 2, md: 6 }}
              pt={{ base: 12, md: 44 }}
              direction="column"
            >
              <Heading variant="accented" as="h3" w="100%" fontSize={{ base: '16px', sm: '18px', md: '20px' }}>OUR APPROACH</Heading>
              <Heading fontSize={{ base: '32px', sm: '36px', md: '48px'}} as="h2" w="100%">Plan for tomorrow. Today.</Heading>
              <Text>
                Kaizen Capital Partners is a resource for companies needing equity capital for transition and growth. We are a private investment firm seeking to help companies and their owners build value and provide exceptional return for all stakeholders.
              </Text>
            </Stack>
          </GridItem>
          <GridItem
            h={{base: '400px', md: '100%' }}
            mr={{ base: 20, md: 20 }}
            ml={{ base: 20, md: 0 }}
            my={{ base: 4, md: 0 }}
            pt={{ base: 0, md: 6 }}
            display="flex"
            alignItems="center"
          >
            <Box h={{base: '100%', md: '95%'}} w="100%" position="relative">
              <NextImage
                style={{objectFit: 'cover'}}
                fill={true}
                src={FirstImg}
                alt="high-rise-buildings"
              />
            </Box>
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem w="100%" h="100%">
        <Grid
          templateRows={{base: 'repeat(2, max-content)', md: '1fr' }}
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)'}}
          w="100%" h="100%"
        >
          <GridItem
            h={{base: '400px', md: '100%' }}
            ml={{ base: 20, md: 20 }}
            mr={{ base: 20, md: 0 }}
            my={{ base: 4, md: 0 }}
            pb={{ base: 0, md: 6 }}
            display="flex"
            alignItems="center"
            className="eleToWatch"
          >
            <Box h={{base: '100%', md: '95%'}} w="100%" position="relative">
              <NextImage
                style={{objectFit: 'cover'}}
                fill={true}
                src={SecondImg}
                alt="pebbles"
              />
            </Box>
          </GridItem>
          <GridItem pr={{ base: 10, md: 20}} pl={{ base: 10, md: 12 }} pb={{ base: 12, md: 0 }}>
            <Stack
              pt={{ base: 4, md: 36, lg: 48 }}
              spacing={{ base: 4, md: 12 }}
              h={{ base: 'max-content', md: '60%'}}
              direction={{ base: 'column', md: 'row' }}
              display="flex"
              alignItems={{ base: 'center', md: 'start' }}
            >
              <Stack w="max-content" spacing={1} direction={{ base:'row', md: 'column' }} pt={{ md: 32, lg: 20 }}>
                <CircleIcon
                  color={section == 0 ? '#33647E' : '#DCE3EB'}
                  onClick={() => setSection(0)}
                />
                <CircleIcon
                  color={section == 1 ? '#33647E' : '#DCE3EB'}
                  onClick={() => setSection(1)}
                />
                <CircleIcon
                  color={section == 2 ? '#33647E' : '#DCE3EB'}
                  onClick={() => setSection(2)}
                />
              </Stack>
              <Stack key={section} spacing={{ base: 2, md: 4 }} direction="column" className="fadeIn">
                <Heading variant="pageName" as="h3" w="100%">{sections[section].name}</Heading>
                <Text>{sections[section].description}</Text>
                <Box w="100%" pt={{ base: 2, md: 0 }}>
                  <Link variant="learnMore" w="max-content" as={NextLink} href={sections[section].link}>Learn More</Link>
                </Box>
              </Stack>
            </Stack>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
}