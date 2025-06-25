import classes from "./QuestionForm.module.scss";
import Button from "../Button/index.jsx";

const QuestionForm = ({ formState, formAction, isPending, submitBtnText }) => {
  return (
    <form className={classes["add-question-page--form"]} action={formAction}>
      <input type="text" hidden defaultValue={formState.id} name="questionId" />
      <div className={classes["add-question-page--form-field"]}>
        <label htmlFor="questionField">Question:</label>
        <textarea
          defaultValue={formState.question}
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
          defaultValue={formState.answer}
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
          defaultValue={formState.description}
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
          defaultValue={formState.resources}
          name="resources"
          id="resourcesField"
          cols="30"
          rows="3"
          placeholder="Please enter  resources separated by commas"
        ></textarea>
      </div>
      <div className={classes["add-question-page--form-field"]}>
        <label htmlFor="levelField">Level:</label>
        <select name="level" id="levelField" defaultValue={formState.level}>
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
          defaultChecked={formState.clearForm}
        />
        <span>Clear form after submitting?</span>
      </label>
      <Button type="submit" isDisabled={isPending}>
        {submitBtnText}
      </Button>
    </form>
  );
};

export default QuestionForm;
