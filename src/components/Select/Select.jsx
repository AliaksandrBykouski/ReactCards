import classes from "./Select.module.scss";

const Select = (props) => {
  const { value, onChange, options, defaultOption, disabled } = props;
  return (
    <select className={classes.select} value={value} onChange={onChange}>
      <option value="" disabled={disabled}>
        {defaultOption}
      </option>
      <hr />
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Select;
