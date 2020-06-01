import React from "react";
import fetcher from "../../lib/fetch";
import useSWR from "swr";

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
    <div>
      🙌 <p>{data && data.message}</p>
    </div>
  );
}
