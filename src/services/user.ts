import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://jsonplaceholder.typicode.com/`,
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getUserData: builder.query<any, void>({
      query: () => `/posts`,
      providesTags: ["Post"],
    }),
    updateUserData: builder.mutation<any, any>({
      query: (id) => {
        return {
          url: `/posts/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetUserDataQuery,
  useUpdateUserDataMutation,
} = userApi;
