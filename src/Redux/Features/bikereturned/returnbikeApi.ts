import { baseApi } from "../../Api/baseApi";

export const returnBikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    returnBike: builder.mutation({
      query: (args) => {
        return {
          url: "/returnbike",
          method: "POST",
          body: args,
        };
      },
      invalidatesTags: ["bookings"],
    }),

    returnBikeSuccessfullyUser: builder.query({
      query: (email) => {
        console.log(email, "should");
        return {
          url: `/returnbikeemail/${email}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useReturnBikeMutation, useReturnBikeSuccessfullyUserQuery} =
  returnBikeApi;
