import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


interface User {
  id: number,
  name: string,
  company: {
    name: string,
  }
}
type UserModel = User[]

export interface UserDeleteInterface {
    id: number,  
}
type UserDelete = UserDeleteInterface

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getUserData: builder.query<UserModel, void>({      
      query: () => '/users',      
    }),
    
    deleteUserData: builder.mutation<UserDelete, { userDelete: UserDelete }>({
     
     query: ({userDelete}) => ({
       url: `/users/${userDelete.id}`,
       method: 'DELETE',       
     }),
     
     invalidatesTags: [{ type: 'Post', id: 'LIST' }],
   }),
  })
})


export const {
  useGetUserDataQuery,
  useDeleteUserDataMutation,
} = userApi;

