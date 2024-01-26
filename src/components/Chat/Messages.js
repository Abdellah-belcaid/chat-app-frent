import React from "react";
import { FaRegCheckCircle, FaRegClock, FaRegTimesCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import {
  formatTimestamp,
  shouldDisplayDateSeparator,
} from "../utils/dateUtils";
import MessageDateSeparator from "./MessageDateSeparator";
import { selectCurrentUser } from "../../redux/selectors/selectors";

const Messages = ({ messages, participants, scrollDown }) => {
  const currentUser = useSelector(selectCurrentUser);

  const getParticipant = (id) => {
    return participants.find((participant) => participant.id === id);
  };
  const isCurrentUserSender = (message) => message.sender === currentUser.id;

  const getMessageAlignment = (message) =>
    isCurrentUserSender(message) ? "justify-start" : "justify-end";
  const getBubbleAlignment = (message) =>
    isCurrentUserSender(message) ? "justify-start" : "flex-row-reverse";
  const getBubbleColor = (message) =>
    isCurrentUserSender(message)
      ? "bg-blue-100 text-blue-800 border-blue-200 rounded-tr-xl"
      : "bg-gray-100 text-gray-700 border-gray-200 rounded-tl-xl";

  return (
    <div className="flex-1 overflow-scroll scrollbar-hide p-2 m-1">
      {messages.map((message, index) => (
        <div key={message.id} className="mt-4">
          {shouldDisplayDateSeparator(index, messages) && (
            <MessageDateSeparator date={message.timestamp} />
          )}

          <div className={`flex my-2 ${getMessageAlignment(message)} mb-2`}>
            <div className="w-[90%] md:w-1/2">
              <div
                className={`flex items-center gap-2 ${getBubbleAlignment(
                  message
                )}`}
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src={getParticipant(message.sender).avatar}
                  alt=""
                />

                <div className="flex flex-col max-w-full">
                  <p
                    className={`flex gap-1 items-center font-semibold text-sm text-gray-800 ${getBubbleAlignment(
                      message
                    )}`}
                  >
                    {getParticipant(message.sender).name}
                    <span className="text-gray-500 text-sm">
                      {formatTimestamp(message.timestamp)}
                    </span>
                  </p>

                  <div
                    contentEditable="true"
                    className={`mt-2 p-4 rounded-b-xl border-2 overflow-wrap break-words ${getBubbleColor(
                      message
                    )}`}
                  >
                    {message.text}

                    <div className="text-xs flex justify-end items-center mt-1">
                      {message.status === "sent" && (
                        <FaRegCheckCircle className="text-green-500 mr-1" />
                      )}
                      {message.status === "delivered" && (
                        <FaRegClock className="text-yellow-500 mr-1" />
                      )}
                      {message.status === "failed" && (
                        <FaRegTimesCircle className="text-red-500 mr-1" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div ref={scrollDown} className="mt-2" />
    </div>
  );
};

export default Messages;
