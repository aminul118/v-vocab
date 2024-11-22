import { Link } from "react-router-dom"; // Assuming you're using React Router

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-700">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-500">404</h1>
        <p className="text-2xl mt-4">Oops! Page not found</p>
        <p className="text-md mt-2 text-gray-500">
          The page you’re looking for doesn’t exist or an error occurred.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="btn btn-primary btn-wide text-white transition-transform hover:scale-105"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <div className="mt-10">
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="Error Illustration"
          className="max-w-xs md:max-w-md"
        />
      </div>
    </div>
  );
};

export default ErrorPage;
