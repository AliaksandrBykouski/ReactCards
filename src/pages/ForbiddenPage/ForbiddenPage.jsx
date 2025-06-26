import classes from "./ForbiddenPage.module.scss";
import NFP from "../../assets/Happy Hour Beeroclock GIF by ROSSADV.gif";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";
import { useEffect } from "react";

const ForbiddenPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { isAuth } = useAuth();

  useEffect(() => {
    isAuth && navigate(location.state?.from || "/", { replace: true });
  }, [isAuth, location.state?.from, navigate]);
  return (
    <div className={classes["forbidden-page"]}>
      <h2 className={classes["forbidden-page--title"]}>
        Page is Forbidden 🤪. 🍻It's time to drink a beer.🍻
      </h2>
      <img src={NFP} alt="beer" />
    </div>
  );
};

export default ForbiddenPage;
