// ChatHeader.js
import { useRef } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoPersonAddOutline } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/selectors/selectors";
import DropdownMenu from "../common/DropdownMenu";

// Options for the dropdown menu
const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

const ChatHeader = ({ participants, onClose }) => {
  // const Participants = users.slice(1, 3);
  // console.log(Participants);

  const currentUser = useSelector(selectCurrentUser);
  // const currentUser = users.at(0);
  participants = participants?.filter((p) => p.id !== currentUser.id);

  // Ref to manage the visibility of the options dropdown
  const dropdownRef = useRef(null);

  // Function to toggle the visibility of the options dropdown
  const toggleOptions = () => {
    dropdownRef.current.classList.toggle("hidden");
  };

  // Function to handle option click
  const handleOptionClick = (option) => {
    console.log("Clicked option:", option);
    // Add logic to handle the selected option
  };

  return (
    <div className="h-16 border-b flex justify-between items-center w-full px-5 py-2 shadow-sm">
      {/* Participant Avatars */}
      <div className="flex items-center gap-2">
        {participants?.map((participant) => (
          <img
            key={participant.id}
            src={participant.avatar}
            alt={participant.name}
            className="h-10 w-10 overflow-hidden rounded-full object-cover border-2 p-1"
          />
        ))}
        <div className="font-semibold ml-3 text-slate-600">
          {participants.map((p) => p.name).join(", ")}
        </div>
      </div>

      {/* Close Button */}
      <div className="relative flex items-center gap-3">
        <button onClick={onClose}>
          <IoIosCloseCircleOutline className="h-9 w-9 bg-slate-50 rounded-full text-slate-500 hover:text-black  p-2" />
        </button>
        <button>
          <IoPersonAddOutline className="h-9 w-9 bg-slate-50 rounded-full text-slate-500 hover:text-black  p-2" />
        </button>
        <button onClick={toggleOptions}>
          <SlOptions className="h-9 w-9 bg-slate-50 rounded-full text-slate-500 hover:text-black  p-2" />
        </button>
        {/* Dropdown menu */}
        <DropdownMenu
          options={options}
          onClick={handleOptionClick}
          ref={dropdownRef}
        />
      </div>
    </div>
  );
};

export default ChatHeader;
