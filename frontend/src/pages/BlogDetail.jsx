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
        <div>
          <img src={blog.image} alt={blog.title} />
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
        </div>
      )}
    </>
  );
}

export default BlogDetail;
