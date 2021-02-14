import React from "react";
import { Provider } from "react-awesome-slider/dist/navigation";
import Layout from "../components/layout/layout";
import { useRouter } from "next/router";
import Head from "next/head";

function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Provider slug={router.route}>
      <Head>
        <title>
          Umi&Shio Ch.
        </title>
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=0.8,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="We're twins in one body Virtual Youtuber from Indonesia."
        />
        <link rel="shortcut icon" href="/static/umishio-logo.png" />
        <link rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" 
        integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" 
        crossorigin="anonymous" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;
