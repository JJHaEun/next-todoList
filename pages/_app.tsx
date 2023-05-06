import type { AppProps } from "next/app";
import Footer from "../src/components/footer/Footer";
import Header from "../src/components/header/Header";
import { GlobalStyle } from "../styles/GlobalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
