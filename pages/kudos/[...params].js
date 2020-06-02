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
      <section className="flex flex-col items-center">
        {(data && (
          <>
            <p className="text-2xl">{data && data.message}</p>
            <img className="mt-20 max-w-md" src={data.imgSrc} />
          </>
        )) || <p className="text-2xl">Loading...⌛</p>}
      </section>
    </Layout>
  );
}
