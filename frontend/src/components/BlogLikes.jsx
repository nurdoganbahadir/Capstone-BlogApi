import React, { useState } from "react";
import { useSelector } from "react-redux";
import useBlogRequests from "../services/useBlogRequests";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function BlogLikes({ item }) {
  const navigate = useNavigate();
  const { username } = useSelector((state) => state.auth);
  const { postLike } = useBlogRequests();

  //LIKE STATE
  const [like, setLike] = useState(item.likes?.length);
  const [isLike, setIsLike] = useState(
    item.likes?.some((like) => like.username === username)
  );

  const handleLike = async () => {
    username === "" && navigate("/auth/login");
    await postLike(`/blogs/${item._id}/postLike`, username);

    setLike(like + (isLike ? -1 : 1));
    setIsLike(!isLike);
  };

  return (
    <div className="flex">
      <button className="m-2" onClick={handleLike}>
        <FaHeart className={"" + (isLike ? "text-red-600" : "text-white")} />
      </button>
      <p className="m-1 text-white">{like}</p>
    </div>
  );
}

export default BlogLikes;
