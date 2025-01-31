import React from "react";
import BlogLikes from "./BlogLikes";

function BlogCard({ item }) {

  const formatDateTime = (dateString) => {
    const dateOptions = { year: "numeric", month: "long", day: "numeric" };
    const timeOptions = { hour: "2-digit", minute: "2-digit" };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString(undefined, dateOptions);
    const formattedTime = date.toLocaleTimeString(undefined, timeOptions);
    return `${formattedDate} ${formattedTime}`;
  };

  return (
    <div className="w-full my-2 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
      <div id="defaultTabContent">
        <div
          className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
          id="about"
          role="tabpanel"
          ariaLabelledby="about-tab"
        >
          <div className="flex justify-between">
            <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              {item.title}
            </h2>
            <p className="text-gray-600">{formatDateTime(item.createdAt)}</p>
          </div>

          <p className="mb-3 text-gray-500 dark:text-gray-400">
            {item.content}
          </p>
          <div className="flex justify-between">
            <a
              href={`/blogs/${item._id}`}
              className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
            >
              Learn more
              <svg
                className=" w-2.5 h-2.5 ms-2 rtl:rotate-180"
                ariaHidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
            <BlogLikes item={item} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
