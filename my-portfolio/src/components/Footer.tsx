import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <div className="sticky bottom-0 w-full flex flex-row justify-center space-x-2">
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
        <FaLinkedin size={30} className="cursor-pointer" />
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
        <FaGithubSquare size={30} className="cursor-pointer" />
      </motion.div>
    </div>
  );
};
