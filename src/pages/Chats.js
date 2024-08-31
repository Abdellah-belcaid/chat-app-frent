import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { HiOutlineChat } from "react-icons/hi";
import { connect, useDispatch, useSelector } from "react-redux";
import { getMessagesByUserId } from "src/redux/actions/messageActions";
import { v4 as uuidv4 } from "uuid";
import ChatDetail from "../components/chat/ChatDetail";
import ChatsList from "../components/chat/ChatsList";
import NewChatModal from "../components/chat/NewChatModal";
import { createNewChat, fetchChats } from "../redux/actions/chatActions";
import { fetchAllUsers } from "../redux/actions/userActions";
import { selectCurrentUser } from "../redux/selectors/selectors";

const Chats = ({ userChats }) => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [detailVisible, setDetailVisible] = useState(false);
  const [newChatModalVisible, setNewChatModalVisible] = useState(false);
  const dispatch = useDispatch();

  // const users = useSelector(selectOtherUsers);
  const currentUser = useSelector(selectCurrentUser);

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

    // Dispatch the createNewChat action
    dispatch(createNewChat(newChat)).then(() => {
      // Close the modal
      handleNewChatClose();
    });
  };

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchChats(currentUser.id));
      dispatch(getMessagesByUserId(currentUser.id)); // Fetch messages for the current user
    }
    dispatch(fetchAllUsers());
  }, [dispatch, currentUser]);

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
          // users={users}
          onClose={handleNewChatClose}
          onSubmit={handleNewChatSubmit}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  userChats: state.chats.chats.filter((chat) =>
    chat.participants.includes(state.users.currentUser.id)
  ),
});

export default connect(mapStateToProps)(Chats);
