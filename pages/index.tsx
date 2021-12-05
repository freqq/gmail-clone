import type { NextPage } from "next";
import Head from "next/head";

import Header from "components/Header";

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Odebrane (2 588) - email@gmail.com - Gmail</title>
      <meta name="description" content="GMail (Clone)" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
  </div>
);

export default Home;
