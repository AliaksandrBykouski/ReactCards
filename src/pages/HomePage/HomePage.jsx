import classes from "./HomePage.module.scss";
import classNames from "classnames";
import QuestionCard from "../../components/QuestionCard";
import { API_URL } from "../../constants";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [questions, setQuestions] = useState([]);
  const getQuestions = async () => {
    try {
      const response = await fetch(API_URL);
      const questions = await response.json();
      setQuestions(questions);

      console.log(questions, "questions");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div className={classNames(classes["home-page"])}>
      {questions.map((card, index) => {
        return <QuestionCard key={index} card={card} />;
      })}
    </div>
  );
};

export default HomePage;
