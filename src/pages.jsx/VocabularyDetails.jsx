import { Link, useLoaderData, useParams } from "react-router-dom";

const VocabularyDetails = () => {
  const vocabularies = useLoaderData(); // All vocabularies loaded from loader
  const { vocabId } = useParams(); // Get the ID from the URL

  // Find the specific vocabulary item by ID
  const vocabulary = vocabularies.find(
    (vocab) => vocab.id === vocabId // Ensure comparison matches the data type
  );

  // Handle case where vocabulary is not found
  if (!vocabulary) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h2 className="text-3xl font-bold text-red-500">
          Vocabulary Not Found
        </h2>
        <p className="text-gray-600 mt-4">
          The vocabulary item you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="card bg-white shadow-md p-12 rounded-lg card-normal space-y-3">
        <h3 className="text-2xl font-semibold py-4">
          <strong>Lesson:</strong> {vocabulary.Lesson_no}
        </h3>
        <h2 className="text-3xl font-bold text-primary">{vocabulary.word}</h2>
        <p className="italic text-gray-600">{vocabulary.pronunciation}</p>
        <p className="mt-4">
          <strong>Meaning:</strong> {vocabulary.meaning}
        </p>
        <p>
          <strong>Part of Speech:</strong> {vocabulary.part_of_speech}
        </p>
        <p>
          <strong>Difficulty:</strong> {vocabulary.difficulty}
        </p>

        <p>
          <strong>When to Say:</strong> {vocabulary.when_to_say}
        </p>
        <p>
          <strong>Example:</strong> {vocabulary.example}
        </p>
        <Link className="btn btn-primary w-48" to="/vocabulary">Back To Vocabularies</Link>
      </div>
    </div>
  );
};

export default VocabularyDetails;
