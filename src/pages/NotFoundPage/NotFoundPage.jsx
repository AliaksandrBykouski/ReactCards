import NFP from "../../assets/Happy Hour Beeroclock GIF by ROSSADV.gif";
import classes from "./NotFoundPage.module.scss";
const NotFoundPage = () => {
  return (
    <div className={classes["not-found-page"]}>
      <h1>Page Not Found</h1>
      <img src={NFP} alt="Not Found Page" />
    </div>
  );
};

export default NotFoundPage;
