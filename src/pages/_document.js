import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Lato&family=Open+Sans:wght@600&family=Roboto&display=swap" rel="stylesheet" />
        <meta name="description" content="Plan for tomorrow. Today" />
        <link rel="icon" href="favicon.ico?" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
