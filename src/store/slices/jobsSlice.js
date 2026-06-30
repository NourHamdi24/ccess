import { createSlice } from "@reduxjs/toolkit";

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    selectedJobCategory: 0,
  },
  reducers: {
    setSelectedJobCategory(state, action) {
      state.selectedJobCategory = action.payload;
    },
    clearSelectedJobCategory(state) {
      state.selectedJobCategory = null;
    },
  },
});

export const { setSelectedJobCategory, clearSelectedJobCategory } =
  jobsSlice.actions;

export default jobsSlice.reducer;
