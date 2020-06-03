import Form from "../components/Form";
import Layout from "../components/Layout";
import { useState } from "react";
import { useRouter } from "next/router";
import subjects from "../shared/subjects";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    subject: "",
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

  function setDemo() {
    setForm({
      name: "John Doe",
      subject: "Great Work",
      gifTag: "congratulations",
    });
  }

  const subjectValues = Object.keys(subjects).map(
    (subject) => subjects[subject].value
  );

  return (
    <Layout>
      <div className="tracking-in-expand">
        <h1 className="md:text-4xl text-xl md:mb-5 mb-2">Kudos as a service</h1>
        <p className="md:text-xl text-lg md:mb-20 mb-5">
          Send kudos to someone who’s earned it 🎉
        </p>
        <Form
          name={form.name}
          gifTag={form.gifTag}
          subject={form.subject}
          onNameChange={(e) => setForm({ ...form, name: e.target.value })}
          onSubjectChange={(e) => setForm({ ...form, subject: e.target.value })}
          onGifTagChange={(e) => setForm({ ...form, gifTag: e.target.value })}
          onSubmit={onSubmit}
          subjectList={subjectValues}
        />
        <button className="block w-full text-center text-indigo-400 hover:text-indigo-600" onClick={setDemo}>try an example?</button>
      </div>
    </Layout>
  );
}
