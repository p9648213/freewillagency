import Head from "next/head";
import Container from "@/components/Container";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Freewill Agency</title>
        <meta name="viewport" content="width=device-width" />

        <meta
          name="description"
          content="Freewill Agency - US Travel Visa Service"
        />
        <meta
          property="og:title"
          content="Freewill Agency - US Travel Visa Service"
        />
        <meta
          property="og:description"
          content="Freewill Agency is a full-service company that offer consulting and technology consulting services to companies around the World"
        />
        <meta
          property="og:image"
          content="https://free-will-agency.vercel.app/assets/logo.webp"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container />
    </>
  );
}
