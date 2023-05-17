import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import FaceBook from "@/components/common/FaceBook";

function App({ Component, pageProps }) {
  return (
    <>
      <FaceBook />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(App);
