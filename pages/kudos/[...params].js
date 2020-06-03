import React, { useEffect, useState } from "react";
import fetcher from "../../lib/fetch";
import copyUrlToClipboard from "../../lib/copyUrlToClipboard";
import useSWR from "swr";
import Layout from "../../components/Layout";
import Link from "next/link";

import ShareSocial from "../../components/ShareSocial";

export async function getServerSideProps(context) {
  return {
    props: {
      query: context.query,
    },
  };
}

export default function index({ query }) {
  const urlToClipboard = "Copy URL to clipboard";
  const [shareUrl, setShareUrl] = useState("");
  const [copyText, setCopyText] = useState(urlToClipboard);
  const title = "Kudos from kuaas.com 🙌 ";

  const { params, gif, customMessage, gifTag } = query;
  const searchParams = new URLSearchParams({ gif, customMessage, gifTag });
  const [name, subject] = params;

  const { data } = useSWR(
    `/api/v1/${name}/${subject}?${searchParams && searchParams}`,
    fetcher
  );

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const handleCopyUrlToClipboard = () => {
    setCopyText("Copied! ✅");
    copyUrlToClipboard();

    setTimeout(() => setCopyText(urlToClipboard), 2000);
  };

  return (
    <Layout>
      {(data && (
        <div className="h-full flex flex-col items-center justify-around">
          <p className="md:text-2xl text-xl">{data && data.message}</p>
          <img className="w-full mt-4 md:max-w-lg" src={data.imgSrc} />

          <ShareSocial url={shareUrl} title={title} />

          <button
            className="mt-4 text-indigo-400 hover:text-indigo-600"
            onClick={handleCopyUrlToClipboard}
          >
            {copyText}
          </button>

          <div className="mt-4 text-indigo-400 hover:text-indigo-600">
            <Link href="/">Go back</Link>
          </div>
        </div>
      )) || <p className="text-2xl">Loading...⌛</p>}
    </Layout>
  );
}
