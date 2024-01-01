import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TAnalyse } from './types';

const analysesAPIURL = process.env.REACT_APP_URL;
export const analysisAPI = createApi({
  reducerPath: 'analysisAPI',
  baseQuery: fetchBaseQuery({ baseUrl: analysesAPIURL }),
  endpoints: (build) => ({
    getAnalysisDictionary: build.query<TAnalyse[], string>({
      query: () => ({
        url: `/analysis/dictionary`,
      }),
    }),
  }),
});
