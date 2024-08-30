/* eslint-disable @typescript-eslint/no-explicit-any */
import Swal from "sweetalert2";
import {
  useDeleteSingelUserMutation,
  useGetAllUserQuery,
  useUpdateSingelUserMutation,
} from "../../Redux/Features/users/userApi";

const AdminUserManage = () => {
  const { data } = useGetAllUserQuery("df");

  const [deleteSingelUser] = useDeleteSingelUserMutation();
  const [updateSingelUser] = useUpdateSingelUserMutation();

  const handaleAdmin = async (email: string) => {
    const doAdmin = {
      role: "user",
    };

    const all = {
      email: email,
      payload: doAdmin,
    };
    const res = await updateSingelUser(all);
    if (res.data?.success === true) {
      Swal.fire("Successfully Doing USER!!!");
    }
  };

  const handaleUser = async (email: string) => {
    const doUser = {
      role: "admin",
    };

    const all = {
      email: email,
      payload: doUser,
    };
    const res = await updateSingelUser(all);
    if (res.data?.success === true) {
      Swal.fire("Successfully Doing Admin!!!");
    }
  };

  const handaleDelete = async (email: string) => {
    console.log("Something it");
    const res = await deleteSingelUser(email);

    if (res.data?.success === true) {
      Swal.fire("Successfully Delete!!!");
    }
  };

  return (
    <div className="mt-16 mr-16 mb-16">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.result.map((item: any) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.name}
                </th>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4 text-black font-semibold italic">
                  {item.role}
                </td>
                <td className="px-6 py-4">
                  {item.role === "admin" ? (
                    <button
                      onClick={() => handaleAdmin(item.email)}
                      className="bg-[#00A2E2] w-16  py-3 border round rounded-xl  font-medium text-white dark:text-blue-500 hover:underline"
                    >
                      User
                    </button>
                  ) : (
                    <button
                      onClick={() => handaleUser(item.email)}
                      className="bg-[#00A2E2] w-16 py-3 border round rounded-xl   font-medium text-white dark:text-blue-500 hover:underline"
                    >
                      Admin
                    </button>
                  )}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handaleDelete(item.email)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUserManage;
