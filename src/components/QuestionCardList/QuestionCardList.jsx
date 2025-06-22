import classes from "./QuestionCardList.module.scss";
import QuestionCard from "../QuestionCard";

const QuestionCardList = ({ cards }) => {
  return (
    <div className={classes["question-card-list"]}>
      {cards.map((card, index) => {
        return <QuestionCard key={index} card={card} />;
      })}
    </div>
  );
};

export default QuestionCardList;
