import Form from "../components/Form";
import Layout from "../components/Layout";
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
    <Layout>
      <h1 className="text-4xl mb-20">
        Send kudos to someone who’s earned it 🎉
      </h1>
      <Form
        name={form.name}
        onNameChange={(e) => setForm({ ...form, name: e.target.value })}
        verb={"Amazing"}
        onVerbChange={(e) => setForm({ ...form, verb: e.target.value })}
        onSubmit={onSubmit}
      />
    </Layout>
  );
}
