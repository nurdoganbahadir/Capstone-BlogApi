import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useBlogRequests from "../services/useBlogRequests";

function MyBlogs() {
  const { blog } = useSelector((state) => state.blog);
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
    <section className="my-12 mx-auto max-w-[1440px] px-4">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {userBlogs?.map((item) => (
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
            <div>
              <button
                type="button"
                class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Update
              </button>

              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Delete
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default MyBlogs;
