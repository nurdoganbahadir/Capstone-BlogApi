import React, { useEffect } from "react";
import useBlogRequests from "../services/useBlogRequests";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function BlogDetail() {
  const params = useParams();
  const { blog, loading, error } = useSelector((state) => state.blog);
  const { getBlog } = useBlogRequests();

  useEffect(() => {
    getBlog(`/blogs/${params.id}`);
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : !blog ? (
        <p>Blog not found</p>
      ) : (
        <div className="max-w-4xl mx-auto my-8 p-4 bg-white shadow-lg rounded-lg">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <p className="text-gray-700 leading-relaxed">{blog.content}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default BlogDetail;
