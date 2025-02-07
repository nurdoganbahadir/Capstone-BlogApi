import React, { useEffect } from "react";
import useBlogRequests from "../services/useBlogRequests";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Buttons from "../components/Buttons";
import Skeleton from "../components/Skeleton";

function BlogDetail() {
  const params = useParams();
  const { blog, loading, error } = useSelector((state) => state.blog);
  const userId = useSelector((state) => state.auth.userId);
  const { getBlog, deleteBlog, updateBlog } = useBlogRequests();
  const userBtn = userId === blog?.userId;

  useEffect(() => {
    getBlog(`/blogs/${params.id}`);
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : error ? (
        <p>Error: {error}</p>
      ) : !blog ? (
        <p>Blog not found</p>
      ) : (
        <div className="max-w-4xl mx-auto my-8 p-4 bg-white shadow-lg">
          <img
            src={blog.image}
            alt={blog.title}
            className="p-4 w-full h-64 object-cover"
          />
          <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <p className="text-gray-700 leading-relaxed">{blog.content}</p>
          </div>
          <div className="p-4">
            {userBtn && (
              <Buttons
                deleteBlog={deleteBlog}
                updateBlog={updateBlog}
                blog={blog}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default BlogDetail;
