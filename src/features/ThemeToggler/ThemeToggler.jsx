import classes from "./ThemeToggler.module.scss";
import { useTheme } from "../../hooks/useTheme";
import { THEME_STORAGE } from "../../constants/index.js";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const onChangeHandler = (e) => {
    const isChecked = e.target.checked === true;
    const themeUpdate = isChecked ? "dark" : "light";
    setTheme(themeUpdate);
    isChecked
      ? document.body.classList.add("darkLayout")
      : document.body.classList.remove("darkLayout");
    localStorage.setItem(THEME_STORAGE, themeUpdate);
  };
  return (
    <div className={classes["theme-toggler"]}>
      <label className={classes.switch}>
        <input type="checkbox" onChange={onChangeHandler} checked={theme === "dark"} />
        <span className={classes.slider}></span>
      </label>
    </div>
  );
};

export default ThemeToggler;
