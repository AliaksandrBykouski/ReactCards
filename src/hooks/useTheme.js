import { useContext } from "react";
import { ThemeContext } from "../theme/index.js";

export const useTheme = () => {
  return useContext(ThemeContext);
};
