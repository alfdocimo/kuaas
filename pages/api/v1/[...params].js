import verbs from "./verbs";

export default (req, res) => {
  const {
    query: { params },
  } = req;

  const [name, verb, index] = params;

  const verbIndex =
    (index && index) ||
    Math.floor(Math.random() * Math.floor(verbs[verb].length));

  res.status(200).json({ message: verbs[verb][verbIndex](name) });
};
