import { GoDotFill } from "react-icons/go";
import { HiChat } from "react-icons/hi";
import { IoMdPersonAdd } from "react-icons/io";
import { RiLoginBoxLine } from "react-icons/ri";
import { TbUserSquareRounded } from "react-icons/tb";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { selectCurrentUser } from "src/redux/selectors/selectors";
import logo from "../../assets/images/logo-32x32.png";
const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isOnline = currentUser && currentUser?.status === "online";

  return (
    <header className="bg-white p-2 border-b-2 h-[8%]">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-8 mr-2 " />
            <span className="text-lg font-semibold text-slate-800">
              Chat App
            </span>
          </Link>
          {/* <SearchInput /> */}
        </div>

        {/* Navigation Links with Tooltips */}
        <nav className="flex space-x-4 text-lg font-semibold">
          <Link
            to="/chats"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Chats"
            className="flex items-center"
          >
            <HiChat className="mr-2 text-2xl text-blue-500" />
          </Link>

          <Link
            to="/register"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Register"
            className="flex items-center"
          >
            <IoMdPersonAdd className="mr-2 text-2xl text-green-500" />
          </Link>

          <Link
            to="/login"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Login"
            className="flex items-center"
          >
            <RiLoginBoxLine className="mr-2 text-2xl text-red-500" />
          </Link>

          {currentUser && (
            <div className="flex justify-center items-center gap-2">
              <div
                className={`rounded-lg text-sm font-semibold px-2 py-1 flex items-center gap-1 ${
                  isOnline ? "bg-green-200" : "bg-gray-200"
                }`}
              >
                <GoDotFill
                  className={`animate-pulse ${
                    isOnline ? "text-green-500" : "text-gray-500"
                  }`}
                />
                {currentUser.status}
              </div>
              <Link
                to="/profile"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Profile"
                className="flex items-center justify-center"
              >
                {currentUser.avatar ? (
                  <img
                    src={currentUser.avatar}
                    alt="User Avatar"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                ) : (
                  <TbUserSquareRounded className="mr-2 text-3xl text-purple-500" />
                )}
              </Link>
            </div>
          )}
          {/* Add more links as needed */}
        </nav>

        {/* Tooltips */}
        <Tooltip id="my-tooltip" place="bottom" />
      </div>
    </header>
  );
};

export default Header;
