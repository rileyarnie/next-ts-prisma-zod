"use client";

import { UserSchema, UserSchemaType } from "@/lib/schema";
import axios, { AxiosResponse } from "axios";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEventHandler,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

type Props = {};

const Register = (props: Props) => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({
    email: "",
    first_name: "",
    last_name: "",
    username: "",
    password: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSchemaType>({
    resolver: zodResolver(UserSchema),
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (data: UserSchemaType) => {
    console.log("data", data);
    // e.preventDefault();
    const validatedInput = UserSchema.safeParse(userInfo);
    console.log("errors", errors);

    // if (!validatedInput.success) {
    //   return toast.error("kinddy fill fields correctly");
    // }

    try {
      const response = await axios.post("/api/auth/register", userInfo);
      console.log("response", response);
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };
  // const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
  //   e.preventDefault();
  //   toast.promise(createAccount, {
  //     loading: "Creating account",
  //     success: (data) => {
  //       console.log("data", data.data);
  //       return "Account created successfuly";
  //     },
  //     error: "Couldn't create account. Please try again.",
  //   });
  // };

  return (
    <div className="bg-gray-800 min-h-[100vh] grid place-items-center">
      <form
        className="p-5 bg-slate-600 flex flex-col space-y-5"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <h3 className="underline text-center font-medium underline-offset-4 text-xl text-gray-200">
          Create Account
        </h3>
        <input
          {...register("email")}
          onChange={handleChange}
          placeholder="Email Address"
          type="email"
          className="px-2 py-4 rounded-md"
          name="email"
        />
        <input
          {...register("first_name")}
          onChange={handleChange}
          placeholder="First Name"
          type="text"
          className="px-2 py-4 rounded-md"
          name="first_name"
        />
        <p className="text-white">{errors?.first_name?.message}</p>
        <input
          {...register("last_name")}
          onChange={handleChange}
          placeholder="Last Name"
          type="text"
          className="px-2 py-4 rounded-md"
          name="last_name"
        />
        <p className="text-white">{errors?.last_name?.message}</p>
        <input
          {...register("username")}
          onChange={handleChange}
          placeholder="Username"
          type="text"
          className="px-2 py-4 rounded-md"
          name="username"
        />
        <p className="text-white">{errors?.username?.message}</p>
        <input
          {...register("password")}
          onChange={handleChange}
          placeholder="Password"
          type="password"
          className="px-2 py-4 rounded-md"
          name="password"
        />
        <p className="text-white">{errors?.password?.message}</p>
        <button
          type="submit"
          className="bg-blue-800 py-2 rounded-md text-gray-100 uppercase font-semibold"
        >
          Register
        </button>
        <p className=" text-center text-white">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/auth/login")}
            className="cursor-pointer underline underline-offset-4"
          >
            Login here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
