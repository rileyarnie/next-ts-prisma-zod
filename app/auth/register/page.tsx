import React from "react";

type Props = {};

const Register = (props: Props) => {
  return (
    <div className="bg-gray-800 h-[100vh] grid place-items-center">
      <form className="p-5 bg-slate-600 flex flex-col space-y-5">
        <input
          placeholder="Email Address"
          type="email"
          className="px-2 py-4 rounded-md"
          name="email"
        />
        <input
          placeholder="First Name"
          type="text"
          className="px-2 py-4 rounded-md"
          name="first_name"
        />
        <input
          placeholder="Last Name"
          type="text"
          className="px-2 py-4 rounded-md"
          name="last_name"
        />
        <input
          placeholder="Username"
          type="text"
          className="px-2 py-4 rounded-md"
          name="username"
        />
        <input
          placeholder="Password"
          type="password"
          className="px-2 py-4 rounded-md"
          name="password"
        />
        <button className="bg-blue-800 py-2 rounded-md text-gray-100 uppercase font-semibold">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
