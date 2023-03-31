import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


interface Post {
  id: number,
  name: string,
  company: {
    name: string,
  }
}
type PostsResponse = Post[]

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getUserData: builder.query<PostsResponse, void>({      
      query: () => '/users',      
    }),
    
    deleteUserData: builder.mutation<Post, Partial<Post>>({
     
     query: (id) => ({
       url: `/users${id}`,
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

