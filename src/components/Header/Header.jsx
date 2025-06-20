import ReactLogo from "../../assets/react.svg";
import classes from "./Header.module.scss";
import Button from "../Button/index.jsx";

const Header = () => {
  return (
    <header className={classes.header}>
      <a href="/" className={classes["header-logo"]}>
        <img src={ReactLogo} alt="react logo" />
        <span>ReactCards</span>
      </a>
      <div className={classes["header-btns"]}>
        <Button isDisabled>Add</Button>
        <Button isActive>Log in</Button>
      </div>
    </header>
  );
};

export default Header;
