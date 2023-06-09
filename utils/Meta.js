import Head from "next/head";
import React from "react";

const Meta = ({ title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`${description}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="./favicon.ico" />
      </Head>
    </>
  );
};

export default Meta;
