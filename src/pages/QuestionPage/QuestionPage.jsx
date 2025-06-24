import classes from "./QuestionPage.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import Badge from "../../components/Badge";
import Button from "../../components/Button";
import { useEffect, useId, useState } from "react";
import useFetch from "../../hooks/useFetch.js";
import { API_URL } from "../../constants";
import Loader from "../../components/Loader";
import { SmallLoader } from "../../components/Loader";

const QuestionPage = () => {
  const navigate = useNavigate();
  const checkboxId = useId();
  const params = useParams();

  const [card, setCard] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const levelVariant = () =>
    card.level === 1 ? "primary" : card.level === 2 ? "warning" : "alert";
  const completedVariant = () => (card.completed ? "success" : "primary");

  const [fetchCard, isCardLoading] = useFetch(async () => {
    const response = await fetch(`${API_URL}/react/${params.id}`);
    const data = await response.json();

    setCard(data);
  });

  const [updateCard, isCardUpdating] = useFetch(async (isChecked) => {
    const response = await fetch(`${API_URL}/react/${card.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: isChecked,
      }),
    });
    const data = await response.json();

    setCard(data);
  });

  useEffect(() => {
    fetchCard();
  }, []);

  useEffect(() => {
    card !== null && setIsChecked(card.completed);
  }, [card]);

  const onCheckboxChangeHandler = () => {
    setIsChecked(!isChecked);
    updateCard(!isChecked);
  };

  return (
    <>
      {isCardLoading && <Loader />}
      {card !== null && (
        <div className={classes["question-page"]}>
          <div className={classes["question-page-labels"]}>
            <Badge variant={levelVariant()}>Level: {card.level}</Badge>
            <Badge variant={completedVariant()}>
              {" "}
              {card.completed ? "Completed" : "Not completed"}
            </Badge>
            {card.editDate && (
              <p className={classes["question-page--edit-date"]}> Edited: {card.editDate}</p>
            )}
          </div>
          <h3 className={classes["question-page-title"]}>{card.question}</h3>

          <p className={classes["question-page--description"]}>{card.description}</p>

          <div className={classes["question-page-answers"]}>
            <span>short answer: </span>
            <p className={classes["question-page-answer"]}>{card.answer}</p>
          </div>

          <ul className={classes["question-page--links"]}>
            Resources:
            {card.resources.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.trim()} target="_blank" rel="noreferrer">
                    {link.trim()}
                  </a>
                </li>
              );
            })}
          </ul>

          <label htmlFor={checkboxId} className={classes["question-page--checkbox-label"]}>
            <input
              type="checkbox"
              className={classes["question-page--checkbox"]}
              id={checkboxId}
              checked={isChecked}
              onChange={onCheckboxChangeHandler}
              disabled={isCardUpdating}
            />
            <span>mark question as completed</span>

            {isCardUpdating && <SmallLoader />}
          </label>

          <Button
            className={classes["question-page-btn"]}
            onClick={() => navigate(`/editquestion/${card.id}`)}
            isDisabled={isCardUpdating}
          >
            Edit question
          </Button>
          <Button
            className={classes["question-page-btn"]}
            onClick={() => navigate("/")}
            isDisabled={isCardUpdating}
          >
            Back
          </Button>
        </div>
      )}
    </>
  );
};

export default QuestionPage;
