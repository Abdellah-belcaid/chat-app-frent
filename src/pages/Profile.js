import {
  FaClock,
  FaEnvelope,
  FaInfoCircle,
  FaUserCircle,
} from "react-icons/fa";
import { TbUserSquareRounded } from "react-icons/tb";
import { useSelector } from "react-redux";
import { formatDate } from "src/components/utils/dateUtils";
import { selectCurrentUser } from "src/redux/selectors/selectors";
import backgroundImage from "src/assets/images/background_1.jpg";

function Profile() {
  const currentUser = useSelector(selectCurrentUser);

  console.log("render profile ", currentUser);
  return (
    <div className="relative  flex flex-col items-center justify-center w-full h-full p-1">
      {/* Background Gradient */}
      <img
        className="absolute top-0 w-full h-1/3 m-2 object-cover object-center"
        src={backgroundImage}
        alt="background"
      />
      <div className="absolute bottom-0 bg-sky-50 bg-gradient-to-b from-sky-50 via-purple-100 to-red-100 h-2/3 w-full" />
      {/* user box */}
      <div className="flex flex-col backdrop-blur-[2px] items-center  border-2 max-h-md w-full max-w-md text-center p-8 rounded-xl neon-sky  overflow-scroll scrollbar-hide  ">
        {/* User Avatar */}
        <div className="relative">
          <img
            src={currentUser?.avatar}
            alt={currentUser?.name}transition-all
            className="h-32 w-32 mx-auto mb-4 rounded-full object-cover border-2 shadow-xl p-1"
          />
          <TbUserSquareRounded className="absolute text-3xl hover:scale-125 text-purple-700 bg-white rounded-full bottom-2 right-2" />
        </div>

        {/* User Name */}
        <h2 className="text-2xl font-semibold text-gray-800">
          {currentUser?.name}
        </h2>

        {/* User Details */}
        <div className="mt-2 text-gray-600">
          <p>
            <FaUserCircle className="inline-block mr-2" />
            ID: {currentUser?.id}
          </p>
          <p>
            <FaEnvelope className="inline-block mr-2" />
            Email: {currentUser?.email || "N/A"}
          </p>
          <p>
            <FaClock className="inline-block mr-2 " />
            Last Seen:
            {(currentUser?.lastSeen && formatDate(currentUser?.lastSeen)) ||
              "N/A"}
          </p>
          {/* Add more details as needed */}
        </div>

        {/* Description */}
        <div className="mt-4 text-gray-700">
          <p>
            <FaInfoCircle className="inline-block mr-2" />
            {currentUser?.bio || "No description available."}
          </p>
        </div>

        {/* Edit Profile Button */}
        <button className="mt-6 bg-sky-400 text-white px-4 py-2 rounded-full hover:bg-blue-600 ">
          Edit Profile
        </button>
      </div>
      {/* end user box */}
    </div>
  );
}

export default Profile;
