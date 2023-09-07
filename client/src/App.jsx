import { Route, Routes } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages/indexPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element = {<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
