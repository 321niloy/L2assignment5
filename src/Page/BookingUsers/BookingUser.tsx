/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetBookingsBikeQuery } from "../../Redux/Features/Booking/BookingApi";
import { useGetAllbikesQuery } from "../../Redux/Features/getBikes/BikeApi";
import { useGetAllUserQuery } from "../../Redux/Features/users/userApi";
import { useReturnBikeMutation } from "../../Redux/Features/bikereturned/returnbikeApi";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const BookingUser = () => {
  const { data: bookingData } = useGetBookingsBikeQuery("lala");
  const { data: bikesData } = useGetAllbikesQuery("kala");
  const { data: usersData } = useGetAllUserQuery("alluse");
  const [returnBike] = useReturnBikeMutation();

  // Ensure all data is loaded before processing
  if (!bookingData || !bikesData || !usersData) {
    return <div>Loading...</div>;
  }

  // Access the data inside the .data property
  const bookingsArray = Array.isArray(bookingData.data) ? bookingData.data : [];
  const bikesArray = Array.isArray(bikesData.data.bike)
    ? bikesData.data.bike
    : [];
  const usersArray = Array.isArray(usersData.data.result)
    ? usersData.data.result
    : [];

  // Create a merged array only if all are arrays
  const mergedData = bookingsArray.map((booking: any) => {
    const bike = bikesArray.find(
      (bike: any) => String(bike._id) === String(booking.bikeId)
    );
    const user = usersArray.find(
      (user: any) => String(user._id) === String(booking.userId)
    );

    return {
      ...booking,
      bike, // Attach the bike object
      user, // Attach the user object
    };
  });

  const handleReturn = async (
    bookingId: any,
    bikeId: any,
    userName: any,
    bikeName: any,
    userEmail: any
  ) => {
    const all = {
      bookingId: bookingId,
      bikeId: bikeId,
      bikeName: bikeName,
      userName: userName,
      userEmail: userEmail,
    };

    const res = await returnBike(all);
    if (res.data.success) {
      Swal.fire("Retrun Successfull");
    }
  };

  return (
    <div>
      {mergedData.map((item: any) => (
        <div className="flex mb-10">
          <div className="w-[60%]">
            <img src={item.bike.image}></img>
          </div>
          <div className="bg-[#00A2E2] text-white w-[40%] p-7">
            <h1 className="text-xl">
              <span className="font-bold">User Name: </span>
              {item.user.name}
            </h1>

            <h1 className="text-xl">
              <span className="font-bold">Bike Name: </span>
              {item.bike.name}
            </h1>
            <h1 className="text-xl">
              <span className="font-bold">Availability: </span>
              {item.isAvailable ? <span>True</span> : <span>False</span>}
            </h1>

            <h1 className="text-xl">
              <span className="font-bold">Price Hour: </span>
              {item.bike.pricePerHour}$
            </h1>

            <h1 className="text-xl">
              <span className="font-bold">User Cost Depent on Time: </span>
              {item.totalCost}$
            </h1>
            <h1 className="text-xl">
              <span className="font-bold">Bike Model: </span>
              {item.bike.model}
            </h1>
            <h1 className="text-xl">
              <span className="font-bold">Bike Brand: </span>
              {item.bike.brand}
            </h1>
            <h1 className="text-xl">
              <span className="font-bold">Start time: </span>
              {item.startTime}
            </h1>
            <h1 className="text-xl">
              <span className="font-bold">Return time: </span>
              {item.returnTime}
            </h1>
            <div className="flex gap-6 mt-5">
              <button
                onClick={() =>
                  handleReturn(
                    item._id,
                    item.bike._id,
                    item.user.name,
                    item.bike.name,
                    item.user.email
                  )
                }
                className="p-3 text-white bg-[#042da9] rounded-xl"
              >
                Return
              </button>
              <Link
                to={`/dashboard/admin/extratimeReturn/${item._id}`}
                className="p-3 text-white bg-[#042da9] rounded-xl"
              >
                Late Return
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingUser;
