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
  const [name, verb] = query.params;

  const { data } = useSWR(`/api/v1/${name}/${verb.toLowerCase()}`, fetcher);

  return (
    <Layout>
      🙌 <p>{data && data.message}</p>
    </Layout>
  );
}
