import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import FileUploader from "src/components/common/FileUploader";
import { registerUser } from "src/redux/actions/userActions";
import UserService from "src/services/UserService";
import { v4 as uuidv4 } from "uuid";
const statusOptions = ["OFFLINE", "ONLINE", "AWAY", "BUSY"];

function Register() {
  const [file, setFile] = useState(undefined);
  const [isFileSubmitted, setIsFileSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    status: "OFFLINE",
    bio: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFileChange = (selectedFile) => {
    setFile(selectedFile);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Generate a new unique ID for the user
    const newUser = { ...formData, id: uuidv4() };

    // Dispatch the registerUser action with the form data
    dispatch(registerUser(newUser)).then(async () => {
      const response = await UserService.uploadAvatar(newUser.id, file);
      console.log("halllalpyaaa  : ", response);

      navigate("/login"); // Navigate to the login page after successful registration
    });
  };

  return (
    <div className="flex items-center justify-center h-full w-full bg-gradient-to-r from-blue-300 via-purple-100 to-pink-200 p-2">
      <div className="p-6 border-2 rounded-md shadow-2xl w-full sm:w-3/4 md:w-2/4 lg:w-2/4  bg-transparent   transition-all duration-400">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center text-blue-400">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="space-y-2 ">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 ">
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
              Avatar (Image Profile)
            </label>
            {/* File upload input */}
            <FileUploader
              onFileChange={handleFileChange}
              isSubmitted={isFileSubmitted}
              resetSubmit={() => setIsFileSubmitted(false)}
            />
          </div>

          <button
            type="submit"
            className="bg-cyan-50  w-full py-2 px-4 rounded-md border hover:text-cyan-600 hover:border-cyan-600 transition duration-500  ease-in-out flex items-center justify-center "
          >
            <FaSignInAlt className="mr-2 " />
            Register
          </button>
        </form>

        <p className="flex mt-4 text-sm text-center gap-1 justify-center">
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
