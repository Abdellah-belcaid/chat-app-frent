import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { BiMessageSquareAdd, BiTrash } from "react-icons/bi";
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoImage } from "react-icons/io5";
import { MessageType } from "src/data/models";

const MessageInput = ({ onSend }) => {
  const [newMessage, setNewMessage] = useState({
    messageType: MessageType.TEXT,
    content: "",
  });
  const [file, setFile] = useState(null);
  const [isDragged, setIsDragged] = useState(false);
  const isTypeFile = newMessage.messageType !== MessageType.TEXT;

  const handleInputChange = (e) => {
    setNewMessage({
      ...newMessage,
      messageType: MessageType.TEXT,
      content: e.target.value,
    });
  };

  const handleFileChanging = (e) => {
    e.preventDefault();
    // data:image/png;base64
    console.log(e.target.files[0]);
    setNewMessage({
      ...newMessage,
      messageType: e.target.files[0].type.split("/")[0],
      content: e.target.value,
    });

    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSendClick = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    if (newMessage.content.trim() !== "") {
      onSend(newMessage);
      resetForm(); // Clear input after sending
    }
  };
  const resetForm = () => {
    setFile(null);
    setNewMessage({ messageType: MessageType.TEXT, content: "" }); // Clear input after sending
  };

  // to test :

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragged(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragged(false);
    setNewMessage({
      ...newMessage,
      messageType: e.dataTransfer.files[0].type.split("/")[0],
      content: e.target.value,
    });
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
  };

  return (
    <div className="h-16 border-t-2 w-full">
      <form onSubmit={handleSendClick}>
        <label htmlFor="chat" className="sr-only">
          Your message
        </label>
        <div
          onDragOver={handleDragOver}
          onDragExit={() => setIsDragged(false)}
          onDragEnd={() => setIsDragged(false)}
          onDrop={handleDrop}
          className="flex items-center rounded-lg bg-gray-50 px-3 py-2 dark:bg-gray-700"
        >
          {isDragged ? (
            <div className="w-full flex flex-col items-center px-4 py-2 bg-white text-sky-600 border-blue-400 border-2 border-dashed rounded-md shadow-md cursor-pointer hover:bg-blue-100">
              <FaCloudUploadAlt className="w-6 h-6 animate-bounce" />
              <span className="mt-2 text-xs font-semibold text-center leading-normal">
                Drop the file
              </span>
            </div>
          ) : (
            <>
              <label
                htmlFor="inputFile"
                className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <input
                  id="inputFile"
                  type="file"
                  className="hidden"
                  onChange={handleFileChanging}
                />
                <BiMessageSquareAdd size={24} />
              </label>
              <label
                htmlFor="inputImage"
                className="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <input
                  id="inputImage"
                  accept="png jpg svg"
                  type="file"
                  className="hidden"
                  onChange={handleFileChanging}
                />
                <IoImage size={24} />
              </label>
              {!file ? (
                <input
                  type="text"
                  id="chat"
                  value={newMessage.content}
                  onChange={handleInputChange}
                  className="mx-4 block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Your message..."
                />
              ) : (
                <div className="flex items-center justify-between mx-4 w-full py-2 px-3 rounded-lg border-2  bg-blue-50 text-blue-800 dark:bg-blue-600 dark:text-white">
                  <span>File uploaded : {file?.name}</span>
                  <button
                    className="text-red-500 hover:text-red-700 dark:text-red-300 dark:hover:text-red-100"
                    onClick={resetForm}
                  >
                    <BiTrash />
                  </button>
                </div>
              )}

              <button
                type="submit"
                className="inline-flex cursor-pointer justify-center rounded-full p-2 text-blue-600 hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
              >
                <AiOutlineSend size={24} />
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
