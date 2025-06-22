import classes from "./Badge.module.scss";
import classNames from "classnames";

const Badge = ({ variant, children }) => {
  let cls;
  if (variant === "primary") {
    cls = classes.primary;
  }
  if (variant === "success") {
    cls = classes.success;
  }
  if (variant === "warning") {
    cls = classes.warning;
  }
  if (variant === "alert") {
    cls = classes.alert;
  }

  return <div className={classNames(classes.badge, cls)}>{children}</div>;
};

export default Badge;
