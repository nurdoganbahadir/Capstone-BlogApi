import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/blogs" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/users" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
