import React, { useState } from "react";
import { FiX, FiCheck } from "react-icons/fi";

const NewChatModal = ({ users, onClose, onSubmit }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleSubmit = () => {
    // You can perform any additional actions here before submitting
    onSubmit(selectedUser);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-96 p-6 rounded-md border-2 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-700 hover:text-red-950 text-lg bg-red-200 hover:bg-red-400 rounded-full p-1"
        >
          <FiX />
        </button>

        <h2 className="text-2xl font-semibold mb-4">New Chat</h2>

        <div className="mb-4">
          <p className="text-sm text-gray-500">
            Select a user to start a new chat:
          </p>
          <ul className="mt-2 space-y-2 h-36 overflow-y-scroll scrollbar-thin">
            {users.map((user) => (
              <li
                key={user.id}
                className={`cursor-pointer p-2 rounded-md ${
                  selectedUser && selectedUser.id === user.id
                    ? "bg-blue-100 text-blue-500"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleUserSelect(user)}
              >
                {user.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            disabled={!selectedUser}
            className={`flex items-center bg-blue-500 text-white px-4 py-2 rounded-full ${
              !selectedUser
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-600"
            }`}
          >
            <FiCheck className="mr-2" />
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewChatModal;
