import { AppProps } from "next/app";
import ThemeConfig from "../theme";
import GlobalStyles from "../theme/globalStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import store from "../redux/Store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../utils/createEmotionCache";
import Head from "next/head";
import { ReactElement, ReactNode } from "react";
const clientSideEmotionCache = createEmotionCache();
import { NextPage } from "next";
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
  // pageProps: { dehydratedState?: DehydratedState };
}
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CacheProvider value={emotionCache}>
        <Provider store={store}>
          <ThemeConfig>
            <GlobalStyles>
              {getLayout(<Component {...pageProps} />)}
            </GlobalStyles>
          </ThemeConfig>
        </Provider>
      </CacheProvider>
    </>
  );
}

export default MyApp;
