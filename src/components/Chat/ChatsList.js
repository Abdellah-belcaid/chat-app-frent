import React from "react";

const ChatsList = ({ chats, onSelect }) => {
  return (
    <div className="w-4/12 h-full border-2 flex flex-col  mr-2 ">
      <ul>
        {chats.map((chat) => (
          <li
            key={chat.id}
            onClick={() => onSelect(chat)}
            className="flex gap-2 items-center p-2 cursor-pointer hover:bg-blue-200"
            role="button"
          >
            {/* Avatar */}
            <div>
              <img
                src={chat.participants[1].avatar}
                alt="Avatar"
                className="h-10 w-10 rounded-full object-cover border-2 p-1"
              />
            </div>

            {/* User or Group Name and Last Message */}
            <div className="flex flex-col overflow-hidden">
              <div className="text-md font-semibold text-slate-600">
                {chat.participants.length === 2
                  ? chat.participants[1].name
                  : "Group Chat"}
              </div>

              {/* Last Message */}
              <div className="text-xs text-slate-400 font-semibold overflow-hidden whitespace-nowrap">
                {chat.messages.length > 0 ? (
                  <>
                    <span className="mr-1">
                      {chat.messages[chat.messages.length - 1]?.sender?.name}:
                    </span>
                    {chat.messages[chat.messages.length - 1]?.text}
                  </>
                ) : (
                  "No messages yet"
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatsList;
