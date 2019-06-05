import Head from 'next/head';

function IndexPage() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <link rel="stylesheet" href="static/styles.css"/>
      </Head>
    </div>
  );
}

export default IndexPage;