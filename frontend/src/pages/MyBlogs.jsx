import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useBlogRequests from "../services/useBlogRequests";
import BlogCard from "../components/BlogCard";
import Skeleton from "../components/Skeleton";
import NotBlog from "../components/NotBlog";

function MyBlogs() {
  const { blog, loading, error } = useSelector((state) => state.blog);
  const { userId } = useSelector((state) => state.auth);
  const { getBlog } = useBlogRequests();
  const [userBlogs, setUserBlogs] = useState([]);

  useEffect(() => {
    const userBlog = blog.filter((item) => item.userId === userId);
    setUserBlogs(userBlog);
  }, [blog]);

  useEffect(() => {
    getBlog("blogs");
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : error ? (
        <p>Error: {error}</p>
      ) : userBlogs.length === 0 ? (
        <NotBlog />
      ) : (
        <section className="my-12 mx-auto max-w-[1440px] px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {userBlogs?.map((item) => (
              <BlogCard item={item} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default MyBlogs;
