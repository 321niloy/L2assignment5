import { useReturnBikeSuccessfullyUserQuery } from "../../Redux/Features/bikereturned/returnbikeApi";
import { useAppSelector } from "../../Redux/hooks";

const ReturnBikeSingel = () => {
  const state = useAppSelector((state) => state.auth.user);

  const { data } = useReturnBikeSuccessfullyUserQuery(state?.email);
  console.log(data, "hi");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-[#00A2E2] shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center text-white">
          Return Bike Details
        </h1>
        {data ? (
          <>
            <div className="mb-4">
              <h2 className="text-lg font-semibold">User Name:</h2>
              <p className="text-white">{data?.data.userName}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-semibold">Bike Name:</h2>
              <p className="text-white">{data?.data.bikeName}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-semibold">Message:</h2>
              <p className="text-green-600">{data.message}</p>
            </div>
          </>
        ) : (
          <p className="text-white text-4xl text-center">No Return Data</p>
        )}
      </div>
    </div>
  );
};

export default ReturnBikeSingel;
