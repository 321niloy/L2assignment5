import { baseApi } from "../../Api/baseApi";

export const BookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    Bookingbikes: builder.mutation({
      query: (args) => {
        return {
          url: "/rentals",
          method: "POST",
          body: args,
        };
      },
    }),

    getBookingsBike: builder.query({
      query: () => {
        return {
          url: "/rentals",
          method: "GET",
        };
      },
      providesTags: ["bookings"],
    }),

    getBookingsSingelBike: builder.query({
      query: (id) => {
        return {
          url: `/rentals/${id}`,
          method: "GET",
        };
      },
      providesTags: ["bookings"],
    }),
  }),
});

export const {
  useBookingbikesMutation,
  useGetBookingsBikeQuery,
  useGetBookingsSingelBikeQuery,
} = BookingApi;
