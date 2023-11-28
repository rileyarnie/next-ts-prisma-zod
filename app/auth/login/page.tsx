import React from "react";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="bg-gray-800 h-[100vh] grid place-items-center">
      <form className="p-5 bg-slate-600 flex flex-col space-y-5">
        <input
          placeholder="username"
          type="text"
          className="px-2 py-4 rounded-md"
          name="username"
        />
        <input
          placeholder="password"
          type="password"
          className="px-2 py-4 rounded-md"
          name="password"
        />
        <button className="bg-blue-800 py-2 rounded-md text-gray-100 uppercase font-semibold">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
