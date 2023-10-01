import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../utils/theme-context";

export const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`absolute bottom-10 w-full flex flex-row justify-center space-x-2 ${
        theme === "dark" ? "text-dustyPink" : "text-black"
      }`}
    >
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
        <FaLinkedin size={30} className="cursor-pointer" />
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
        <FaGithubSquare size={30} className="cursor-pointer" />
      </motion.div>
    </div>
  );
};
