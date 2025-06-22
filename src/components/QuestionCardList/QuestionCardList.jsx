import classes from "./QuestionCardList.module.scss";
import QuestionCard from "../QuestionCard";
import { memo } from "react";

const QuestionCardList = memo(({ cards }) => {
  return (
    <div className={classes["question-card-list"]}>
      {cards.map((card, index) => {
        return <QuestionCard key={index} card={card} />;
      })}
    </div>
  );
});

export default QuestionCardList;
