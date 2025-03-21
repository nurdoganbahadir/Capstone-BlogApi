import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BlogDetail from "../pages/BlogDetail";
import MyBlogs from "../pages/MyBlogs";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/blogs" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/users" element={<Register />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/blogs/myblogs" element={<MyBlogs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
