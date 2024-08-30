/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetAllbikesQuery } from "../../Redux/Features/getBikes/BikeApi";

const AllBikeListing = () => {
  const { data, error, isLoading } = useGetAllbikesQuery(undefined);

  // Filter states
  const [brandFilter, setBrandFilter] = useState("");
  const [modelFilter, setModelFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredBikes.map((item: any) => (
          <div
            key={item._id}
            className="max-w-sm bg-black border border-gray-200 rounded-lg shadow-[#00A2E2] dark:bg-gray-800 dark:border-gray-700"
          >
            <Link to="#">
              <img className="rounded-t-lg" src={item.image} alt={item.name} />
            </Link>
            <div className="p-5">
              <Link to="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                  {item.name}
                </h5>
              </Link>
              <Link
                to={`/dashboard/sigelbikelist/${item._id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#00A2E2] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                View Details
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBikeListing;
