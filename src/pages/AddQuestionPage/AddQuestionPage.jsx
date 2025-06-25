import classes from "./AddQuestionPage.module.scss";
import Button from "../../components/Button";
import { useActionState } from "react";
import { toast } from "react-toastify";
import delayFn from "../../helpers/delayFn.js";
import { API_URL } from "../../constants/index.js";
import Loader from "../../components/Loader/index.js";

const createCardQuestion = async (_prevState, formData) => {
  try {
    await delayFn();
    const resources = formData.get("resources");
    const isClearForm = formData.get("clearForm");

    const response = await fetch(`${API_URL}/react`, {
      method: "POST",
      body: JSON.stringify({
        question: formData.get("question"),
        answer: formData.get("answer"),
        description: formData.get("description"),
        resources: resources.length ? resources.split(",") : [],
        level: Number(formData.get("level")),
        completed: false,
        editDate: undefined,
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const questions = response.json();
    toast.success("Question added successfully");

    return isClearForm ? {} : questions;
  } catch (error) {
    toast.error(error.message);
    return {};
  }
};

const AddQuestionPage = () => {
  const [formState, formAction, isPending] = useActionState(createCardQuestion, {
    clearForm: true,
  });
  return (
    <div className={classes["add-question-page"]}>
      {isPending && <Loader />}
      <h1 className={classes["add-question-page--title"]}>Add new question</h1>
      <form className={classes["add-question-page--form"]} action={formAction}>
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
          Add question
        </Button>
      </form>
    </div>
  );
};

export default AddQuestionPage;
