import React, { useState } from "react";
import useApiRequests from "../services/useApiRequests";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");

  const { register } = useApiRequests();

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters long, contain one uppercase letter, one special character, and one number."
      );
      return;
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      setError("Email must contain @ and . characters.");
      return;
    }

    setError("");
    register({ username, password, email, firstName, lastName });
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
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$"
            title="Password must be at least 8 characters long, contain one uppercase letter, one special character, and one number."
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <input
            type="email"
            placeholder="Email"
            className="rounded-[10px] p-2 border-2"
            required
            pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
            title="Email must contain @ and . characters."
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <input
            type="text"
            placeholder="First Name"
            className="rounded-[10px] p-2 border-2"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <input
            type="text"
            placeholder="First Name"
            className="rounded-[10px] p-2 border-2"
            required
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button className="bg-blue-400 h-[44px] font-serif text-label uppercase hover:opacity-90 rounded-[4px] ">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
