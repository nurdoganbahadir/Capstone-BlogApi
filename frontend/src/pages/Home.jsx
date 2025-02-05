import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import useBlogRequests from "../services/useBlogRequests";
import BlogCard from "../components/BlogCard";
import Pagination from "../components/Pagination";
import Categories from "../components/Categories";

function Home() {
  const { categories, blog, details } = useSelector((state) => state.blog);
  const [publishPost, setPublishPost] = useState([]);
  const { getBlog, getCategories } = useBlogRequests();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");
  const filter = searchParams.get("filter");
  console.log(categories);
  useEffect(() => {
    let query = `blogs?page=${page}`;
    if (filter) {
      query += `&filter=${filter}`;
    }
    getBlog(query);
    getCategories("categories");
  }, [page, filter]);

  useEffect(() => {
    const unpublishedBlogs = blog.filter((item) => item.isPublished === false);
    setPublishPost(unpublishedBlogs);
  }, [blog]);

  return (
    <>
      <Categories categories={categories} />
      <section className="mx-auto max-w-[1440px]">
        {publishPost?.map((item) => (
          <BlogCard key={item._id} item={item} />
        ))}
        <div className="flex justify-center">
          <Pagination details={details} />
        </div>
      </section>
    </>
  );
}

export default Home;
