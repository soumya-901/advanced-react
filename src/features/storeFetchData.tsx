import { createSlice } from "@reduxjs/toolkit";
import { appAction } from "../shared/action/appStoreAction";

export const counterSlice = createSlice({
  name: "incrementor",
  initialState: {
    value: 0,
    app: {
      appdata: 0,
      appdata2: 1,
    },
  },
  reducers: appAction,
});
// Action creators are generated for each case reducer function
export const { incrementByAmount, incrementforAppdata, incrementforAppdata2 } =
  counterSlice.actions;

export default counterSlice.reducer;
