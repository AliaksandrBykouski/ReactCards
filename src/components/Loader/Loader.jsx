import classes from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={classes.backdrop}>
      <span className={classes.loader}></span>
    </div>
  );
};

export const SmallLoader = () => {
  return <span className={classes.smallLoader}></span>;
};

export default Loader;
