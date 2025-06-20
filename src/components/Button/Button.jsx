import "./Button.module.scss";
import classNames from "classnames";

const Button = (props) => {
  const { className, children, onClick } = props;

  return (
    <button className={classNames(className, "button")} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
