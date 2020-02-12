import React from 'react';
import Head from 'next/head';

const Meta = ({ title, description }) => {
  return (
    <Head>
      <title>{ title }</title>
      <meta name="description" content={description} />
      <meta name="og:title" property="og:title" content={title} />
      <meta name="og:description" property="og:description" content={description} />
    </Head>
  )
};

export default Meta;