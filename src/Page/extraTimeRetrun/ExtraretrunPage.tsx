import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useGetSingelbikeQuery } from "../../Redux/Features/getBikes/BikeApi";
import { useGetBookingsSingelBikeQuery } from "../../Redux/Features/Booking/BookingApi";
import { useGetSingelByidUserQuery } from "../../Redux/Features/users/userApi";
import { useReturnBikeMutation } from "../../Redux/Features/bikereturned/returnbikeApi";

interface FormValues {
  extraAmount: number;
}

const ExtraretrunPage: React.FC = () => {
  const { id } = useParams();
  const { data: booking } = useGetBookingsSingelBikeQuery(id);

  const { data: bike } = useGetSingelbikeQuery(booking?.data?.bikeId);
  const { data: user } = useGetSingelByidUserQuery(booking?.data?.userId);
  const [returnBike] = useReturnBikeMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log("Form Data:", data);
    const all = {
      bookingId: id,
      bikeId: bike?.data?._id,
      userName: user?.data?.name,
      userEmail: user?.data?.email,
      bikeName: bike?.data?.name,

      extraAmount: data.extraAmount,
    };
    const res = await returnBike(all);
    console.log("laga", res);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4">
        <div className="mb-4">
          <label
            htmlFor="extraAmount"
            className="block text-xl  text-white font-bold"
          >
            Extra Amount
          </label>
          <input
            type="number"
            id="extraAmount"
            {...register("extraAmount", {
              required: "Extra amount is required",
            })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.extraAmount && (
            <p className="mt-2 text-sm text-red-600">
              {errors.extraAmount.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Return
        </button>
      </form>
    </div>
  );
};

export default ExtraretrunPage;
