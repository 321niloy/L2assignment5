/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import "./login.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useLoginUpMutation } from "../../Redux/Features/Auth/AuthApi";
import { setUser } from "../../Redux/Features/Auth/AuthSlice";
import { verifyToken } from "../../utilites/VerifyToken";
import { useAppDispatch } from "../../Redux/hooks";

interface loginType {
  email: string;
  password: string;
}

const Login = () => {
  // Initialize the useForm hook
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [loginUp, { isSuccess }] = useLoginUpMutation();

  // Define the onSubmit function to handle form submission
  const onSubmit = async (data: any) => {
    const loginData: loginType = {
      email: data.email,
      password: data.password,
    };

    const res = await loginUp(loginData);

    // Type guard for error handling
    if ("error" in res) {
      if (
        "data" in res.error! &&
        res.error.data! === "Password do not matched"
      ) {
        Swal.fire("Password do not matched");
        return;
      }

      if (
        "data" in res.error! &&
        res.error.data! === "This user is not found !"
      ) {
        Swal.fire("This user is not found !");
        return;
      }
    } else if ("data" in res) {
      const AccessToken = res.data.token;
      const user = verifyToken(res.data.token);
      dispatch(setUser({ user: user, token: AccessToken }));
    }
  };

  if (isSuccess) {
    Swal.fire("Login Successful!");

    navigate("/dashboard");
  }

  return (
    <div className="flex justify-center items-center h-screen imgbg">
      <div className="flex justify-items-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-fit p-10 rounded-lg mb-10 mt-16 formbg"
        >
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

          <div className="flex justify-center w-full">
            <input
              type="submit"
              value="Login"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
