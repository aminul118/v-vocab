import { useLoaderData } from "react-router-dom";
import Vocabulary from "../components/Vocabulary";

const Vocabularies = () => {
  const vocabularies = useLoaderData();
  console.log(vocabularies);

  return (
    <div>
      <h1 className="text-3xl text-center py-6 font-semibold mt-12">
        Total Vocabularies : {vocabularies.length}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 xl:grid-cols-5 xl:gap-12 w-11/12 mx-auto py-14">
        {vocabularies.map((vocabulary) => (
          <Vocabulary key={vocabulary.id} vocabulary={vocabulary} />
        ))}
      </div>
    </div>
  );
};

export default Vocabularies;
