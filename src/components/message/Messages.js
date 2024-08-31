import { useSelector } from "react-redux";
import { selectCurrentUser } from "src/redux/selectors/selectors";
import {
  formatTimestamp,
  shouldDisplayDateSeparator,
} from "../utils/dateUtils";
import MessageContent from "./MessageContent";
import MessageDateSeparator from "./MessageDateSeparator";

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

  return (
    <div className="flex-1 overflow-scroll scrollbar-hide p-2 m-1">
      {messages.map((message, index) => (
        <div key={message.id} className="mt-4">
          {shouldDisplayDateSeparator(index, messages) && (
            <MessageDateSeparator date={message.timestamp} />
          )}

          <div className={`flex  ${getMessageAlignment(message)} `}>
            <div className="w-[90%] md:w-1/2">
              <div
                className={`flex items-center gap-2 ${getBubbleAlignment(
                  message
                )}`}
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src={getParticipant(message?.sender)?.avatar}
                  alt=""
                />

                <div className="flex flex-col max-w-full">
                  <p
                    className={`flex gap-1 items-center font-semibold text-sm text-gray-800 ${getBubbleAlignment(
                      message
                    )}`}
                  >
                    {getParticipant(message.sender)?.name}
                    <span className="text-gray-500 text-sm">
                      {formatTimestamp(message?.timestamp)}
                    </span>
                  </p>

                  <MessageContent
                    content={message.content}
                    type={message.type}
                    status={message.status}
                    isCurrentUserSender={isCurrentUserSender(message)}
                  />
                  {/* this will be added when adding events */}
                  {/* <div className="flex  justify-center items-center h-[calc(100%-88px)]">
                    <Typing />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div ref={scrollDown} className="mt-4" />
    </div>
  );
};

export default Messages;
