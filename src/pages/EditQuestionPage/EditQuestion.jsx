import classes from "./EditQuestionPage.module.scss";
import Loader from "../../components/Loader/index.js";
import QuestionForm from "../../components/QuestionForm/index.js";
import { useActionState } from "react";
import delayFn from "../../helpers/delayFn.js";
import { API_URL } from "../../constants/index.js";
import { toast } from "react-toastify";
import dateFormat from "../../helpers/dateFormat.js";
import useFetch from "../../hooks/useFetch.js";
import { useNavigate } from "react-router-dom";

const editCardQuestion = async (_prevState, formData) => {
  try {
    await delayFn();
    const resources = formData.get("resources");
    const questionId = formData.get("questionId");
    const isClearForm = formData.get("clearForm");

    const response = await fetch(`${API_URL}/react/${questionId}`, {
      method: "PATCH",
      body: JSON.stringify({
        question: formData.get("question"),
        answer: formData.get("answer"),
        description: formData.get("description"),
        resources: resources.length ? resources.split(",") : [],
        level: Number(formData.get("level")),
        completed: false,
        editDate: dateFormat(new Date()),
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const questions = response.json();
    toast.success(" TheQuestion is edited successfully");

    return isClearForm ? {} : questions;
  } catch (error) {
    toast.error(error.message);
    return {};
  }
};

const EditQuestion = ({ initialState = {} }) => {
  const navigate = useNavigate();
  const [formState, formAction, isPending] = useActionState(editCardQuestion, {
    ...initialState,
    clearForm: false,
  });
  const [removeQuestion, isQuestionRemoving] = useFetch(async () => {
    await fetch(`${API_URL}/react/${initialState.id}`, {
      method: "DELETE",
    });

    toast.success(" The Question has been  successfully removed");

    navigate("/");
  });

  const onRemoveQuestionHandler = () => {
    const isRemove = confirm("Are you sure you want to remove this question?");
    if (isRemove) {
      removeQuestion();
    }
  };
  return (
    <div className={classes["edit-question-page"]}>
      {(isPending || isQuestionRemoving) && <Loader />}
      <h1 className={classes["edit-question-page--title"]}>Edit question</h1>
      <div className={classes["edit-question-page--form-wrapper"]}>
        <button
          className={classes["edit-question-page--close"]}
          disabled={isPending || isQuestionRemoving}
          onClick={onRemoveQuestionHandler}
        >
          X
        </button>

        <QuestionForm
          formState={formState}
          formAction={formAction}
          isPending={isPending || isQuestionRemoving}
          submitBtnText="Edit question"
          initialState={initialState}
        />
      </div>
    </div>
  );
};

export default EditQuestion;
