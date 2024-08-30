import { baseApi } from "../../Api/baseApi";

export const BikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllbikes: builder.query({
      query: () => {
        return {
          url: "/bikes",
          method: "GET",
        };
      },
      providesTags: ["bikes"],
    }),

    getSingelbike: builder.query({
      query: (id) => {
        return {
          url: `/bikes/${id}`,
          method: "GET",
        };
      },
      providesTags: ["bikes"],
    }),

    updateSingelbike: builder.mutation({
      query: (args) => {
        const { id, all } = args;
        console.log("Him", id, all);
        return {
          url: `/bikes/${id}`,
          method: "PUT",
          body: all,
        };
      },
      invalidatesTags: ["bikes"],
    }),

    createbike: builder.mutation({
      query: (args) => {
        return {
          url: `/bikes`,
          method: "POST",
          body: args,
        };
      },
      invalidatesTags: ["bikes"],
    }),

    deletebike: builder.mutation({
      query: (id) => {
        console.log(id, "lalala");
        return {
          url: `/bikes/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["bikes"],
    }),
  }),
});

export const {
  useGetAllbikesQuery,
  useGetSingelbikeQuery,
  useUpdateSingelbikeMutation,
  useCreatebikeMutation,
  useDeletebikeMutation,
} = BikeApi;
