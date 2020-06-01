import Head from "next/head";
import Form from "../components/Form";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [form, setForm] = useState({ name: "", verb: "Amazing" });
  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();
    router.push({
      pathname: `/kudos/${form.name}/${form.verb}/`,
      query: { gif: false },
    });
  }

  return (
    <div className="app-container">
      <Head>
        <title>Kuaas | Kudos as a service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="card-container">
          <div className="px-20 py-20">
            <h1 className="text-4xl mb-20">
              Send kudos to someone who’s earned it 🎉
            </h1>
            <Form
              name={form.name}
              onNameChange={(e) => setForm({ ...form, name: e.target.value })}
              verb={""}
              onVerbChange={(e) => setForm({ ...form, verb: e.target.value })}
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
