import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const randomDataSlice = createSlice({
  name: "randomData",
  initialState: {
    value: {},
  },
  reducers: {
    storeData: (state, dbRes) => {
      state.value = dbRes;
    },
  },
});

export const { storeData } = randomDataSlice.actions;

export default randomDataSlice.reducer;
