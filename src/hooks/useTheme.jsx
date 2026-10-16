import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../features/themeSlice";

const useTheme = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme));
  };

  return {
    theme,
    toggleTheme,
  };
};

export default useTheme;
