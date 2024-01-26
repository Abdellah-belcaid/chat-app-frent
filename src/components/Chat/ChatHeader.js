// ChatHeader.js
import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoPersonAddOutline } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/selectors/selectors";

const ChatHeader = ({ participants, onClose }) => {
  // const currentUser = useSelector((state) => state.app.currentUser);
  const currentUser = useSelector(selectCurrentUser);
  participants = participants.filter((p) => p.id !== currentUser.id);
  return (
    <div className="h-16 border-b flex justify-between items-center w-full px-5 py-2 shadow-sm">
      {/* Participant Avatars */}
      <div className="flex items-center gap-2">
        {participants.map((participant) => (
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
      <div className=" flex items-center gap-2">
        <button onClick={onClose}>
          <IoIosCloseCircleOutline className="h-9 w-9 bg-slate-50 rounded-full text-slate-500 hover:text-black  p-2" />
        </button>
        <button>
          <IoPersonAddOutline className="h-9 w-9 bg-slate-50 rounded-full text-slate-500 hover:text-black  p-2" />
        </button>
        <button>
          <SlOptions className="h-9 w-9 bg-slate-50 rounded-full text-slate-500 hover:text-black  p-2" />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
