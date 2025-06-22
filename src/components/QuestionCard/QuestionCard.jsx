import classes from "./QuestionCard.module.scss";
import Button from "../Button/index.jsx";
import { useNavigate } from "react-router-dom";
import Badge from "../Badge/index.js";

const QuestionCard = ({ card }) => {
  const { level, completed, question, answer, id } = card;
  const navigate = useNavigate();

  const levelVariant = level === 1 ? "primary" : level === 2 ? "warning" : "alert";
  const completedVariant = completed ? "success" : "primary";
  return (
    <div className={classes["question-card"]}>
      <div className={classes["question-card-labels"]}>
        <Badge variant={levelVariant}>Level: {level}</Badge>
        <Badge variant={completedVariant}> {completed ? "Completed" : "Not completed"}</Badge>
      </div>
      <h3 className={classes["question-card-title"]}>{question}</h3>

      <div className={classes["question-card-answers"]}>
        <span>short answer: </span>
        <p className={classes["question-card-answer"]}>{answer}</p>
      </div>

      <Button className={classes["question-card-btn"]} onClick={() => navigate(`/question/${id}`)}>
        View
      </Button>
    </div>
  );
};

export default QuestionCard;
