import type { AppProps } from "next/app";
import { wrapper } from "../src/commons/store";
import Footer from "../src/components/footer/Footer";
import Header from "../src/components/header/Header";
import { GlobalStyle } from "../styles/GlobalStyle";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default wrapper.withRedux(App);
// wrapper를 사용해 redux스토어를 컴포넌트에 전달할 수 있게 세팅
