import classes from "./HomePage.module.scss";
import { API_URL } from "../../constants";
import { useState, useEffect } from "react";
import QuestionCardList from "../../components/QuestionCardList";
import Loader from "../../components/Loader/index.js";
import useFetch from "../../hooks/useFetch";

const HomePage = () => {
  const [questions, setQuestions, error] = useState([]);

  const [getQuestions, isLoading] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}/${url}`);
    const questions = await response.json();
    setQuestions(questions);
    return questions;
  });

  useEffect(() => {
    getQuestions("react");
  }, []);

  return (
    <div className={classes["home-page"]}>
      {isLoading && <Loader />}
      {error && <div>{error}</div>}
      <QuestionCardList cards={questions} />
    </div>
  );
};

export default HomePage;
