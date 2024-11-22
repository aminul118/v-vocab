import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Vocabulary = ({ vocabulary }) => {
  const { word, pronunciation, meaning, part_of_speech, difficulty, id } =
    vocabulary;

  return (
    <div className="card bg-white shadow-md p-4 mb-4 rounded-lg space-y-3">
      <h3 className="text-xl font-bold text-primary">{word}</h3>
      <p className="italic text-gray-600">{pronunciation}</p>
      <p className="text-sm text-gray-800">
        <strong>Meaning:</strong> {meaning}
      </p>
      <p className="text-sm">
        <strong>Part of Speech:</strong> {part_of_speech}
      </p>
      <p className="text-sm">
        <strong>Difficulty:</strong> {difficulty}
      </p>
      <Link to={`/vocab-details/${id}`} className="btn btn-primary">
        Details
      </Link>
    </div>
  );
};

Vocabulary.propTypes = {
  vocabulary: PropTypes.shape({
    id: PropTypes.string.isRequired,
    word: PropTypes.string.isRequired,
    pronunciation: PropTypes.string.isRequired,
    meaning: PropTypes.string.isRequired,
    part_of_speech: PropTypes.string.isRequired,
    difficulty: PropTypes.oneOf(["easy", "medium", "difficult"]).isRequired,
  }).isRequired,
};

export default Vocabulary;
