import { baseApi } from "../../Api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (signUp) => {
        return {
          url: "/users/signup",
          method: "POST",
          body: signUp,
        };
      },
    }),

    loginUp: builder.mutation({
      query: (paramsLogin) => {
        console.log(paramsLogin, "Login up RTK");
        return {
          url: "/users/login",
          method: "POST",
          body: paramsLogin,
        };
      },
    }),
  }),
});

export const { useSignUpMutation, useLoginUpMutation } = authApi;
