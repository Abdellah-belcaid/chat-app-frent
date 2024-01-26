import {
  FaClock,
  FaEnvelope,
  FaInfoCircle,
  FaUserCircle,
} from "react-icons/fa";
import { useSelector } from "react-redux";

function Profile() {
  const currentUser = useSelector((state) => state.app.currentUser);
  console.log("render profile ", currentUser);
  return (
    <div className="relative flex flex-col items-center w-full h-full p-1">
      {/* Background Gradient */}
      <div
        className="absolute w-full h-1/3 m-2 object-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute bottom-0 bg-slate-100 h-2/3 w-full" />

      <div className="flex flex-col backdrop-blur-[2px] z-50 mt-20 border-2 h-full w-full max-w-md text-center p-8 rounded-xl shadow-xl ">
        {/* User Avatar */}
        <img
          src={currentUser.avatar}
          alt={currentUser.name}
          className="h-35 w-35 mx-auto mb-4 rounded-full object-cover border-2 shadow-xl p-1"
          
        />

        {/* User Name */}
        <h2 className="text-2xl font-semibold text-gray-800">
          {currentUser.name}
        </h2>

        {/* User Details */}
        <div className="mt-2 text-gray-600">
          <p>
            <FaUserCircle className="inline-block mr-2" />
            ID: {currentUser.id}
          </p>
          <p>
            <FaEnvelope className="inline-block mr-2" />
            Email: {currentUser.email || "N/A"}
          </p>
          <p>
            <FaClock className="inline-block mr-2" />
            Last Seen: {currentUser.lastSeen.toLocaleString() || "N/A"}
          </p>
          {/* Add more details as needed */}
        </div>

        {/* Description */}
        <div className="mt-4 text-gray-700">
          <p>
            <FaInfoCircle className="inline-block mr-2" />
            {currentUser.bio || "No description available."}
          </p>
        </div>

        {/* Edit Profile Button */}
        <button className="mt-6 bg-sky-400 text-white px-4 py-2 rounded-full hover:bg-blue-600 ">
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
