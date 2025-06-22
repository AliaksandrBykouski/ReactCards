import classes from "./HomePage.module.scss";
import classNames from "classnames";
import { API_URL } from "../../constants";
import { useState, useEffect } from "react";
import QuestionCardList from "../../components/QuestionCardList";
import Loader from "../../components/Loader/index.js";

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
      <Loader />
      <QuestionCardList cards={questions} />
    </div>
  );
};

export default HomePage;
