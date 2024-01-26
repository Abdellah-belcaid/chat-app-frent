// import React, { useState, useEffect, useRef } from "react";
// import ChatHeader from "./ChatHeader";
// import Messages from "./Messages";
// import MessageInput from "./MessageInput";
// import { useDispatch } from "react-redux";
// import { addMessage } from "../../actions/messageActions";

// const ChatDetail = ({ chat, onClose }) => {
//   const [messages, setMessages] = useState(chat.messages);
//   const scrollDown = useRef();
//   const dispatch = useDispatch();

//   // Watch for changes in the 'messages' prop
//   useEffect(() => {
//     // Sort messages when they change
//     const sortedMessages = [...chat.messages].sort(
//       (a, b) => a.timestamp - b.timestamp
//     );
//     setMessages(sortedMessages);
//   }, [chat.messages]);

//   const handleSend = (newMessage) => {
//     const newChat = {
//       id: messages.length + 1,
//       sender: chat.participants[0],
//       text: newMessage,
//       timestamp: new Date(),
//       status: "sent",
//     };

//     const updatedMessages = [...messages, newChat];

//     // Dispatch the addMessage action with the new message
//     dispatch(addMessage(newChat));

//     setMessages(updatedMessages);
//     scrollDown.current.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="flex flex-col gap-1 w-full bg-white border-2">
//       {/* Chat Header */}
//       <ChatHeader participants={chat.participants} onClose={onClose} />

//       {/* Messages */}
//       <Messages messages={messages} scrollDown={scrollDown} />

//       {/* Input area for sending messages */}
//       <MessageInput onSend={handleSend} />
//     </div>
//   );
// };

// export default ChatDetail;

//##############################################################################""

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { updateChat } from "src/redux/actions/chatActions";
import { addMessage } from "src/redux/actions/messageActions";
import {
  selectAllMessages,
  selectAllUsers,
  selectCurrentUser,
} from "src/redux/selectors/selectors";
import MessageInput from "./MessageInput";

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
    const newChat = {
      id: uuidv4(),
      sender: currentUser.id,
      text: newMessage,
      timestamp: new Date(),
      status: "sent",
    };

    // Dispatch the addMessage action with the new message
    dispatch(addMessage(newChat));

    // Dispatch the updateChat action with the new message ID
    dispatch(updateChat(chat.id, { messages: [...chat.messages, newChat.id] }));

    chat.messages.push(newChat.id);
  };

  useEffect(() => {
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
