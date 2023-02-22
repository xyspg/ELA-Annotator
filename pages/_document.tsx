import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Annotate your passage in seconds."
          />
          <meta property="og:site_name" content="ELA Annotator" />
          <meta
            property="og:description"
            content="Annotate your passage in seconds."
          />
          <meta property="og:title" content="ELA Annotator" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
