import React from "react";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Kuaas | Kudos as a service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="app-container">
        <div className="card-container">{children}</div>
      </div>
    </>
  );
}
