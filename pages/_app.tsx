import * as React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import { appWithTranslation } from 'next-i18next'
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Navbar from '../src/Navbar';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import { getStaticPaths, makeStaticProps } from '../lib/getStatic';
import TagManager from 'react-gtm-module';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  React.useEffect(() => {
    TagManager.initialize({ gtmId: 'G-PXXSTBQ45Q' });
}, []);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>ARAPIS</title>
        <meta name="description" content="Somos una organizacion guatemalteca de productores de miel 100% organica y sus productos derivados. " />
        <meta name="keywords" content="miel en guatemala, miel pura, venta de miel, miel guatemalteca, miel, arapis, apicultura, guatemala"/>  
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Box sx={{ display: 'flex' }}>
          <Navbar />
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.background.default
                  : theme.palette.background.default,
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            <Container maxWidth={false} disableGutters sx={{ mt: 4, mb: 4 }}>
              <Component {...pageProps} />
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}
export default appWithTranslation(MyApp);
