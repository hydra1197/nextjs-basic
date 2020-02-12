import React from 'react';
import Head from 'next/head';

const Meta = ({ title, description, image }) => {
  return (
    <Head>
      <title>{ title }</title>
      <meta name="og:title" property="og:title" content={title} />
      <meta name="description" property="og:description" content={description} />
      <meta name="og:description" property="og:description" content={description} />
      <meta name="keywords" content="" />
      <meta name="og:type" property="og:type" content="article" />
      <meta name="og:image" property="og:image" content={image} />
    </Head>
  )
};

export default Meta;