import { ChakraProvider } from '@chakra-ui/react';
import { theme, Fonts } from '../styles/chakraTheme';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
