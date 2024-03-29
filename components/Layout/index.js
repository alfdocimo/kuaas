import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Kuaas | Kudos as a service</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <meta
          name="description"
          content="Send kudos messages along with a gif to the people you care about!"
        />
        <meta
          name="keywords"
          content="kudos, service, api, kuaas, messages, giphy, react,web app, alfdocimo, positive, congratulations"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta name="twitter:card" value="summary" />

        <meta property="og:type" content="article" />
        <meta property="og:image" content="/og-card.png" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="flex flex-wrap bg-gray-200 content-center 
      min-h-screen min-w-screen
      justify-center lg:-mb-10"
      >
        <div
          className="rounded shadow-lg bg-gray-100 flex items-center
        md:h-screen md:w-screen 
        sm:h-full sm:w-full 
        lg:h-auto lg:w-auto
        h-full w-full
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
        <p>Made with 💜 by</p>
        <a
          className="pl-2 text-indigo-400 hover:text-indigo-600"
          href="https://github.com/alfdocimo"
          target="_blank"
        >
          alfdocimo
        </a>
        <span className="pl-2">|</span>
        <div className="pl-2 text-teal-400 hover:text-teal-600">
          <Link href="/docs">API</Link>
        </div>
      </footer>
    </>
  );
}
