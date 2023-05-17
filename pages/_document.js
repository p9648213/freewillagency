import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Niramit:wght@300;400;500&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          http-equiv="Permissions-Policy"
          content="ambient-light-sensor=()"
        ></meta>
        <meta
          http-equiv="Permissions-Policy"
          content="idle-detection=()"
        ></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
