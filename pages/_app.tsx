import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "@components/styles/globals.css";
import Modal from "../components/Modal";
import LoginModal from "../components/modals/LoginModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
          <LoginModal />
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </>
  );
}
