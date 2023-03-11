import { extendTheme, defineStyleConfig } from '@chakra-ui/react';

const colors = {
  brand: {
    900: '#1a365d',
  }
};

const headingTheme = defineStyleConfig({
  baseStyle: {
    color: '#00263E',
  },
});

export const theme = extendTheme({
  colors,
  components: {
    Heading: headingTheme,
  }
});