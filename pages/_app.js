import "@/styles/globals.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout";
import Head from "next/head";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/flickity/flickity.min.css" />
        <script src="/flickity/flickity.pkgd.min.js" defer />
      </Head>
      <GoogleReCaptchaProvider reCaptchaKey="6LfcoKYiAAAAAPhpVWQI-_XGbkkLYLUDCnn95Dqz">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GoogleReCaptchaProvider>
    </>
  );
}
