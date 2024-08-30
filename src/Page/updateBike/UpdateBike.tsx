/* eslint-disable @typescript-eslint/no-explicit-any */

import { useParams } from "react-router-dom";
import {
  useGetSingelbikeQuery,
  useUpdateSingelbikeMutation,
} from "../../Redux/Features/getBikes/BikeApi";
import Swal from "sweetalert2";

const UpdateBike = () => {
  const { id } = useParams();
  const { data } = useGetSingelbikeQuery(id);
  const [updateSingelbike, { isSuccess }] = useUpdateSingelbikeMutation();

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    const form = e.target;
    const args = {
      id: id,
      all: {
        name: form.name.value,
        description: form.name.value,
        pricePerHour: parseInt(form.price.value),
        cc: parseInt(form.cc.value),
        year: parseInt(form.year.value),
        model: form.model.value,
        brand: form.brand.value,
      },
    };

    await updateSingelbike(args);
  };

  if (isSuccess) {
    Swal.fire("Update Successfull!!!");
  }
  return (
    <div>
      <h1 className="text-4xl text-[#00A2E2] font-bold italic text-center mt-16">
        Update Bike
      </h1>
      <div>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          {/* Name Input Field */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="name"
              id="name"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              defaultValue={data?.data?.name}
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>

          {/* Description Input Field */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="description"
              name="description"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              defaultValue={data?.data?.description}
            />
            <label
              htmlFor="description"
              className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Description
            </label>
          </div>

          {/* Price Input Field */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="price"
              id="price"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              defaultValue={data?.data?.pricePerHour}
            />
            <label
              htmlFor="price"
              className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Price Per Hour
            </label>
          </div>

          {/* CC Input Field */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="cc"
              id="cc"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              defaultValue={data?.data?.cc}
            />
            <label
              htmlFor="cc"
              className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              CC
            </label>
          </div>

          {/* Year Input Field */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="year"
              id="year"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              defaultValue={data?.data?.year}
            />
            <label
              htmlFor="year"
              className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Year
            </label>
          </div>

          {/* Model Input Field */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="model"
              id="model"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              defaultValue={data?.data?.model}
            />
            <label
              htmlFor="model"
              className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Model
            </label>
          </div>

          {/* Brand Input Field */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="brand"
              id="brand"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              defaultValue={data?.data?.brand}
            />
            <label
              htmlFor="brand"
              className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Brand
            </label>
          </div>

          {/* Submit Button */}

          <input
            type="submit"
            value="Update"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateBike;
