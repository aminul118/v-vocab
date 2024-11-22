import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const { createNewUser, userProfileUpdate } = useContext(AuthContext);
  const [eye, setEye] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState({
    hasSixChar: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false,
  });
  const [showErrors, setShowErrors] = useState(false);
  const navigate = useNavigate();

  const handleEye = () => {
    setEye(!eye);
  };

  const validatePassword = (value) => {
    setPassword(value);
    setPasswordError({
      hasUpperCase: /[A-Z]/.test(value),
      hasLowerCase: /[a-z]/.test(value),
      hasNumber: /[0-9]/.test(value),
      hasSpecialChar: /[^A-Za-z0-9]/.test(value),
      hasSixChar: value.length >= 6,
    });
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;

    // Show errors if password requirements are not met
    if (
      !passwordError.hasSixChar ||
      !passwordError.hasUpperCase ||
      !passwordError.hasLowerCase ||
      !passwordError.hasNumber ||
      !passwordError.hasSpecialChar
    ) {
      setShowErrors(true); // Trigger error messages to display
      return;
    }

    createNewUser(email, password).then(() => {
      userProfileUpdate({ displayName: name, photoURL: photo });
    });
    navigate("/login");
  };

  return (
    <div
      className="min-h-[calc(100vh-296px)] flex items-center justify-center"
      data-aos="fade-left"
    >
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-8">
        <h1 className="text-4xl font-bold py-4">Register</h1>
        <div className="divider"></div>
        <form onSubmit={handleRegistration}>
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          {/* Photo URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          {/* Password */}
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={!eye ? "password" : "text"}
              name="password"
              placeholder="password"
              className="input input-bordered"
              value={password}
              onChange={(e) => validatePassword(e.target.value)}
              required
            />
            <div className="absolute right-5 top-12">
              <button type="button" onClick={handleEye}>
                {!eye ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {/* Error Messages */}
            {showErrors && (
              <div className="text-red-500 mt-2 text-sm">
                {!passwordError.hasUpperCase && (
                  <p className="flex items-center gap-2">
                    <FaTimes /> Must contain at least one uppercase letter.
                  </p>
                )}
                {!passwordError.hasLowerCase && (
                  <p className="flex items-center gap-2">
                    <FaTimes /> Must contain at least one lowercase letter.
                  </p>
                )}
                {!passwordError.hasNumber && (
                  <p className="flex items-center gap-2">
                    <FaTimes /> Must contain at least one number.
                  </p>
                )}
                {!passwordError.hasSpecialChar && (
                  <p className="flex items-center gap-2">
                    <FaTimes /> Must contain at least one special character.
                  </p>
                )}
                {!passwordError.hasSixChar && (
                  <p className="flex items-center gap-2">
                    <FaTimes /> Must be at least 6 characters long.
                  </p>
                )}
              </div>
            )}
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
          <p className="text-center py-4">
            Already have an account?
            <Link to="/login" className="text-blue-600 hover:underline ml-2">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
