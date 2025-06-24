import MainLayout from "./components/MainLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import QuestionPage from "./pages/QuestionPage/index.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="forbidden" element={<div>🍻I NEED MORE BEER🍻</div>} />
          <Route path="addquestion" element={<div>🍻add question🍻</div>} />
          <Route path="question/:id" element={<QuestionPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
