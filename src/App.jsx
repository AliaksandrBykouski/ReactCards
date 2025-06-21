import MainLayout from "./components/MainLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="forbidden" element={<div>🍻I NEED MORE BEER🍻</div>} />
          <Route path="addquestion" element={<div>🍻add question🍻</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
