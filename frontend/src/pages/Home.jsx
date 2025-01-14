import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useBlogRequests from "../services/useBlogRequests";

function Home() {
  const { blog } = useSelector((state) => state.blog);
  const { getBlog } = useBlogRequests();

  useEffect(() => {
    getBlog("blogs");
  }, []);

  return (
    <section>
      <div className="my-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {blog?.map((items) => (
          <article
            className="max-w-md w-[350px] mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
            key={items._id}
          >
            <a>
              <img
                src={items.image}
                loading="lazy"
                alt={items.title}
                className="w-full h-48 rounded-t-md"
              />
              <div className="flex justify-between items-center mt-2 pt-3 ml-4 mr-2">
                <p>{items.content}<a href={`/blogs/${items._id}`}> ...Read More</a></p>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Home;
