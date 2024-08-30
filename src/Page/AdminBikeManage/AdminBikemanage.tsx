/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  useDeletebikeMutation,
  useGetAllbikesQuery,
} from "../../Redux/Features/getBikes/BikeApi";
import Swal from "sweetalert2";

const AdminBikemanage = () => {
  const { data, error, isLoading } = useGetAllbikesQuery(undefined);

  // Filter states
  const [brandFilter, setBrandFilter] = useState("");
  const [modelFilter, setModelFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");
  const [deletebike, { isSuccess }] = useDeletebikeMutation();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Unable to fetch bikes</p>;

  // Filter logic
  const filteredBikes = data?.data?.bike.filter((bike: any) => {
    const matchesBrand = brandFilter
      ? bike.brand.toLowerCase().includes(brandFilter.toLowerCase())
      : true;
    const matchesModel = modelFilter
      ? bike.model.toLowerCase().includes(modelFilter.toLowerCase())
      : true;
    const matchesAvailability = availabilityFilter
      ? bike.availability === availabilityFilter
      : true;
    return matchesBrand && matchesModel && matchesAvailability;
  });

  const handleDelete = async (id: string) => {
    await deletebike(id);
  };

  if (isSuccess) {
    Swal.fire("Successfully Deleted !!!");
  }
  return (
    <div className="p-4">
      {/* Filter inputs */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter by brand"
          value={brandFilter}
          onChange={(e) => setBrandFilter(e.target.value)}
          className="mr-2 p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Filter by model"
          value={modelFilter}
          onChange={(e) => setModelFilter(e.target.value)}
          className="mr-2 p-2 border rounded"
        />
        <select
          value={availabilityFilter}
          onChange={(e) => setAvailabilityFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Select Availability</option>
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
      </div>

      {/* Bike list */}
      <div className="rounded-xl">
        {filteredBikes?.map((item: any) => (
          <div className="flex mb-10">
            <div className="w-[60%]">
              <img src={item.image}></img>
            </div>
            <div className="bg-[#00A2E2] text-white w-[40%] p-7">
              <h1 className="text-xl">
                <span className="font-bold">Name: </span>
                {item.name}
              </h1>
              <h1 className="text-xl">
                <span className="font-bold">Availability: </span>
                {item.isAvailable ? <span>True</span> : <span>False</span>}
              </h1>

              <h1 className="text-xl">
                <span className="font-bold">Describtion: </span>
                {item.description}
              </h1>
              <h1 className="text-xl">
                <span className="font-bold">Price Hour: </span>
                {item.pricePerHour}
              </h1>

              <h1 className="text-xl">
                <span className="font-bold">CC: </span>
                {item.cc}
              </h1>

              <h1 className="text-xl">
                <span className="font-bold">Year: </span>
                {item.year}
              </h1>
              <h1 className="text-xl">
                <span className="font-bold">Model: </span>
                {item.model}
              </h1>
              <h1 className="text-xl">
                <span className="font-bold">Brand: </span>
                {item.brand}
              </h1>
              <div className="flex gap-6 mt-5">
                <Link
                  to={`/dashboard/admin/updatebike/${item._id}`}
                  className="p-3 text-white bg-[#042da9] rounded-xl"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="p-3 text-white bg-[#042da9] rounded-xl"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminBikemanage;

// AdminBikemanage
