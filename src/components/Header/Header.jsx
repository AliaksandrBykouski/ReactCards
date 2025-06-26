import ReactLogo from "../../assets/react.svg";
import classes from "./Header.module.scss";
import Button from "../Button/index.jsx";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";
import { AUTH_STORAGE } from "../../constants/index.js";

const Header = () => {
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useAuth();

  const loginHandler = () => {
    localStorage.setItem(AUTH_STORAGE, !isAuth);
    setIsAuth(!isAuth);
  };
  return (
    <header className={classes.header}>
      <div className={classes["header-logo"]} onClick={() => navigate("/")}>
        <img src={ReactLogo} alt="react logo" />
        <span>ReactCards</span>
      </div>

      <div className={classes["header-btns"]}>
        {isAuth && <Button onClick={() => navigate("/addquestion")}>Add</Button>}
        <Button onClick={loginHandler} isActive={!isAuth}>
          {isAuth ? "Logout" : "Login"}
        </Button>
      </div>
    </header>
  );
};

export default Header;
