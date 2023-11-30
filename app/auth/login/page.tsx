/* eslint-disable react/no-unescaped-entities */
"use client";

import {
  LoginSchema,
  LoginSchemaType,
  UserSchema,
  UserSchemaType,
} from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

type Props = {};

const Login = (props: Props) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({ resolver: zodResolver(LoginSchema) });

  const onFormSubmit = (data: Partial<UserSchemaType>) => {
    console.log("data", data);
  };

  return (
    <div className="bg-gray-800 h-[100vh] grid place-items-center">
      <form
        className="p-5 bg-slate-600 flex flex-col space-y-5"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <h3 className="underline text-center font-medium underline-offset-4 text-xl text-gray-200">
          Login To Your Account
        </h3>
        <input
          {...register("username")}
          placeholder="username"
          type="text"
          className="px-2 py-4 rounded-md"
          name="username"
        />
        <p className="text-sm text-red-300">{errors.username?.message}</p>
        <input
          {...register("password")}
          placeholder="password"
          type="password"
          className="px-2 py-4 rounded-md"
          name="password"
        />
        <p className="text-sm text-red-300">{errors.password?.message}</p>
        <button
          disabled={Object.keys(errors).length ? true : false}
          className={` py-2 rounded-md  uppercase font-semibold ${
            Object.keys(errors).length
              ? "bg-gray-500 text-gray-900 cursor-not-allowed"
              : "bg-blue-800 text-gray-100 cursor-pointer"
          }`}
        >
          Login
        </button>
        <p className=" text-center text-white">
          Don't have an account?
          <span
            onClick={() => router.push("/auth/register")}
            className="cursor-pointer underline underline-offset-4 ml-2"
          >
            Register here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
