// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const AdminSlice = createApi({
//     reducerPath: 'AdminApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/accounts' }),
//     endpoints: (builder) => ({
//         useAdminQuery: builder.query({
//         query: () => `accounts`,
//       }),
//     }),
//   })

//   export const { useAdminQuery } = AdminSlice

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const AdminSlice = createApi({
    reducerPath: 'AdminApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
    endpoints: (builder) => ({
        // Use the correct endpoint name "getPokemonByName"
        getAccounts: builder.query({
            query: () => `accounts`,
            providesTags: ['accounts'],
        }),
        addAccounts: builder.mutation({
            query: (amount, id) => ({
                url: "accounts",
                method: 'POST',
                body: { amount, id }
            }),
            invalidatesTags: ['accounts']
        }),
        deleteAccount: builder.mutation({
            query: (id) => ({
                url: `accounts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['accounts']
        }),
        updateAccount: builder.mutation({
            query: ({id,amount}) => ({
                url: `accounts/${id}`,
                method: 'PATCH',
                body:{amount}
            }),
            invalidatesTags: ['accounts']
        }),
    }),
});

// Export the correct function name "useGetPokemonByNameQuery"
export const { useGetAccountsQuery, useAddAccountsMutation,useDeleteAccountMutation, useUpdateAccountMutation } = AdminSlice;
