import Head from "next/head";
import Form from "../components/Form";

export default function Home() {
  return (
    <div className="app-container">
      <Head>
        <title>Kuaas | Kudos as a service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div class="card-container">
          <div class="px-20 py-20">
            <h1 class="text-4xl mb-20">
              Send kudos to someone who’s earned it 🎉
            </h1>
            <Form />
          </div>
        </div>
      </main>
    </div>
  );
}
