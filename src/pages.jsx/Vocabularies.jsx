import { useLoaderData } from "react-router-dom";
import Vocabulary from "../components/Vocabulary";

const Vocabularies = () => {
  const vocabularies = useLoaderData();
  console.log(vocabularies);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7 xl:grid-cols-5 xl:gap-12 w-11/12 mx-auto py-14">
      {vocabularies.map((vocabulary) => (
        <Vocabulary key={vocabulary.id} vocabulary={vocabulary} />
      ))}
    </div>
  );
};

export default Vocabularies;
