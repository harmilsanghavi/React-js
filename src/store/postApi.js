import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/posts'//,
    // prepareHeaders: (headers, { getState }) => {
    //   headers.set('ABC', 'ABC')
    //   return headers
    // }
  }),
  tagTypes: ['Posts'],
  endpoints: (build) => ({
    listPosts: build.query({
      query: (page = 1) => `?_page=${page}`,
    }),
    deletePost: build.mutation({
      query(id) {
        return {
          url: `post/${id}`,
          method: 'DELETE',
        }
      },
      // Invalidates the tag for this Post `id`, as well as the `PARTIAL-LIST` tag,
      // causing the `listPosts` query to re-fetch if a component is subscribed to the query.
      invalidatesTags: (result, error, id) => [
        { type: 'Posts', id },
        { type: 'Posts', id: 'PARTIAL-LIST' },
      ],
    }),
  }),
})


export const { useListPostsQuery } = postApi;