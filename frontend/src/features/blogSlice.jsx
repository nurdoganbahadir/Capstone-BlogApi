import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blog: [],
  categories: [],
  details: [],
  loading: false,
  error: false,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },

    getBlogSuccess: (state, { payload }) => {
      state.loading = false;
      state.blog = payload.data.data;
      state.details = payload.data.details;
    },

    getCategoriesSuccess: (state, { payload }) => {
      state.loading = false;
      state.categories = payload.data.data;
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, getBlogSuccess, getCategoriesSuccess, fetchFail } =
  blogSlice.actions;

export default blogSlice.reducer;
