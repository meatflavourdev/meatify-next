import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { Box, Link } from '@chakra-ui/react';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
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
