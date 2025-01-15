import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useBlogRequests from "../services/useBlogRequests";
import BlogLikes from "../components/BlogLikes";

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
    <section className="my-12 mx-auto max-w-[1440px] px-4">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {publishPost?.map((item) => (
          <article
            className="max-w-md mx-auto shadow-lg border rounded-md duration-300 hover:shadow-sm"
            key={item._id}
          >
            <div>
              <img
                src={item.image}
                loading="lazy"
                alt={item.title}
                className="w-full h-48 rounded-t-md object-cover"
              />
              <div className="p-4">
                <h1 className="font-bold">{item.title}</h1>
                <p className="line-clamp-3">{item.content}</p>
                <a
                  href={`/blogs/${item._id}`}
                  className="text-blue-400 hover:underline"
                >
                  {" "}
                  ...Read More
                </a>
              </div>
            </div>
            <BlogLikes item={item} />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Home;
