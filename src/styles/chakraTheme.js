import {
  extendTheme, defineStyle, defineStyleConfig, createMultiStyleConfigHelpers
} from '@chakra-ui/react';
import { accordionAnatomy, inputAnatomy } from '@chakra-ui/anatomy';
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
    },
    pageName: {
      color: '#33647E',
      fontSize: { base: '30px', md: '40px' },
    },
    tagline: {
      fontSize: { base: '30px', md: '40px' },
      color: '#00263E',
    }
  }
});

const linkTheme = defineStyleConfig({
  baseStyle: {
    fontWeight: 400,
    fontSize: { base: '16px', sm: '18px', md: '20px' },
    _hover: { opacity: 0.3, textDecoration: 'none' },
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
      textTransform: 'uppercase',
      _hover: {
        textDecoration: 'none',
        opacity: 1,
      }
    },
    mobileNavBar: {
      fontFamily: `'Open Sans', sans-serif`,
      fontWeight: 600,
      color: '#00263E',
    },
    bottomNavBar: {
      color: '#C2D5ED',
      textTransform: 'uppercase',
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
    fontSize: { base: '16px', sm:'18px', md: '20px' },
  },
  variants: {
    formLabel: {
      fontFamily: `'Open Sans', sans-serif`,
      fontWeight: 600,
      color: '#5F5E5E',
      fontSize: '14px'
    }
  }
});

const textareaTheme = defineStyleConfig({
  variants: {
    customTextarea: defineStyle({
      border: '1px solid #5F5E5E',
      borderRadius: 0,
      '_focusVisible': {
        borderColor: '#000000',
        boxShadow: '0px 1px 0px 0px #000000'
      },
      fontFamily: `'proxima-nova', sans-serif`,
      fontSize: { base: '16px', sm:'18px', md: '20px' },
    }),
  }
});

const buttonTheme = defineStyleConfig({
  variants: {
    customBtn: defineStyle({
      borderRadius: 0,
      bg: '#000000',
      fontFamily: `'Open Sans', sans-serif`,
      fontWeight: 600,
      color: '#FFFFFF',
      px: 8,
      _disabled: {
        opacity: 0.5,
        _hover: {
          bg: '#000000 !important',
          color: '#FFFFFF !important',
        }
      }
    }),
    bottomNavBar: {
      color: '#C2D5ED',
      textTransform: 'uppercase',
      bg: 'transparent',
      fontWeight: 400,
      px: 0,
      fontSize: { base: '16px', sm: '18px', md: '20px' },
      _hover: { opacity: 0.3 },
    },
  }
});

const { defineMultiStyleConfig: defineMultiStyleConfigAccordion } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const {
  definePartsStyle: definePartsStyleInput,
  defineMultiStyleConfig: defineMultiStyleConfigInput
} = createMultiStyleConfigHelpers(inputAnatomy.keys)

