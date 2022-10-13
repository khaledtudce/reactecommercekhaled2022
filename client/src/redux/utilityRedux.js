import { createSlice } from "@reduxjs/toolkit";

const utilitySlice = createSlice({
  name: "utility",
  initialState: {
    lanaguageselection: "",
  },
  reducers: {
    setLanaguageselection: (state, action) => {
      state.lanaguageselection = action.payload;
      console.log(action.payload);
    },
  },
});

export const { setLanaguageselection } = utilitySlice.actions;
export default utilitySlice.reducer;
