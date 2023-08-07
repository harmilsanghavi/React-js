// dataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const preFetchSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    dataFetched: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
  },
});

export const { startLoading, dataFetched } = preFetchSlice.actions;
export default preFetchSlice.reducer;
