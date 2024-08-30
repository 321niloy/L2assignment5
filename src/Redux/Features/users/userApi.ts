import { baseApi } from "../../Api/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSingelUser: builder.query({
      query: (email) => {
        return {
          url: `/users/me/${email}`,
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),

    getAllUser: builder.query({
      query: () => {
        return {
          url: `/users/me/`,
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),

    updateSingelUser: builder.mutation({
      query: (args) => {
        const { email, payload } = args;
        console.log("check up email", email);
        console.log("check up payload", payload);
        return {
          url: `/users/me/${email}`,
          method: "PUT",
          body: payload,
        };
      },
      invalidatesTags: ["user"],
    }),

    deleteSingelUser: builder.mutation({
      query: (email) => {
        return {
          url: `/users/me/${email}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["user"],
    }),

    getSingelByidUser: builder.query({
      query: (id) => {
        return {
          url: `/me/${id}`,
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),
  }),
});

export const {
  useGetSingelUserQuery,
  useUpdateSingelUserMutation,
  useGetAllUserQuery,
  useDeleteSingelUserMutation,
  useGetSingelByidUserQuery,
} = userApi;
