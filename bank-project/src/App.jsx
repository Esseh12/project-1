import { BrowserRouter, Routes, Route } from "react-router-dom";
import Personal from "./mainPages/Personal";
import Institutional from "./mainPages/Institutional";

// institutional files and folder routes
const InstitutionalRoutes = () => {
  return (
    <>
      <Route path="/" element={<Personal />} />
      <Route path="/institutional" element={<Institutional />} />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>{InstitutionalRoutes()}</Routes>
    </BrowserRouter>
  );
};

export default App;
