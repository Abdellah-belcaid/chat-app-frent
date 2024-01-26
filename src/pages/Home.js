import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaComments, FaUsers } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      staggerChildren: 1.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      type: "spring",
      stiffness: 120,
    },
  },
};

function Home() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-b from-blue-200 to-purple-300 shadow-xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.header
        className="text-black text-center mb-8"
        variants={itemVariants}
      >
        <h1 className="text-5xl font-extrabold mb-2">Welcome to ChatApp!</h1>
        <p className="text-lg">Connect with friends and start chatting.</p>
      </motion.header>

      {/* Features Section */}
      <motion.div
        className="flex flex-col md:flex-row justify-around w-full mb-8"
        variants={itemVariants}
      >
        {/* Chat Feature */}
        <motion.div
          className="text-center flex flex-col mb-4 md:mb-0  mx-auto md:mx-0"
          variants={itemVariants}
        >
          <FaComments className="text-4xl md:text-6xl text-blue-500 mb-2" />
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            Real-time Chat
          </h2>
          <p className="text-gray-800">
            Engage in real-time conversations with friends.
          </p>
        </motion.div>

        {/* Friends Feature */}
        <motion.div
          className="text-center mx-auto md:mx-0"
          variants={itemVariants}
        >
          <FaUsers className="text-4xl md:text-6xl text-green-500 mb-2" />
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            Connect with Friends
          </h2>
          <p className="text-gray-800">
            Build connections and stay connected with friends.
          </p>
        </motion.div>
      </motion.div>

      {/* Call to Action Section */}
      <motion.section
        className="text-black text-center mb-8"
        variants={itemVariants}
      >
        <h2 className="text-4xl md:text-4xl font-bold mb-2">
          Ready to get started?
        </h2>
        <p className="text-lg mb-4">
          Join ChatApp and connect with your friends now!
        </p>

        {/* Get Started Button */}
        <Link
          to="/register"
          className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Get Started
        </Link>
      </motion.section>

      {/* Footer */}
      <motion.footer className="text-black text-center" variants={itemVariants}>
        <p>&copy; {new Date().getFullYear()} ChatApp. All rights reserved.</p>
      </motion.footer>
    </motion.div>
  );
}

export default Home;
