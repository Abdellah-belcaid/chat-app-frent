// import React, { useEffect, useState } from "react";
// import UserService from "../services/UserService";

// function Register() {
//   const [nickname, setNickname] = useState("");
//   const [realname, setRealname] = useState("");
//   const [responseMessage, setResponseMessage] = useState("");

//   const handleNicknameChange = (e) => {
//     setNickname(e.target.value);
//   };

//   const handleRealnameChange = (e) => {
//     setRealname(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Call the registerUser method from the UserService
//       const registeredUser = await UserService.registerUser({
//         nickName: nickname,
//         fullName: realname,
//         status: "OFFLINE", // You can set a default status or handle it differently
//       });

//       console.log("User registered successfully:", registeredUser);

//       // Set a response message or perform additional actions after successful registration
//       setResponseMessage("User registered successfully");
//     } catch (error) {
//       // Handle registration errors
//       console.error("Error registering user in component:", error);

//       // Set an error response message or perform additional error handling
//       setResponseMessage("Error registering user");
//     }
//   };

//   useEffect(() => {
//     // Fetch all users when the component mounts
//     const fetchAllUsers = async () => {
//       try {
//         const allUsers = await UserService.getAllUsers();
//         console.log("All users:", allUsers);
//       } catch (error) {
//         // Handle error if the fetch fails
//         console.error("Error fetching all users in component:", error);
//       }
//     };

//     fetchAllUsers();
//   }, []); // Empty dependency array ensures the effect runs only once when the component mounts

//   return (
//     <div className="user-form flex items-center justify-center h-full w-full">
//       <div className="bg-white p-8 rounded shadow-md">
//         <h2 className="text-2xl font-bold mb-4">Enter Chatroom</h2>
//         <form id="usernameForm" className="space-y-4" onSubmit={handleSubmit}>
//           <div>
//             <label
//               htmlFor="nickname"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Nickname:
//             </label>
//             <input
//               type="text"
//               id="nickname"
//               name="nickname"
//               required
//               onChange={handleNicknameChange}
//               value={nickname}
//               className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="realname"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Real Name:
//             </label>
//             <input
//               type="text"
//               id="realname"
//               name="realname"
//               required
//               onChange={handleRealnameChange}
//               value={realname}
//               className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
//           >
//             Enter Chatroom
//           </button>
//         </form>
//         {/* Display response message */}
//         {responseMessage && (
//           <p className="text-red-500 mt-4">{responseMessage}</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Register;

//#########################################################################################################
import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { addUser } from "../redux/actions/userActions";

const statusOptions = ["OFFLINE", "ONLINE", "AWAY", "BUSY"];

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    status: "OFFLINE",
    bio: "",
    avatar: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate a new unique ID for the user
    const newUser = { ...formData, id: uuidv4() };

    dispatch(addUser(newUser));
    // You may want to redirect to a different route after registration
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center h-full w-full bg-gray-50 p-2">
      <div className="bg-white p-6 border-2 rounded-md shadow-2xl w-full sm:w-2/3 bg-transparent">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center text-blue-500">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-full">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 border w-full rounded-md"
                required
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 border w-full rounded-md"
                required
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-full">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 p-2 border w-full rounded-md"
                required
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-600"
              >
                Status
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="mt-1 p-2 border w-full rounded-md"
              >
                {statusOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-600"
            >
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows="2"
              className="mt-1 p-2 border w-full rounded-md"
            />
          </div>

          <div>
            <label
              htmlFor="avatar"
              className="block text-sm font-medium text-gray-600"
            >
              Avatar (Image URL)
            </label>
            <input
              type="text"
              id="avatar"
              name="avatar"
              value={formData.avatar}
              onChange={handleChange}
              className="mt-1 p-2 border w-full rounded-md"
            />
            {formData.avatar && (
              <div className="mt-2">
                <img
                  src={formData.avatar}
                  alt="Avatar Preview"
                  className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="bg-cyan-500 text-white p-2 rounded-md hover:bg-cyan-700 transition duration-300 flex items-center justify-center"
          >
            <FaSignInAlt className="mr-2" />
            Register
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Already have an account?
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
