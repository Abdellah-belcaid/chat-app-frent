import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import UserService from "src/services/UserService";
import facebook from "../assets/images/facebook.png";
import google from "../assets/images/google.png";
import { loginUser } from "src/redux/actions/userActions";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Dispatch the loginUser action with the form data
    dispatch(loginUser(formData)).then(() => {
      navigate("/"); // Navigate to home page after successful login
    });
  };

  const handleOAuthLogin = (provider) => {
    // Implement OAuth login logic here
    // Example: Redirect to OAuth provider's authentication URL
    // window.location.href = `${process.env.REACT_APP_API_BASE_URL}/auth/${provider}`;
  };

  return (
    <div className="flex items-center justify-center h-full w-full bg-gradient-to-r from-blue-200 via-purple-400 to-pink-200 p-2">
      <div className="bg-white p-8 border-2 rounded-md shadow-2xl w-full sm:w-2/3 lg:w-1/3 bg-transparent">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Chat Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 border w-full rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 border w-full rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="mb-1.5 block w-full text-center text-white bg-blue-500 hover:bg-blue-700 px-2 py-1.5 rounded-md focus:outline-none"
              type="submit"
            >
              Login
            </button>
          </div>

          {/* Forgot Password Link */}
          <div className="text-sm text-center">
            <Link
              to="/forgot-password"
              className="text-gray-700 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </form>

        {/* OAuth Login Options */}
        <div className="mt-4">
          <div className="flex flex-col space-y-2">
            <button
              className="flex items-center justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md"
              onClick={() => handleOAuthLogin("google")}
            >
              <img className="w-5 mr-2" alt="Google Icon" src={google} />
              Sign in with Google
            </button>
            <button
              className="flex items-center justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md"
              onClick={() => handleOAuthLogin("facebook")}
            >
              <img className="w-5 mr-2" alt="Facebook Icon" src={facebook} />
              Sign in with Facebook
            </button>
          </div>
        </div>

        {/* Registration Link */}
        <p className="mt-4 text-sm text-center text-gray-700">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
