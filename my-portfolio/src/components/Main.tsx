import { motion, Variants } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../public/css/mask.css";
import { PageTransition } from "../utils/PageTransition";
import { ThemeContext } from "../utils/theme-context";

export const Main = () => {
  const { theme } = useContext(ThemeContext);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  const variants: Variants = {
    default: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#a3b899",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div
      className={`static ${
        theme === "dark" ? "dark:text-dustyPink" : "text-black"
      }`}
    >
      <div className="absolute inline-block top-24 left-4">
        <div className="flex flex-col font-check text-6xl sm:text-8xl align-start">
          <p
            className="font-check"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Sana Barilade
          </p>
        </div>
      </div>
      <div className="absolute inline-block bottom-32 right-4">
        <div className="flex flex-col font-check text-4xl sm:text-6xl align-end">
          <button onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <Link to="/About">
              About
              <motion.div />
            </Link>
          </button>
          <button onMouseEnter={textEnter} onMouseLeave={textLeave}>
            Projects
          </button>
          <button onMouseEnter={textEnter} onMouseLeave={textLeave}>
            Contact
          </button>
        </div>
      </div>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <PageTransition />
    </div>
  );
};
