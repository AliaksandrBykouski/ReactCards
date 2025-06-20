import classes from "./Button.module.scss";
import classNames from "classnames";

const Button = (props) => {
  const { children, onClick, isDisabled, isActive } = props;

  return (
    <button
      className={classNames(classes.button, {
        [classes["button-active"]]: isActive,
      })}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
