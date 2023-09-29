import { motion } from "framer-motion";
import { useCallback } from "react";
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <>
      <div className="w-full h-auto p-5 flex-auto">
        <div className="flex flex-col font-h1 text-8xl">
          <h4>Hi, I'm Sana.</h4>
        </div>
        <div className="flex flex-row justify-end">
          <div className="flex flex-col font-h1 text-6xl align-end">
            <button>
              <Link to="/About">
                <motion.div>About</motion.div>
              </Link>
            </button>
            <button>Projects</button>
            <button>Contact</button>
          </div>
        </div>
      </div>
      <motion.div
        className="fixed top-0 left-0 w-full h-screen origin-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="fixed top-0 left-0 w-full h-screen origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};
