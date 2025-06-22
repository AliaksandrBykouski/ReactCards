import classes from "./Select.module.scss";

const Select = (props) => {
  const { value, onChange } = props;
  return (
    <select className={classes.select} value={value} onChange={onChange}>
      <option value="">sort by</option>
      <hr />
      <option value="_sort=level">level ASC</option>
      <option value="_sort=-level">level DESC</option>
      <option value="_sort=completed">completed ASC</option>
      <option value="_sort=-completed">completed DESC</option>
    </select>
  );
};

export default Select;
