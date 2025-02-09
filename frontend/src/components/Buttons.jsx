"use client";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Buttons({ deleteBlog, updateBlog, blog }) {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);
  const [image, setImage] = useState(blog.image);
  const [isPublished, setIsPublished] = useState(blog.isPublished);
  console.log("isPublished", isPublished);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      _id: id,
      title: title,
      content: content,
      image: image,
      isPublished: isPublished,
    };
    updateBlog("blogs", data).then(() => {
      window.location.reload();
    });
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
          Edit
        </span>
      </button>
      {isModalOpen && (
        <div
          id="authentication-modal"
          tabindex="-1"
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Edit Blog
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={toggleModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5">
                <form onSubmit={handleSubmit} className="space-y-4" action="#">
                  <div>
                    <label
                      for="title"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Blog Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      value={title}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter blog title"
                      required
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      for="content"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Blog Content
                    </label>
                    <textarea
                      name="content"
                      id="content"
                      value={content}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter blog content"
                      required
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      for="image"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Image
                    </label>
                    <input
                      type="text"
                      name="image"
                      id="image"
                      value={image}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter blog image"
                      required
                      onChange={(e) => setImage(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      for="isPublished"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Publish
                    </label>
                    <select
                      id="isPublished"
                      value={isPublished}
                      onChange={(e) => setIsPublished(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option value={true}>Yes</option>
                      <option value={false}>No</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => deleteBlog("blogs", id)}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
          Delete
        </span>
      </button>
    </div>
  );
}

export default Buttons;
