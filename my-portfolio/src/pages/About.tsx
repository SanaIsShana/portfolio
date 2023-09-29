import { motion } from "framer-motion";

export const About = () => {
  return (
    <>
      <div className="flex">About...</div>
      <motion.div
        className="fixed top-0 left-0 w-full h-screen origin-bottom bg-olive"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="fixed top-0 left-0 w-full h-screen origin-top bg-olive"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};
