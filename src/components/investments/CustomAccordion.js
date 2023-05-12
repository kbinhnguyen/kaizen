import {
  Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, List, ListItem
} from '@chakra-ui/react';
import NextImage from 'next/image';
import PlusIcon from '../../../public/plus_round_icon.svg';
import MinusIcon from '../../../public/minus_round_icon.svg';

const progression = {
  title: 'Traditional Progression',
  items: [
    'Personal Investment',
    'Family & Friends (DOD)',
    'Angel Financing',
    'Venture Capital Funding',
    'Mezzanine Financing',
    'Bank Lending',
  ]
};

const options = {
  title: 'Organic Options',
  items: [
    'Operating Revenues',
    'Leasing',
    'Factoring',
    'Real Estate Mortgage (Sale Leaseback)',
    'Credit Cards',
    'Suppliers',
    'Corporate Partners',
  ]
};

const solutions = {
  title: 'Innovative Solutions',
  items: [
    'SBA Loan - 7(a), 504, ARC, etc.',
    'Venture Leasing',
    'Peer-to-Peer',
    '401K Small Business Financing',
    'Small Business Investment Company',
    'Economic Development Programs',
  ]
};

const qualities = [progression, options, solutions];

export default function CustomAccordion() {
  return (
    <Accordion allowMultiple alignSelf="start" w={{ base: '100%', md: '70%' }}>
      {qualities.map(({ title, items }) => (
        <AccordionItem pb={4} key={title}>
        {({ isExpanded }) => (
          <>
            <h5>
              <AccordionButton>
                <Box position="relative" w="32px" h="32px">
                  <NextImage
                    style={{ objectFit: 'contain' }}
                    src={isExpanded ? MinusIcon : PlusIcon}
                    alt="minus-icon"
                  />
                </Box>
                <Box as="span" pl={2} fontSize={{ base: '18px', md: '20px' }}>
                  {title}
                </Box>
              </AccordionButton>
            </h5>
            <AccordionPanel pl={{ base: 12, md: 24 }}>
              <List spacing={4}>
                {items.map((item) => (
                  <ListItem fontSize={{ base: '18px', md: '20px' }} key={item}>{item}</ListItem>
                ))}
              </List>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
      ))}
    </Accordion>
  );
}
