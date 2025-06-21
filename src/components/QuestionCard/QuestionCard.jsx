import classes from "./QuestionCard.module.scss";
import Button from "../Button/index.jsx";

const QuestionCard = () => {
  return (
    <div className={classes["question-card"]}>
      <div className={classes["question-card-labels"]}>
        <div>Level: 1</div>
        <div>Not Completed</div>
      </div>
      <h3 className={classes["question-card-title"]}>Что такое React</h3>

      <div className={classes["question-card-answers"]}>
        <span>short answer: </span>
        <p className={classes["question-card-answer"]}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem in mollitia sapiente
          unde!
        </p>
      </div>

      <Button className={classes["question-card-btn"]} onClick={() => {}}>
        View
      </Button>
    </div>
  );
};

export default QuestionCard;
