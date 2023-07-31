import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import "../styles/globals.css";
import { AppProps } from "next/app";


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    })
  });

  return <Component {...pageProps} />;
}

export default MyApp;
