import { BrowserRouter, Routes, Route } from "react-router-dom";
import Personal from "./mainPages/Personal";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Personal />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
