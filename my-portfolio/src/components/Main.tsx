import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";

export const Main = () => {
  return (
    <div className="w-full h-full p-5 flex-auto">
      <div className="p-4 m-5 flex flex-row justify-between bg-slate-50 border-4 border-double rounded-3xl divide-olive h-full">
        <div className="flex flex-col font-h1 text-8xl">
          <h4>Hi, I'm Sana.</h4>
        </div>
        <div className="flex flex-col">
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaLinkedin size={30} className="cursor-pointer" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaGithubSquare size={30} className="cursor-pointer" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