const accordionTheme = defineMultiStyleConfigAccordion({
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

const inputTheme = defineMultiStyleConfigInput({
  variants: {
    flushed: definePartsStyleInput({
      field: {
        borderBottom: '1px solid',
        borderColor: '#5F5E5E',
        _focus: {
          borderColor: 'black',
          boxShadow: '0px 1px 0px 0px black'
        },
        _invalid: {
          borderBottom: '1px solid',
          borderColor: '#5F5E5E',
          boxShadow: 'none',
        },
        fontFamily: `'proxima-nova', sans-serif`,
        fontSize: { base: '16px', sm:'18px', md: '20px' },
      }
    }),
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
    Input: inputTheme,
    Textarea: textareaTheme,
    Button: buttonTheme,
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
        font-family: "proxima-nova";
        src: url("https://use.typekit.net/af/2555e1/00000000000000007735e603/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/2555e1/00000000000000007735e603/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/2555e1/00000000000000007735e603/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-display: auto;
        font-style: normal;
        font-weight: 700;
        font-stretch: normal;
      }

      @font-face {
        font-family: "proxima-nova";
        src: url("https://use.typekit.net/af/4de20a/00000000000000007735e604/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2"),url("https://use.typekit.net/af/4de20a/00000000000000007735e604/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff"),url("https://use.typekit.net/af/4de20a/00000000000000007735e604/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("opentype");
        font-display: auto;
        font-style: italic;
        font-weight: 700;
        font-stretch: normal;
      }

      @font-face {
        font-family: "proxima-nova";
        src: url("https://use.typekit.net/af/efe4a5/00000000000000007735e609/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/efe4a5/00000000000000007735e609/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/efe4a5/00000000000000007735e609/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
        font-display: auto;
        font-style: normal;
        font-weight: 400;
        font-stretch: normal;
      }

      @font-face {
        font-family: "proxima-nova";
        src: url("https://use.typekit.net/af/3322cc/00000000000000007735e616/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/3322cc/00000000000000007735e616/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/3322cc/00000000000000007735e616/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
        font-display: auto;
        font-style: italic;
        font-weight: 400;
        font-stretch: normal;
      }

      @font-face {
        font-family: "proxima-nova-condensed";
        src: url("https://use.typekit.net/af/15606c/00000000000000007735e60c/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/15606c/00000000000000007735e60c/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/15606c/00000000000000007735e60c/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-display: auto;
        font-style: normal;
        font-weight: 700;
        font-stretch: normal;
      }

      @font-face {
        font-family: "proxima-nova-condensed";
        src: url("https://use.typekit.net/af/1ea53e/00000000000000007735e61d/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2"),url("https://use.typekit.net/af/1ea53e/00000000000000007735e61d/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff"),url("https://use.typekit.net/af/1ea53e/00000000000000007735e61d/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("opentype");
        font-display: auto;
        font-style: italic;
        font-weight: 700;
        font-stretch: normal;
      }

      @font-face {
        font-family: "proxima-nova-condensed";
        src: url("https://use.typekit.net/af/669f97/00000000000000007735e623/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/669f97/00000000000000007735e623/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/669f97/00000000000000007735e623/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
        font-display: auto;
        font-style: normal;
        font-weight: 400;
        font-stretch: normal;
      }

      @font-face {
        font-family: "proxima-nova-condensed";
        src: url("https://use.typekit.net/af/4d69d6/00000000000000007735e62c/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/4d69d6/00000000000000007735e62c/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/4d69d6/00000000000000007735e62c/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
        font-display: auto;
        font-style: italic;
        font-weight: 400;
        font-stretch: normal;
      }

      @font-face {
        font-family: "proxima-nova-extra-condensed";
        src: url("https://use.typekit.net/af/de3701/00000000000000007735e618/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2"),url("https://use.typekit.net/af/de3701/00000000000000007735e618/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff"),url("https://use.typekit.net/af/de3701/00000000000000007735e618/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("opentype");
        font-display: auto;
        font-style: italic;
        font-weight: 700;
        font-stretch: normal;
      }

      @font-face {
        font-family: "proxima-nova-extra-condensed";
        src: url("https://use.typekit.net/af/7cc641/00000000000000007735e60b/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/7cc641/00000000000000007735e60b/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/7cc641/00000000000000007735e60b/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-display: auto;
        font-style: normal;
        font-weight: 700;
        font-stretch: normal;
      }

      @font-face {
        font-family: "proxima-nova-extra-condensed";
        src: url("https://use.typekit.net/af/6a4fa5/00000000000000007735e629/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/6a4fa5/00000000000000007735e629/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/6a4fa5/00000000000000007735e629/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
        font-display: auto;
        font-style: italic;
        font-weight: 400;
        font-stretch: normal;
      }

      @font-face {
        font-family: "proxima-nova-extra-condensed";
        src: url("https://use.typekit.net/af/4c1fee/00000000000000007735e620/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/4c1fee/00000000000000007735e620/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/4c1fee/00000000000000007735e620/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
        font-display: auto;
        font-style: normal;
        font-weight: 400;
        font-stretch: normal;
      }

      @font-face {
        font-family: "minerva-modern";
        src: url("https://use.typekit.net/af/0de237/000000000000000077359a4c/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/0de237/000000000000000077359a4c/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/0de237/000000000000000077359a4c/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-display: auto;
        font-style: normal;
        font-weight: 700;
        font-stretch: normal;
      }

      @font-face {
        font-family: "minerva-modern";
        src: url("https://use.typekit.net/af/e499e8/000000000000000077359a49/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2"),url("https://use.typekit.net/af/e499e8/000000000000000077359a49/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff"),url("https://use.typekit.net/af/e499e8/000000000000000077359a49/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("opentype");
        font-display: auto;
        font-style: italic;
        font-weight: 700;
        font-stretch: normal;
      }

      @font-face {
        font-family: "minerva-modern";
        src: url("https://use.typekit.net/af/af891e/000000000000000077359a4b/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/af891e/000000000000000077359a4b/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/af891e/000000000000000077359a4b/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
        font-display: auto;
        font-style: italic;
        font-weight: 400;
        font-stretch: normal;
      }

      @font-face {
        font-family: "minerva-modern";
        src: url("https://use.typekit.net/af/3d9e8b/000000000000000077359a48/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/3d9e8b/000000000000000077359a48/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/3d9e8b/000000000000000077359a48/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
        font-display: auto;
        font-style: normal;
        font-weight: 400;
        font-stretch: normal;
      }
    `}
  />
);