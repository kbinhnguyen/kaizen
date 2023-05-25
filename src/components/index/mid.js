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
      minHeight={{ base: 'max-content', lg: '1600px' }}
      h={{ lg: '200vh', base: 'max-content'}}
      templateRows={{ base: 'repeat(2, max-content)', lg: 'repeat(2, 1fr)'}}
      templateColumns="1fr"
      gap={{ lg: 0, md: 4, base: 2 }}
      py={{ md: 6, lg: 0 }}
    >
      <GridItem w="100%" h="100%">
        <Grid
          templateRows={{ base: 'repeat(2, max-content)', lg: '1fr' }}
          templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)'}}
          w="100%" h="100%"
          className="eleToWatch"
          gap={{ lg: 0, base: 2, md: 4 }}
          opacity={0}
        >
          <GridItem w="100%" pl={{ base: 10, lg: 20 }} pr={{ base: 10, lg: 20 }}>
            <Stack
              spacing={{ base: 2, lg: 6 }}
              pt={{ base: 12, lg: 44 }}
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
            h={{ base: '300px', sm: '400px', lg: '100%' }}
            mr={{ base: 12, sm: 16, lg: 20 }}
            ml={{ base: 12, sm: 16, lg: 0 }}
            my={{ base: 4, lg: 0 }}
            pt={{ base: 0, lg: 6 }}
            display="flex"
            alignItems="center"
          >
            <Box h={{ base: '100%', lg: '95%' }} w="100%" position="relative">
              <NextImage
                style={{objectFit: 'cover' }}
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
          templateRows={{base: 'repeat(2, max-content)', lg: '1fr' }}
          templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)'}}
          w="100%" h="100%"
          gap={{ lg: 0, base: 2 }}
        >
          <GridItem
            h={{ base: '300px', sm: '400px', lg: '100%' }}
            ml={{ base: 12, sm: 16, lg: 20 }}
            mr={{ base: 12, sm: 16, lg: 0 }}
            my={{ base: 4, lg: 0 }}
            pb={{ base: 0, lg: 6 }}
            display="flex"
            alignItems="center"
            className="eleToWatch"
            opacity={0}
          >
            <Box h={{ base: '100%', lg: '95%'}} w="100%" position="relative">
              <NextImage
                style={{objectFit: 'cover'}}
                fill={true}
                src={SecondImg}
                alt="pebbles"
              />
            </Box>
          </GridItem>
          <GridItem id="stabilized" pr={{ base: 10, lg: 20}} pl={{ base: 10, lg: 12 }} pb={{ base: 12, lg: 0 }} minHeight={{ base: '400px', sm: '350px', md: '330px' }}>
            <Stack
              pt={{ base: 4, lg: 36, lg: 48 }}
              spacing={{ base: 4, lg: 12 }}
              h={{ base: 'max-content', lg: '60%'}}
              direction={{ base: 'column', lg: 'row' }}
              display="flex"
              alignItems={{ base: 'center', lg: 'start' }}
            >
              <Stack w="max-content" spacing={1} direction={{ base:'row', lg: 'column' }} pt={{ lg: 20 }}>
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