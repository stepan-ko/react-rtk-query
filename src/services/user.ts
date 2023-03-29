import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://jsonplaceholder.typicode.com`,
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
     getUserData: builder.query<any, void>({
      query: () => '/users'      
     }),
    // deleteUserData: builder.mutation<any, any>({
    // код ендпоинта
    // }),
  }),
});

export const {
   useGetUserDataQuery
  // useDeleteUserDataMutation,
} = userApi;
