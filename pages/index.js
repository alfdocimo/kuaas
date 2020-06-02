import Form from "../components/Form";
import Layout from "../components/Layout";
import { useState } from "react";
import { useRouter } from "next/router";
import subjects from "../shared/subjects";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    subject: "Great Work",
    gifTag: "",
  });
  const router = useRouter();

  function onSubmit(e) {
    const isCustomSubject = subjectValues.includes(form.subject);

    e.preventDefault();
    router.push({
      pathname: `/kudos/${form.name}/${
        (isCustomSubject && form.subject) || "custom"
      }/`,
      query: {
        gif: true,
        customMessage: !isCustomSubject ? form.subject : undefined,
        gifTag: form.gifTag ?? undefined,
      },
    });
  }

  const subjectValues = Object.keys(subjects).map(
    (subject) => subjects[subject].value
  );

  return (
    <Layout>
      <h1 className="text-4xl mb-5">Kudos as a service</h1>
      <p className="text-xl mb-20">Send kudos to someone who’s earned it 🎉</p>
      <Form
        name={form.name}
        gifTag={form.gifTag}
        onNameChange={(e) => setForm({ ...form, name: e.target.value })}
        onSubjectChange={(e) => setForm({ ...form, subject: e.target.value })}
        onGifTagChange={(e) => setForm({ ...form, gifTag: e.target.value })}
        onSubmit={onSubmit}
        subjectList={subjectValues}
      />
    </Layout>
  );
}
