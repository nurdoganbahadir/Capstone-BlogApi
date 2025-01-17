import React from "react";

function BlogCard({ item }) {
  return (
    <div className="w-full my-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div id="defaultTabContent">
        <div
          className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
          id="about"
          role="tabpanel"
          ariaLabelledby="about-tab"
        >
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {item.title}
          </h2>
          <p className="mb-3 text-gray-500 dark:text-gray-400">
            {item.content}
          </p>
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
        </div>
        <div
          className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
          id="services"
          role="tabpanel"
          ariaLabelledby="services-tab"
        >
          <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            We invest in the world’s potential
          </h2>
          <ul
            role="list"
            className="space-y-4 text-gray-500 dark:text-gray-400"
          >
            <li className="flex space-x-2 rtl:space-x-reverse items-center">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                ariaHidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="leading-tight">
                Dynamic reports and dashboards
              </span>
            </li>
            <li className="flex space-x-2 rtl:space-x-reverse items-center">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                ariaHidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="leading-tight">Templates for everyone</span>
            </li>
            <li className="flex space-x-2 rtl:space-x-reverse items-center">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                ariaHidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="leading-tight">Development workflow</span>
            </li>
            <li className="flex space-x-2 rtl:space-x-reverse items-center">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                ariaHidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="leading-tight">
                Limitless business automation
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
