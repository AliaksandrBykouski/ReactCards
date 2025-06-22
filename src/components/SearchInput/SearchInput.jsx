import classes from "./SearchInput.module.scss";
import { useId } from "react";
import { SearchIcon } from "../icons.jsx";

const SearchInput = ({ value, onChange, placeholder }) => {
  const inputId = useId();
  return (
    <div className={classes["search-input"]}>
      <label htmlFor={inputId}>
        <SearchIcon className={classes["search-input--icon"]} />
      </label>
      <input
        type="text"
        id={inputId}
        className={classes["search-input--input"]}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
