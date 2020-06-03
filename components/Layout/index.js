import React from "react";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Kuaas | Kudos as a service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-wrap bg-gray-200 content-center justify-center md:h-screen md:-mb-10">
        <div
          className="rounded overflow-hidden shadow-lg bg-gray-100 flex items-center
        md:h-screen md:w-screen 
        sm:h-screen sm:w-screen 
        lg:h-auto lg:w-auto
        h-screen w-screen
        "
        >
          <div
            className="
          md:px-16 md:py-8
          px-10 py-4
          h-full w-full"
          >
            {children}
          </div>
        </div>
      </div>
      <footer className="h-10 flex items-center justify-center bg-gray-900 text-gray-100">
        Made with 💛 by
        <a
          className="pl-2 text-blue-400"
          href="https://github.com/alfdocimo"
          target="_blank"
        >
          alfdocimo
        </a>
      </footer>
    </>
  );
}
