import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/login";
import "./index.scss";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/auth/signin" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
