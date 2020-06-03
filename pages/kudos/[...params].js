import React from "react";
import fetcher from "../../lib/fetch";
import useSWR from "swr";
import Layout from "../../components/Layout";

export async function getServerSideProps(context) {
  return {
    props: {
      query: context.query,
    },
  };
}

export default function index({ query }) {
  const { params, gif, customMessage, gifTag } = query;
  const searchParams = new URLSearchParams({ gif, customMessage, gifTag });
  const [name, subject] = params;

  const { data } = useSWR(
    `/api/v1/${name}/${subject}?${searchParams && searchParams}`,
    fetcher
  );

  return (
    <Layout>
      {(data && (
        <div className="h-full flex flex-col items-center justify-around">
          <p className="md:text-2xl text-xl">{data && data.message}</p>
          <img className="w-full mt-4 md:max-w-lg" src={data.imgSrc} />
        </div>
      )) || <p className="text-2xl">Loading...⌛</p>}
    </Layout>
  );
}
