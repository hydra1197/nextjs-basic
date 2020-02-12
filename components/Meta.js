import React from 'react';
import Head from 'next/head';

const Meta = ({ title, description, image }) => {
  return (
    <Head>
      <title>{ title }</title>

      <meta name="description" content={description} />
      <meta name="keywords" content="" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={image} />
    </Head>
  )
};

export default Meta;