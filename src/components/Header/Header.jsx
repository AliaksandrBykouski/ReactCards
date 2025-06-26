import ReactLogo from "../../assets/react.svg";
import classes from "./Header.module.scss";
import Button from "../Button/index.jsx";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";

const Header = () => {
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useAuth();

  const loginHandler = () => {
    setIsAuth(!isAuth);
  };
  return (
    <header className={classes.header}>
      <div className={classes["header-logo"]} onClick={() => navigate("/")}>
        <img src={ReactLogo} alt="react logo" />
        <span>ReactCards</span>
      </div>
      <div className={classes["header-btns"]}>
        <Button onClick={() => navigate("/addquestion")}>Add</Button>
        <Button onClick={loginHandler}>{isAuth ? "Logout" : "Login"}</Button>
      </div>
    </header>
  );
};

export default Header;
