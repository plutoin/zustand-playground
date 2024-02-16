import Head from "next/head";

import "../styles/global.css";
import "../styles/reset.css";

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>Zustand Practice</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
