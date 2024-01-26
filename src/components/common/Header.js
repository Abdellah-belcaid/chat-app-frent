import { HiChat } from "react-icons/hi";
import { IoMdPersonAdd } from "react-icons/io";
import { RiLoginBoxLine } from "react-icons/ri";
import { TbUserSquareRounded } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import logo from "../../assets/images/logo-32x32.png";
const Header = () => {
  return (
    <header className="bg-white p-2 border-b-2 h-[8%]">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-lg font-semibold text-slate-800">Chat App</span>
        </Link>

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
            to="/profile"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Profile"
            className="flex items-center"
          >
            <TbUserSquareRounded className="mr-2 text-2xl text-purple-500" />
          </Link>

          <Link
            to="/login"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Login"
            className="flex items-center"
          >
            <RiLoginBoxLine className="mr-2 text-2xl text-red-500" />
          </Link>
          {/* Add more links as needed */}
        </nav>

        {/* Tooltips */}
        <Tooltip id="my-tooltip" place="bottom" />
      </div>
    </header>
  );
};

export default Header;
