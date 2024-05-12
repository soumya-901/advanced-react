import { counterSlice } from "../../features/storeFetchData";

export const appAction = () => {
  let incrementByAmount = (state: any, action: any) => {
    console.log("action ", action, "state ", state);
    state.value = action.payload;
  };
  let incrementforAppdata = (state: any, action: any) => {
    state.app.appdata += action.payload;
  };
  let incrementforAppdata2 = (state: any, action: any) => {
    state.app.appdata2 += action.payload;
  };
  return { incrementByAmount, incrementforAppdata, incrementforAppdata2 };
};

// // Action creators are generated for each case reducer function
// export const { incrementByAmount  = counterSlice.actions;
