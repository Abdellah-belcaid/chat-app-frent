// import React from "react";

// function Login() {

//   return (
//     <div
//       class="flex h-full w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80')",
//       }}
//     >
//       <div class="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
//         <div class="text-white">
//           <div class="mb-8 flex flex-col items-center">
//             <img
//               src="https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Color-Logo.wine.svg"
//               width="150"
//               alt=""
//               srcset=""
//             />
//             <h1 class="mb-2 text-2xl">Instagram</h1>
//             <span class="text-gray-300">Enter Login Details</span>
//           </div>
//           <form action="#">
//             <div class="mb-4 text-lg">
//               <input
//                 class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
//                 type="text"
//                 name="name"
//                 placeholder="id@email.com"
//               />
//             </div>

//             <div class="mb-4 text-lg">
//               <input
//                 class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
//                 type="Password"
//                 name="name"
//                 placeholder="*********"
//               />
//             </div>
//             <div class="mt-8 flex justify-center text-lg text-black">
//               <button
//                 type="submit"
//                 class="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
//               >
//                 Login
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "src/redux/actions/userActions";
import { selectAllUsers } from "src/redux/selectors/selectors";
import facebook from "../assets/images/facebook.png";
import google from "../assets/images/google.png";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector(selectAllUsers);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login logic here

    // Check if the user exists in the users array
    const user = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );
    if (user) {
      console.log("valid login credentials");
      // Dispatch the setCurrentUser action to update the currentUser in the Redux store
      dispatch(setCurrentUser(user));
      // Redirect the user to the desired page after successful login

      navigate("/");
    } else {
      // Handle invalid login credentials
      console.log("Invalid login credentials");
    }
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
