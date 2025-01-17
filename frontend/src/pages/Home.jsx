import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useBlogRequests from "../services/useBlogRequests";
import BlogLikes from "../components/BlogLikes";
import BlogCard from "../components/BlogCard";

function Home() {
  const { blog } = useSelector((state) => state.blog);
  const [publishPost, setPublishPost] = useState([]);
  const { getBlog } = useBlogRequests();

  useEffect(() => {
    const unpublishedBlogs = blog.filter((item) => item.isPublished === false);
    setPublishPost(unpublishedBlogs);
  }, [blog]);

  useEffect(() => {
    getBlog("blogs");
  }, []);

  return (
    <section className="my-12 mx-auto max-w-[1440px]">
      {publishPost?.map((item) => (
        <BlogCard item={item} />
      ))}
    </section>
  );
}

export default Home;
