import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import useBlogRequests from "../services/useBlogRequests";
import BlogCard from "../components/BlogCard";
import Pagination from "../components/Pagination";

function Home() {
  const { categories, blog, details } = useSelector((state) => state.blog);
  const [publishPost, setPublishPost] = useState([]);
  const { getBlog, getCategories } = useBlogRequests();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");

  console.log(categories);

  useEffect(() => {
    getBlog(`blogs?page=${page}`);
    getCategories("categories");
  }, []);

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
