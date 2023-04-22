import { extendTheme, defineStyleConfig } from '@chakra-ui/react';
import { Global } from '@emotion/react';

const colors = {
  brand: {
    900: '#1a365d',
  }
};

const headingTheme = defineStyleConfig({
  baseStyle: {
    fontWeight: 400,
    color: 'black',
  },
  variants: {
    accented: {
      fontFamily: `'proxima-nova', sans-serif`,
      color: '#33647E',
      fontWeight: 700,
      fontSize: '16px',
    },
    pageName: {
      color: '#33647E',
      fontSize: '40px',
    }
  }
});

const linkTheme = defineStyleConfig({
  baseStyle: {
    //  fontFamily: `'Roboto', sans-serif`,
    fontWeight: 400,
  }
});

export const theme = extendTheme({
  colors,
  components: {
    Heading: headingTheme,
    Link: linkTheme,
  },
  fonts: {
    heading: `'minerva-modern', sans-serif`,
    body: `'proxima-nova', sans-serif`,
  }
});

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "minerva-modern";
        src: url("https://use.typekit.net/af/3d9e8b/000000000000000077359a48/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/3d9e8b/000000000000000077359a48/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/3d9e8b/000000000000000077359a48/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
        font-display: auto;
        font-style: normal;
        font-weight: 400;
        font-stretch: normal;
      }
      @font-face {
        font-family:"proxima-nova";
        src:url("https://use.typekit.net/af/efe4a5/00000000000000007735e609/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/efe4a5/00000000000000007735e609/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/efe4a5/00000000000000007735e609/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
        font-display:auto;
        font-style:normal;
        font-weight:400;
        font-stretch:normal;
      }
      @font-face {
        font-family:"proxima-nova";
        src:url("https://use.typekit.net/af/2555e1/00000000000000007735e603/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/2555e1/00000000000000007735e603/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/2555e1/00000000000000007735e603/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-display:auto;
        font-style:normal;
        font-weight:700;
        font-stretch:normal;
      }
    `}
  />
);