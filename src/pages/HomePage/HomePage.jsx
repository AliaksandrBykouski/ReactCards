import classes from "./HomePage.module.scss";
import { API_URL } from "../../constants";
import { useState, useEffect, useMemo, useRef } from "react";
import QuestionCardList from "../../components/QuestionCardList";
import Loader from "../../components/Loader";
import useFetch from "../../hooks/useFetch";
import SearchInput from "../../components/SearchInput";
import Select from "../../components/Select";
import Button from "../../components/Button";

const DEFAULT_PER_PAGE = 10;
const HomePage = () => {
  const [searchParams, setSearchParams] = useState(`?_page=1&_per_page=${DEFAULT_PER_PAGE}`);
  const [questions, setQuestions] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [sortSelectValue, setSortSelectValue] = useState("");
  const [countSelectValue, setCountSelectValue] = useState("");

  const controlsContainerRef = useRef();

  const getActivePageNumber = () => {
    if (!questions) return 1;
    if (questions.next === null) return questions.last;
    return questions.next - 1;
  };

  const [getQuestions, isLoading, error] = useFetch(async (url) => {
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

  const pagination = useMemo(() => {
    const totalCardsCount = questions?.pages || 0;
    return Array(totalCardsCount)
      .fill(0)
      .map((_, index) => index + 1);
  }, [questions]);

  useEffect(() => {
    getQuestions(`react${searchParams}`);
  }, [searchParams]);

  const onSearchChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const onSortSelectChangeHandler = (e) => {
    setSortSelectValue(e.target.value);
    setSearchParams(`?_page=1&_per_page=${countSelectValue}&${e.target.value}`);
  };

  const paginationHandler = (e) => {
    if (e.target.tagName === "BUTTON") {
      setSearchParams(
        `?_page=${e.target.textContent}&_per_page=${countSelectValue}&${sortSelectValue}`,
      );
      controlsContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onCountSelectChangeHandler = (e) => {
    setCountSelectValue(e.target.value);
    setSearchParams(`?_page=1&_per_page=${e.target.value}&${sortSelectValue}`);
  };

  return (
    <div className={classes["home-page"]}>
      <div className={classes["home-page--controls"]} ref={controlsContainerRef}>
        <SearchInput value={searchValue} onChange={onSearchChangeHandler} placeholder="Search" />
        <Select
          value={sortSelectValue}
          onChange={onSortSelectChangeHandler}
          defaultOption="Sort by"
          options={[
            { value: "_sort=level", label: "level ASC" },
            { value: "_sort=-level", label: "level DESC" },
            { value: "_sort=completed", label: "completed ASC" },
            { value: "_sort=-completed", label: "completed DESC" },
          ]}
        />
        <Select
          disabled
          value={countSelectValue}
          onChange={onCountSelectChangeHandler}
          defaultOption="count"
          options={[
            { value: "10", label: "10" },
            { value: "20", label: "20" },
            { value: "30", label: "30" },
            { value: "40", label: "40" },
            { value: "50", label: "50" },
            { value: "100", label: "100" },
          ]}
        />
      </div>

      {isLoading && <Loader />}
      {error && <div>{error}</div>}

      <QuestionCardList cards={cardsFilter} />

      {cardsFilter.length === 0 ? (
        <p className={classes["no-cards"]}>No cards found for: "{searchValue}"</p>
      ) : (
        pagination.length > 1 && (
          <div className={classes["home-page--pagination"]} onClick={paginationHandler}>
            {pagination.map((value) => {
              return (
                <Button key={value} isActive={value === getActivePageNumber()}>
                  {value}
                </Button>
              );
            })}
          </div>
        )
      )}
    </div>
  );
};

export default HomePage;
