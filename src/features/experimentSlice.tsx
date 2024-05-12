import { createSlice } from "@reduxjs/toolkit";
import { appAction } from "../shared/action/appStoreAction";

const experimentSlice = createSlice({
  name: "experiment",
  initialState: {
    experiment: 9,
  },
  reducers: {
    increaseExperiment: (state, action) => {
      state.experiment += action.payload;
    },
  },
});
// Action creators are generated for each case reducer function

export const { increaseExperiment } = experimentSlice.actions;

export default experimentSlice.reducer;
