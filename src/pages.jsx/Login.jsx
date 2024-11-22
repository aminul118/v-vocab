import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { signInExistingUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [eye, setEye] = useState(false);
  const handleEye = () => {
    setEye(!eye);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInExistingUser(email, password);
    navigate("/");
  };

  return (
    <div
      className="min-h-[calc(100vh-296px)] flex items-center justify-center"
      data-aos="fade-right"
    >
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-8">
        <h1 className="text-4xl font-bold py-4">Login</h1>
        <div className="divider"></div>
        <form onSubmit={handleLogin}>
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
              required
            />
            <div className="absolute right-5 top-12">
              <button type="button" onClick={handleEye}>
                {!eye ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <p className="text-center py-4">
            Already Have an account?
            <Link to="/register" className="text-blue-600 hover:underline ml-2">
              register
            </Link>
          </p>
        </form>
        <div className="divider">or</div>
        <button className="  text-black bg-gray-50 btn hover:bg-gray-100">
          <img
            src="https://i.ibb.co/dQMmB8h/download-4-removebg-preview-1.png"
            alt="google logo"
            className="w-[23px]"
          />
          Log in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
