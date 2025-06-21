import classes from "./Footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes["footer"]}>
      React Questions Card Application | {currentYear} <br />
      by Aliaksandr Bykouski
    </footer>
  );
};

export default Footer;
