import classes from "./HomePage.module.scss";
import { API_URL } from "../../constants";
import { useState, useEffect } from "react";
import QuestionCardList from "../../components/QuestionCardList";
import Loader from "../../components/Loader/index.js";
import useFetch from "../../hooks/useFetch";
import SearchInput from "../../components/SearchInput/index.js";

const HomePage = () => {
  const [questions, setQuestions, error] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [getQuestions, isLoading] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}/${url}`);
    const questions = await response.json();
    setQuestions(questions);
    return questions;
  });

  useEffect(() => {
    getQuestions("react").then();
  }, []);

  const onSearchChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className={classes["home-page"]}>
      <div className={classes["home-page--controls"]}>
        <SearchInput value={searchValue} onChange={onSearchChangeHandler} placeholder="Search" />
      </div>

      {isLoading && <Loader />}
      {error && <div>{error}</div>}
      <QuestionCardList cards={questions} />
    </div>
  );
};

export default HomePage;
