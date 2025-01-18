import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import useBlogRequests from "../services/useBlogRequests";
import BlogCard from "../components/BlogCard";
import Pagination from "../components/Pagination";

function Home() {
  const { blog, details } = useSelector((state) => state.blog);
  const [publishPost, setPublishPost] = useState([]);
  const { getBlog } = useBlogRequests();
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const page = query.get("page") || 1;
    getBlog(`blogs?page=${page}`);
  }, [location.search ]);

  useEffect(() => {
    const unpublishedBlogs = blog.filter((item) => item.isPublished === false);
    setPublishPost(unpublishedBlogs);
  }, [blog]);

  return (
    <section className="my-12 mx-auto max-w-[1440px]">
      {publishPost?.map((item) => (
        <BlogCard key={item._id} item={item} />
      ))}
      <div className="flex justify-center">
        <Pagination details={details} />
      </div>
    </section>
  );
}

export default Home;
