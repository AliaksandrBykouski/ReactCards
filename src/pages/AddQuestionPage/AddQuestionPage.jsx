import classes from "./AddQuestionPage.module.scss";
import Button from "../../components/Button";

const AddQuestionPage = () => {
  return (
    <div className={classes["add-question-page"]}>
      <h1 className={classes["add-question-page--title"]}>Add new question</h1>
      <form className={classes["add-question-page--form"]}>
        <div className={classes["add-question-page--form-field"]}>
          <label htmlFor="questionField">Question:</label>
          <textarea
            defaultValue=""
            name="question"
            id="questionField"
            cols="30"
            rows="2"
            required
            placeholder="Please enter your question"
          ></textarea>
        </div>
        <div className={classes["add-question-page--form-field"]}>
          <label htmlFor="answerField">Short Answer:</label>
          <textarea
            defaultValue=""
            name="answer"
            id="answerField"
            cols="30"
            rows="2"
            required
            placeholder="Please enter your answer"
          ></textarea>
        </div>
        <div className={classes["add-question-page--form-field"]}>
          <label htmlFor="descriptionField">Full description:</label>
          <textarea
            defaultValue=""
            name="description"
            id="descriptionField"
            cols="30"
            rows="5"
            required
            placeholder="Please enter your description"
          ></textarea>
        </div>
        <div className={classes["add-question-page--form-field"]}>
          <label htmlFor="resourcesField">Resources:</label>
          <textarea
            defaultValue=""
            name="resources"
            id="resourcesField"
            cols="30"
            rows="2"
            required
            placeholder="Please enter  resources separated by commas"
          ></textarea>
        </div>
        <div className={classes["add-question-page--form-field"]}>
          <label htmlFor="levelField">Level:</label>
          <select name="level" id="levelField" required>
            <option value="" disabled>
              Please select level
            </option>
            <hr />
            <option value="1">1 - Beginner</option>
            <option value="2">2 - Intermediate</option>
            <option value="3">3 - Advanced</option>
          </select>
        </div>
        <label htmlFor="clearFormField" className={classes["add-question-page--clear-form"]}>
          <input
            className={classes["add-question-page--checkbox"]}
            type="checkbox"
            name="clearForm"
            id="clearFormField"
            required
            defaultValue={true}
          />
          <span>Clear form after submitting?</span>
        </label>
        <Button type="submit">Add question</Button>
      </form>
    </div>
  );
};

export default AddQuestionPage;
