import React, { useState } from "react";
import useApiRequests from "../services/useApiRequests";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useApiRequests();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  return (
    <div className="w-[300px] m-auto my-5 p-5 rounded-[20px] ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col text-left p-3 gap-5"
      >
        <div className="flex flex-col gap-1">
          <input
            type="text"
            placeholder="Enter Username"
            className="rounded-[10px] p-2 border-2"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <input
            type="password"
            placeholder="Password"
            className="rounded-[10px] p-2 border-2"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="bg-blue-400 h-[44px] font-serif text-label uppercase hover:opacity-90 rounded-[4px] ">
          Login
        </button>
        <div className="flex justify-center items-center flex-wrap">
          <span className="text-label font-montserrat font-[500] text-labelColor ">
            Forgot your password?
          </span>
          <span className="text-main text-[14px] font-montserrat font-[500] underline ml-1">
            Reset password
          </span>
          <a href="/users" className="text-main text-[14px] font-montserrat font-[500] underline ml-1">
            Register
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
