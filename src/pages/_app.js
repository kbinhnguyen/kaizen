import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { theme, Fonts } from '../styles/chakraTheme';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
