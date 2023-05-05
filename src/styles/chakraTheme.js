import {
  extendTheme, defineStyle, defineStyleConfig, createMultiStyleConfigHelpers
} from '@chakra-ui/react';
import { accordionAnatomy } from '@chakra-ui/anatomy';
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
      fontSize: '20px',
    },
    pageName: {
      color: '#33647E',
      fontSize: '40px',
    },
    tagline: {
      fontSize: { base: '32px', md: '40px' },
      color: '#00263E',
    }
  }
});

const linkTheme = defineStyleConfig({
  baseStyle: {
    fontWeight: 400,
    fontSize: '20px',
    _hover: { opacity: 0.3 },
  },
  variants: {
    learnMore: {
      fontFamily: `'Lato', sans-serif`,
      color: '#062A30',
      borderBottom: '1px solid #062A30',
      _hover: {
        textDecoration: 'none',
      }
    },
    topNavBar: {
      fontFamily: `'Roboto', sans-serif`,
      color: '#00263E',
    },
    bottomNavBar: {
      color: '#C2D5ED',
    }
  }
});

const iconTheme = defineStyleConfig({
  baseStyle: {
    boxSize: 4,
    _hover: {
      opacity: 0.3,
      cursor: 'pointer',
    },
  }
});

const textTheme = defineStyleConfig({
  baseStyle: {
    fontSize: '20px',
  }
});

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const accordionTheme = defineMultiStyleConfig({
  baseStyle: {
    container: {
      border: 'none',
    },
    button: {
      fontFamily: `'proxima-nova', sans-serif`,
      fontWeight: 700,
      fontSize: '20px',
      textAlign: 'left',
    },
    panel: {
      pl: '30%',
      textAlign: 'left',
      fontSize: '20px',
    }
  }
});

export const theme = extendTheme({
  colors,
  components: {
    Heading: headingTheme,
    Link: linkTheme,
    Icon: iconTheme,
    Text: textTheme,
    Accordion: accordionTheme,
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