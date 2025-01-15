import React, { useState } from "react";
import { useSelector } from "react-redux";
import useBlogRequests from "../services/useBlogRequests";
import { FaHeart } from "react-icons/fa";

function BlogLikes({ items }) {
  const { username } = useSelector((state) => state.auth);
  const { postLike } = useBlogRequests();

  //LIKE STATE
  const [like, setLike] = useState(items.likes.length);
  const [isLike, setIsLike] = useState(
    items.likes.some((like) => like.username === username)
  );

  const handleLike = async () => {
    await postLike(`/blogs/${items._id}/postLike`, username);

    setLike(like + (isLike ? -1 : 1));
    setIsLike(!isLike);
  };

  return (
    <div className="flex">
      <button className="m-2" onClick={handleLike}>
        <FaHeart className={"" + (isLike ? "text-red-600 size-6" : "")} />
      </button>
      <p className="m-1">{like}</p>
    </div>
  );
}

export default BlogLikes;
