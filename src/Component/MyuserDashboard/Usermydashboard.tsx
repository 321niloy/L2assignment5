import { useAppSelector } from "../../Redux/hooks";
import { useGetSingelUserQuery } from "../../Redux/Features/users/userApi";
import UserUpdateForm from "../UserUpdateform/Userupdate";

const Usermydashboard = () => {
  const user = useAppSelector((state) => state.auth.user);
  const { data } = useGetSingelUserQuery(user?.email);
  return (
    <div>
      <h1 className="text-white text-center text-5xl mt-14">
        Welcome {data?.data?.name}
      </h1>

      <div>
        <h1 className="my-16 text-4xl italic font-bold text-[#00A2E2] text-center">
          {data?.data?.role &&
            `${data.data.role.charAt(0).toUpperCase()}${data.data.role
              .slice(1)
              .toLowerCase()}`}{" "}
          Details
        </h1>

        <div>
          <div className="flex justify-center text-center gap-6 text-2xl text-white">
            <h1>Name: {data?.data?.name}</h1>
            <h1>Email: {data?.data?.email}</h1>
          </div>

          <div className="flex justify-center text-center gap-6 text-2xl text-white mt-8">
            <h1>Phone: {data?.data?.phone}</h1>
            <h1>Address: {data?.data?.address}</h1>
          </div>
        </div>
      </div>

      <div>
        <h1 className="mt-16 text-4xl italic font-bold text-[#00A2E2] text-center">
          {" "}
          Update User
        </h1>
        <div className="mt-7">
          <UserUpdateForm></UserUpdateForm>
        </div>
      </div>
    </div>
  );
};

export default Usermydashboard;
