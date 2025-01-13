import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useBlogRequests from "../services/useBlogRequests";

function Home() {
  const { blog } = useSelector((state) => state.blog);
  const { getBlog } = useBlogRequests();

  useEffect(() => {
    getBlog("blogs");
  }, []);

  console.log(blog);

  return <div>sdgasdgsdg</div>;
}

export default Home;
