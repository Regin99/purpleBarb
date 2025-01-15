import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://clicsushi.store/';

export const barbApi = createApi({
  reducerPath: 'barbApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: builder => ({
    getPolicy: builder.query({
      query: () => 'policy',
    }),
  }),
});

export const {useGetPolicyQuery} = barbApi;
