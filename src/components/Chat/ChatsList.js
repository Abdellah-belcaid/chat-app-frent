import React from "react";
import { useSelector } from "react-redux";
import {
  selectAllMessages,
  selectAllUsers,
  selectCurrentUser,
} from "../../redux/selectors/selectors";
import { FiUsers } from "react-icons/fi";

const ChatsList = ({ chats, onSelect }) => {
  // Get participants and messages using selectors
  const participants = useSelector(selectAllUsers);
  const messages = useSelector(selectAllMessages);
  const currentUser = useSelector(selectCurrentUser);

  const getLastMessage = (chat) => {
    const lastMessageId = chat.messages[chat.messages.length - 1];
    const lastMessage = messages.find((msg) => msg.id === lastMessageId);
    return lastMessage;
  };

  const getLastMessageSenderName = (chat) => {
    const senderId = getLastMessage(chat)?.sender;
    return (
      participants.find((participant) => participant.id === senderId)?.name ||
      "Unknown User"
    );
  };

  const getParticipant = (chat) =>
    participants.find(
      (participant) =>
        chat.participants.includes(participant.id) &&
        participant.id !== currentUser.id
    );

  return (
    <div className="w-5/12 h-full border-2 flex flex-col mr-2 overflow-scroll scrollbar-hide">
      <ul>
        {Array.isArray(chats) &&
          chats.map((chat) => {
            // Find the correct participant based on ID
            const participant = getParticipant(chat);
            return (
              <li
                key={chat.id}
                onClick={() => onSelect(chat)}
                className="flex gap-2 items-center p-2 m-1 cursor-pointer hover:bg-blue-200 rounded-md "
                role="button"
              >
                {/* Avatar */}
                <div className="h-10 w-10 rounded-full mr-3">
                  {chat.isGroupChat ? (
                    <FiUsers className="h-10 w-10 rounded-full object-cover border-2 m-1 p-1.5 bg-blue-400 text-white flex items-center justify-center" />
                  ) : (
                    participant && (
                      <img
                        src={participant.avatar}
                        alt="Avatar"
                        className="h-10 w-10 rounded-full object-cover border-2 m-1"
                      />
                    )
                  )}
                </div>

                {/* User or Group Name and Last Message */}
                <div className="flex-1">
                  <div className="text-sm md:text-lg font-semibold text-slate-600">
                    {!chat.isGroupChat
                      ? participant?.name || "Unknown User"
                      : "Group Chat"}
                  </div>

                  {/* Last Message */}
                  <div className="text-xs text-slate-400 font-semibold ">
                    {chat.messages.length > 0 ? (
                      <>
                        <span className="mr-1 text-blue-500">
                          {getLastMessageSenderName(chat)}:
                        </span>
                        {getLastMessage(chat)?.text}
                      </>
                    ) : (
                      "No messages yet"
                    )}
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ChatsList;
