// import React, { useEffect, useState } from "react";
// import { HiOutlineChat } from "react-icons/hi";
// import { FiPlus } from "react-icons/fi"; // Assuming you want to include a plus icon for creating a new chat

// import ChatDetail from "../components/Chat/ChatDetail";
// import ChatsList from "../components/Chat/ChatsList";
// import { user1 } from "../data/testData"; // Import the user1 data
// import WebSocketService from "../services/WebSocketService";
// const Chats = () => {
//   const [selectedChat, setSelectedChat] = useState(null);
//   const [detailVisible, setDetailVisible] = useState(false);

//   // const webSocketService = WebSocketService();

//   const handleChatSelect = (chat) => {
//     setSelectedChat(chat);
//     setDetailVisible(true);
//   };

//   const handleDetailClose = () => {
//     setDetailVisible(false);
//   };

//   // useEffect(() => {
//   //   // Connect to WebSocket when the component mounts
//   //   const cleanupWebSocket = webSocketService.connectWebSocket();

//   //   // Fetch all chats for testing
//   //   webSocketService.onMessageReceived();

//   //   return () => {
//   //     // Disconnect WebSocket when the component unmounts
//   //     // cleanupWebSocket();
//   //   };
//   // }, [webSocketService]);

//   return (
//     <div className="flex h-full w-full">
//       {/* Pass the chats array of user1 to ChatsList */}
//       <ChatsList chats={user1.chats} onSelect={handleChatSelect} />

//       {/* ChatDetail */}
//       {detailVisible ? (
//         <ChatDetail chat={selectedChat} onClose={handleDetailClose} />
//       ) : (
//         <div className="w-full h-full flex flex-col items-center justify-center border-2 p-4 text-center bg-gradient-to-r from-blue-100 to-purple-200">
//           <HiOutlineChat className="text-5xl mb-4 animate-bounce" />
//           <p className="mb-2 text-lg font-semibold">Start a Conversation!</p>
//           <p className="mb-4">Select a chat on the left or create a new one.</p>
//           <button className="relative flex border-2 items-center bg-white text-blue-500 rounded-full px-4 py-2 transition duration-300 hover:bg-blue-500 hover:text-white focus:outline-none">
//             <FiPlus className="mr-2" />
//             New Chat
//             <span className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-400 opacity-0 rounded-full animate-pulse" />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chats;

//###############################################################################################################################
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { HiOutlineChat } from "react-icons/hi";
import { connect, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import ChatDetail from "../components/Chat/ChatDetail";
import ChatsList from "../components/Chat/ChatsList";
import NewChatModal from "../components/Chat/NewChatModal";
import { addChat } from "../redux/actions/chatActions";
import { updateUser } from "../redux/actions/userActions";
import {
  selectCurrentUser,
  selectOtherUsers,
} from "../redux/selectors/selectors";

const Chats = ({ userChats, addUserChat, updateUserChats }) => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [detailVisible, setDetailVisible] = useState(false);
  const [newChatModalVisible, setNewChatModalVisible] = useState(false);

  // const users = useSelector((state) =>
  //   state.users.users.filter((user) => user.id !== state.app.currentUser.id)
  // );
  const users = useSelector(selectOtherUsers);
  const currentUser = useSelector(selectCurrentUser);
  // const currentUser = useSelector((state) => state.app.currentUser);

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
    setDetailVisible(true);
  };

  const handleDetailClose = () => {
    setDetailVisible(false);
  };

  const handleNewChatClick = () => {
    setNewChatModalVisible(true);
  };

  const handleNewChatClose = () => {
    setNewChatModalVisible(false);
  };

  const handleNewChatSubmit = (selectedUser) => {
    // Create a new chat object (adjust this based on your chat structure)
    const newChat = {
      id: uuidv4(),
      participants: [selectedUser.id, currentUser.id],
      messages: [],
    };

    // Dispatch actions to update the current user's chat list and the selected user's chat list
    addUserChat(newChat); // Add the new chat to the current user's chat list
    updateUserChats(selectedUser.id, newChat.id); // Update the selected user's chat list

    // Close the modal
    handleNewChatClose();
  };

  return (
    <div className="flex h-[84%] w-full my-1">
      {/* Pass the userChats array to ChatsList */}
      <ChatsList chats={userChats} onSelect={handleChatSelect} />

      {/* ChatDetail */}
      {detailVisible ? (
        <ChatDetail chat={selectedChat} onClose={handleDetailClose} />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center border-2 p-4 text-center bg-gradient-to-br from-blue-200 via-red-100 to-purple-300">
          <HiOutlineChat className="text-5xl mb-4 animate-bounce" />
          <p className="mb-2 text-lg font-semibold">Start a Conversation!</p>
          <p className="mb-4">Select a chat on the left or create a new one.</p>
          <button
            onClick={handleNewChatClick}
            className="relative flex border-2 items-center bg-white text-blue-500 rounded-full px-4 py-2 transition duration-300 hover:bg-sky-500 hover:text-white focus:outline-none"
          >
            <FiPlus className="mr-2" />
            New Chat
          </button>
        </div>
      )}

      {/* NewChatModal */}
      {newChatModalVisible && (
        <NewChatModal
          users={users}
          onClose={handleNewChatClose}
          onSubmit={handleNewChatSubmit}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  userChats: state.chats.chats.filter((chat) =>
    chat.participants.includes(state.app.currentUser.id)
  ),
});

const mapDispatchToProps = (dispatch) => ({
  addUserChat: (newChat) => dispatch(addChat(newChat)),
  updateUserChats: (userId, chatId) => dispatch(updateUser(userId, chatId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
