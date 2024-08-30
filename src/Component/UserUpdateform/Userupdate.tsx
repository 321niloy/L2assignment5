/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import "./Userupdateform.css";
import { useAppSelector } from "../../Redux/hooks";
import Swal from "sweetalert2";
import { useUpdateSingelUserMutation } from "../../Redux/Features/users/userApi";
import { TUser } from "../../Redux/Features/Auth/AuthSlice";

interface LoginType {
  name: string;
  email: string;
  phone: string;
  address: string;
  password: string;
}

const UserUpdateForm = () => {
  // Initialize the useForm hook
  const { register, handleSubmit } = useForm<LoginType>();
  const state = useAppSelector((state) => state.auth.user as TUser); // Ensuring type is TUser
  const email = state?.email; // Now email will be recognized

  const [updateSingelUser, { isSuccess }] = useUpdateSingelUserMutation();

  // Define the onSubmit function to handle form submission
  const onSubmit = async (data: LoginType) => {
    const all = {
      email: email,
      payload: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
      },
    };
    const res = await updateSingelUser(all);
    console.log("Res", res);
    console.log(all, "all from");
    // You can perform further actions with the data here
  };

  if (isSuccess) {
    Swal.fire("Updated User Successfully");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-items-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[400px] p-10 rounded-lg mb-10 mt-16 formbg"
        >
          {/* Form Fields */}
          {/* Name Field */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John Doe"
            />
          </div>

          {/* Other Fields */}
          {/* Email Field */}
          {/* Phone Field */}
          {/* Address Field */}
          {/* Password Field */}
          {/* Submit Button */}
          <div className="flex justify-center w-full">
            <input
              type="submit"
              value="Update"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserUpdateForm;
