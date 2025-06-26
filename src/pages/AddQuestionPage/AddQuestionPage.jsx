import classes from "./AddQuestionPage.module.scss";
import { useActionState } from "react";
import { toast } from "react-toastify";
import delayFn from "../../helpers/delayFn.js";
import { API_URL } from "../../constants/index.js";
import Loader from "../../components/Loader/index.js";
import QuestionForm from "../../components/QuestionForm/index.js";

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

      <QuestionForm
        formState={formState}
        formAction={formAction}
        isPending={isPending}
        submitBtnText="Add question"
      />
    </div>
  );
};

export default AddQuestionPage;
