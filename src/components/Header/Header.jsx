import ReactLogo from "../../assets/react.svg";
import classes from "./Header.module.scss";
import Button from "../Button/index.jsx";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={classes.header}>
      <div className={classes["header-logo"]} onClick={() => navigate("/")}>
        <img src={ReactLogo} alt="react logo" />
        <span>ReactCards</span>
      </div>
      <div className={classes["header-btns"]}>
        <Button onClick={() => navigate("/addquestion")}>Add</Button>
        <Button>Log in</Button>
      </div>
    </header>
  );
};

export default Header;
