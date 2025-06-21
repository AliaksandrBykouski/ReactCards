import classes from "./QuestionCard.module.scss";
import Button from "../Button/index.jsx";
import { useNavigate } from "react-router-dom";

const QuestionCard = ({ card }) => {
  const { level, completed, question, answer, id } = card;
  const navigate = useNavigate();
  return (
    <div className={classes["question-card"]}>
      <div className={classes["question-card-labels"]}>
        <div>Level: {level}</div>
        <div> {completed ? "Completed" : "Not completed"}</div>
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
