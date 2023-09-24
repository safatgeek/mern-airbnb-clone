import { Route, Routes } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages/indexPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import AccountPage from "./pages/AccountPage";
import { Places } from "./pages/Places";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/account/:subpage?" element={<AccountPage />} />
            <Route path="/account/:subpage?/:action" element={<AccountPage />} />
          </Route>
        </Routes>
      </div>
    </UserContextProvider>
  );
}

export default App;
