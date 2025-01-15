import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useBlogRequests from "../services/useBlogRequests";
import { FaHeart } from "react-icons/fa";

function Home() {
  const { blog } = useSelector((state) => state.blog);
  const { getBlog } = useBlogRequests();

  useEffect(() => {
    getBlog("blogs");
  }, []);

  return (
    <section className="my-12 mx-auto max-w-[1440px] px-4">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blog?.map((items) => (
          <article
            className="max-w-md mx-auto shadow-lg border rounded-md duration-300 hover:shadow-sm"
            key={items._id}
          >
            <div>
              <img
                src={items.image}
                loading="lazy"
                alt={items.title}
                className="w-full h-48 rounded-t-md object-cover"
              />
              <div className="p-4">
                <h1 className="font-bold">{items.title}</h1>
                <p className="line-clamp-3">{items.content}</p>
                <a
                  href={`/blogs/${items._id}`}
                  className="text-blue-400 hover:underline"
                >
                  {" "}
                  ...Read More
                </a>
              </div>
            </div>
            <button>
              <FaHeart className="text-red-600"/>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Home;
