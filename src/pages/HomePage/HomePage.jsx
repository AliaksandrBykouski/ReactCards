import classes from "./HomePage.module.scss";
import classNames from "classnames";
import QuestionCard from "../../components/QuestionCard/index.jsx";

const HomePage = () => {
  return (
    <div className={classNames(classes["home-page"])}>
      <QuestionCard />
    </div>
  );
};

export default HomePage;
