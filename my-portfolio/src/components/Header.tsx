import { useContext } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { ThemeContext } from "../utils/theme-context";

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === "dark";
    setTheme(isCurrentDark ? "light" : "dark");
    localStorage.setItem("theme", isCurrentDark ? "light" : "dark");
  };

  return (
    <div
      className={`h-10 w-full flex flex-row justify-end space-x-3 p-3 sticky ${
        theme === "dark" ? "text-dustyPink" : "text-black"
      }`}
    >
      {theme === "light" ? (
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
          <BsFillMoonFill
            className="cursor-pointer"
            onClick={handleThemeChange}
          />
        </motion.div>
      ) : (
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
          <BsFillSunFill
            className="cursor-pointer"
            onClick={handleThemeChange}
          />
        </motion.div>
      )}
    </div>
  );
};
