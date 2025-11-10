import React from "react";
import { Login } from "../components/login";
import { Register } from "../components/register.jsx";

export const Auth = () => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <div className="h-screen flex justify-center items-center bg-blue-300">
      <div className="bg-white p-5">
        {toggle ? <Login /> : <Register />}
        <button
          className="w-full p-3 bg-amber-300"
          onClick={() => setToggle(!toggle)}
        >
          Change
        </button>
      </div>
    </div>
  );
};
