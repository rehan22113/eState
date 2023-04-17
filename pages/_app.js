import React from "react";
import Head from "next/head";
import "./global.css";
import { Html } from "next/document";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      
      <Head>
      <link rel="icon" type="image/x-icon" href="/logo-estate-1@2x.png"></link>
        <title>ESTATE PROTOCOL</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
