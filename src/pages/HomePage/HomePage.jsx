import classes from "./HomePage.module.scss";
import { API_URL } from "../../constants";
import { useState, useEffect, useMemo } from "react";
import QuestionCardList from "../../components/QuestionCardList";
import Loader from "../../components/Loader/index.js";
import useFetch from "../../hooks/useFetch";
import SearchInput from "../../components/SearchInput/index.js";
import Select from "../../components/Select/index.js";

const DEFAULT_PER_PAGE = 10;
const HomePage = () => {
  const [searchParams, setSearchParams] = useState(`?_page=1&_per_page=${DEFAULT_PER_PAGE}`);
  const [questions, setQuestions, error] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [sortSelectValue, setSortSelectValue] = useState("");

  const [getQuestions, isLoading] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}/${url}`);
    const questions = await response.json();
    setQuestions(questions);
    return questions;
  });

  const cardsFilter = useMemo(() => {
    if (questions?.data) {
      if (searchValue.trim()) {
        return questions.data.filter((card) =>
          card.question.toLowerCase().includes(searchValue.trim().toLowerCase()),
        );
      } else {
        return questions.data;
      }
    }
    return [];
  }, [searchValue, questions]);

  useEffect(() => {
    getQuestions(`react${searchParams}`);
  }, [searchParams]);

  const onSearchChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const onSortSelectChangeHandler = (e) => {
    setSortSelectValue(e.target.value);
    setSearchParams(`?_page=1&_per_page=${DEFAULT_PER_PAGE}&${e.target.value}`);
  };
  return (
    <div className={classes["home-page"]}>
      <div className={classes["home-page--controls"]}>
        <SearchInput value={searchValue} onChange={onSearchChangeHandler} placeholder="Search" />
        <Select value={sortSelectValue} onChange={onSortSelectChangeHandler} />
      </div>

      {isLoading && <Loader />}
      {error && <div>{error}</div>}
      {cardsFilter.length === 0 && (
        <p className={classes["no-cards"]}>No cards found for: "{searchValue}"</p>
      )}

      <QuestionCardList cards={cardsFilter} />
    </div>
  );
};

export default HomePage;
