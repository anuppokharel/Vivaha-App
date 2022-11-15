import Layout from "../components/layout/Layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <link href="/fontawesome-icons/css/fontawesome.css" rel="stylesheet" />
      <link href="/fontawesome-icons/css/brands.css" rel="stylesheet" />
      <link href="/fontawesome-icons/css/solid.css" rel="stylesheet" />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
