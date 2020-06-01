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

  const { data: localData } = useSWR(
    `/api/v1/${name}/${verb.toLowerCase()}`,
    fetcher
  );

  const { data: giphyData } = useSWR(
    `https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_APY_KEY}&tag=congratulations&rating=PG-13`,
    fetcher
  );

  return (
    <Layout>
      <section>
        <p className="text-2xl">{localData && localData.message} 🙌</p>
        {giphyData && (
          <img className="mt-20" src={giphyData.data.image_original_url} />
        )}
      </section>
    </Layout>
  );
}
