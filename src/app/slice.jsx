import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  users: [],
  loading: "idle",
  error: null,
};

export const getApi = createAsyncThunk("getApi", async () => {
  const response = await axios.get("https://api.tvmaze.com/search/shows?q=all");
  console.log(response.data);
  return response.data;
});

const TeamSlice = createSlice({
  name: "apiDetails",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getApi.pending, (state) => {
        state.loading = "idle";
      })
      .addCase(getApi.fulfilled, (state, action) => {
        state.loading = "success";
        state.users = action.payload;
      })
      .addCase(getApi.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error;
      });
  },
});

export default TeamSlice.reducer;
