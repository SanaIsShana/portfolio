import { useContext } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
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
        theme === "dark" ? "dark:text-dustyPink" : "text-black"
      }`}
    >
      <BsFillMoonFill className="cursor-pointer" onClick={handleThemeChange} />
      <i>|</i>
      <BsFillSunFill className="cursor-pointer" onClick={handleThemeChange} />
    </div>
  );
};
