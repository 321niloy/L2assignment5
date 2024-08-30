/* eslint-disable @typescript-eslint/no-explicit-any */

import { useForm } from "react-hook-form";
import "./signup.css";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useSignUpMutation } from "../../Redux/Features/Auth/AuthApi";

type SignupType = {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role: string;
};

const SignUp = () => {
  // Initialize the useForm hook
  const { register, handleSubmit } = useForm();

  const [signUp, { isError, isSuccess }] = useSignUpMutation();
  const navigate = useNavigate();
  // Define the onSubmit function to handle form submission
  const onSubmit = async (data: any) => {
    const signup: SignupType = {
      name: data.firstName,
      email: data.email,
      password: data.password,
      phone: data.phone,
      address: data.address,
      role: "user",
    };
    const res = await signUp(signup);
    if (res?.error) {
      Swal.fire("Use Another Email");
    }
  };

  if (isSuccess) {
    Swal.fire("SignUp Succesfully!");
    navigate("/login");
  }
  if (isError) {
    console.log("Error aysay", isError);
  }

  return (
    <div className="flex justify-center items-center h-screen imgbg">
      <div className="flex justify-items-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-fit p-10 rounded-lg mb-10 mt-16 formbg"
        >
          <div className="mb-4 flex gap-6">
            <div>
              <label
                htmlFor="first_name"
                className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                {...register("firstName")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@company.com"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              required
            />
          </div>
          <div className="flex gap-6">
            <div>
              <label
                htmlFor="phone"
                className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                {...register("phone")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="123-45-678"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="address"
                className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Address
              </label>
              <input
                type="address"
                id="address"
                {...register("address")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="123 Main St"
                required
              />
            </div>
          </div>
          <div className="flex justify-center w-full">
            <input
              type="submit"
              value="Sign Up"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
