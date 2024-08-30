/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useGetSingelbikeQuery } from "../../Redux/Features/getBikes/BikeApi";
import { useGetSingelUserQuery } from "../../Redux/Features/users/userApi";
import { useBookingbikesMutation } from "../../Redux/Features/Booking/BookingApi";
import { useAppSelector } from "../../Redux/hooks";
// Adjust this import based on your file structure

const UsersingelBikepage = () => {
  const { id } = useParams();
  const { data: bike } = useGetSingelbikeQuery(id);
  const [Bookingbikes] = useBookingbikesMutation();

  // Correctly use the typed useAppSelector hook
  const user = useAppSelector((state) => state.auth.user);

  const { data: forUserId } = useGetSingelUserQuery(user?.email);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalCost, setTotalCost] = useState(0);

  const { register, handleSubmit, watch } = useForm();

  const handleBookingClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const startTime = watch("startTime");
  const endTime = watch("endTime");

  useEffect(() => {
    if (startTime && endTime && bike?.data?.pricePerHour) {
      const start = new Date(startTime);
      const end = new Date(endTime);
      const hours = (end.getTime() - start.getTime()) / (1000 * 60 * 60); // convert ms to hours
      if (hours > 0) {
        setTotalCost(hours * bike.data.pricePerHour);
      } else {
        setTotalCost(0); // Reset cost if time range is invalid
      }
    } else {
      setTotalCost(0); // Reset if no valid times
    }
  }, [startTime, endTime, bike?.data?.pricePerHour]);

  const onSubmit = async (data: any) => {
    const paymentdone = {
      userId: forUserId?.data?._id,
      bikeId: id,
      startTime: data.startTime,
      returnTime: data.endTime,
      totalCost: totalCost,
    };
    const res = await Bookingbikes(paymentdone);

    if (res?.data?.success) {
      window.location.href = res?.data?.data?.payment_url;
    }
    console.log("respayment", res);
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-14">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={bike?.data?.image}
          alt="Bike Image"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <span className="font-bold">Name: </span>
            {bike?.data?.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Description: </span>
            {bike?.data?.description}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">CC: </span>
            {bike?.data?.cc}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Model: </span>
            {bike?.data?.model}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Price Per Hour: </span>
            {bike?.data?.pricePerHour}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Year: </span>
            {bike?.data?.year}
          </p>

          <button
            className="rounded-xl p-5 text-white bg-[#00A2E2]"
            onClick={handleBookingClick}
          >
            Booking
          </button>
        </div>
      </div>

      {/* Modal for Booking */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4">Book a Bike</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Start Time:
                </label>
                <input
                  type="datetime-local"
                  className="w-full p-2 border rounded"
                  {...register("startTime")}
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  End Time:
                </label>
                <input
                  type="datetime-local"
                  className="w-full p-2 border rounded"
                  {...register("endTime")}
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Total Cost:
                </label>
                <p className="w-full p-2 border rounded">{totalCost}</p>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  className="mr-2 p-2 text-white bg-red-500 rounded"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="p-2 text-white bg-blue-500 rounded"
                >
                  Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersingelBikepage;
