import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { Box, Link } from '@chakra-ui/react';
import splitbee from '@splitbee/web';
import React from 'react';


export default function Home() {

  React.useEffect(() => {
    // This initiliazes Splitbee.js
    splitbee.init()
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Meatify</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Meatify" />
        <meta name="description" content="Meatify is a modality agnostic technology lab and business incubator based in Vancouver, BC" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.meatify.com/" />
        <meta property="og:title" content="Meatify" />
        <meta property="og:description" content="Meatify is a modality agnostic technology lab and business incubator based in Vancouver, BC" />
        <meta property="og:image" content="https://www.meatify.com/social.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.meatify.com/" />
        <meta property="twitter:title" content="Meatify" />
        <meta property="twitter:description" content="Meatify is a modality agnostic technology lab and business incubator based in Vancouver, BC" />
        <meta property="twitter:image" content="https://www.meatify.com/social.png" />
      </Head>

      <main>
        <ChakraProvider>
          <iframe className="splineCanvas" src="./meatify-logo/index.html"></iframe>
          <Box pos="absolute" bottom="5" right="8">
            <Link bgGradient="linear(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea)" bgClip="text" href="mLinkilto:humans@meatify.com">
              humans@meatify.com
            </Link>
          </Box>
        </ChakraProvider>
      </main>

      <style jsx>{`
        .splineCanvas {
          height: 100vh;
          width: 100vw;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
            Droid Sans, Helvetica Neue, sans-serif;
          overflow: hidden;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
