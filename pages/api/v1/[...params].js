import subjects from "../../../shared/subjects";
import camelize from "../../../lib/camelize";
import fetch from "../../../lib/fetch";

export default async (req, res) => {
  const {
    query: { params, gif, customMessage, gifTag },
  } = req;

  try {
    const [name, subject] = params;

    const isCustomSubject = subject === "custom";

    const hasGifTag = (gifTag && gifTag) || "congratulations";

    const camelizedSubject = !isCustomSubject && camelize(subject);

    const giphyData = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_APY_KEY}&tag=${hasGifTag}&rating=G`
    );

    const subjectIndex =
      !isCustomSubject &&
      Math.floor(
        Math.random() * Math.floor(subjects[camelizedSubject].data.length)
      );

    res.status(200).json({
      message: isCustomSubject
        ? `${name}, ${customMessage}`
        : subjects[camelizedSubject].data[subjectIndex](name),
      imgSrc: gif ? giphyData.data.image_original_url : undefined,
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Its not you, its us 💔 Something went terribly wrong on our end. Anyway here's a kitty",
      imgSrc: "https://http.cat/500",
    });
  }
};
