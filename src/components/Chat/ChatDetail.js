import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateChat } from "src/redux/actions/chatActions";
import { addNewMessage } from "src/redux/actions/messageActions";
import {
  selectAllMessages,
  selectAllUsers,
  selectCurrentUser,
} from "src/redux/selectors/selectors";
import { v4 as uuidv4 } from "uuid";
import MessageInput from "../message/MessageInput";
import Messages from "../message/Messages";
import ChatHeader from "./ChatHeader";

const ChatDetail = ({ chat, onClose }) => {
  const dispatch = useDispatch();
  const scrollDown = useRef();
  const currentUser = useSelector(selectCurrentUser);
  const participants = useSelector(selectAllUsers).filter((participant) =>
    chat.participants.includes(participant.id)
  );
  const messages = useSelector(selectAllMessages).filter((message) =>
    chat.messages.includes(message.id)
  );

  const handleSend = (newMessage) => {
    console.log("this is send method : ", newMessage);
    const newChat = {
      id: uuidv4(),
      sender: currentUser.id,
      content: newMessage.content,
      type: newMessage.messageType,
      timestamp: new Date(),
      status: "sent",
      chatId: chat.id,
    };

    // Dispatch the addMessage action with the new message
    dispatch(addNewMessage(newChat)).then(() => {
      // Dispatch the updateChat action with the new message ID
      dispatch(
        updateChat(chat.id, { messages: [...chat.messages, newChat.id] })
      );
      chat.messages.push(newChat.id);
    });
  };

  useEffect(() => {
    // Dispatch the fetchMessagesByChatId action to get messages for the current chat
    // dispatch(fetchMessagesByChatId(chat.id));

    // Scroll to the bottom after the new message has been rendered
    scrollDown.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, chat]); // Add messages as a dependency

  return (
    <div className="flex flex-col overflow-auto gap-1 w-full bg-white border-2">
      {/* Chat Header */}
      <ChatHeader participants={participants} onClose={onClose} />

      {/* Messages */}
      <Messages
        messages={messages}
        scrollDown={scrollDown}
        participants={participants}
      />

      {/* Input area for sending messages */}
      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default ChatDetail;
