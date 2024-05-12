import { Button } from "@mui/material";
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementforAppdata } from "../features/storeFetchData";
import Smallcomponent from "./Smallcomponent";

const Testing = () => {
  console.log("inside testing");
  // const count = useSelector((state: any) => state.incrementor.app.appdata);
  const dispatch = useDispatch();
  return (
    <>
      <div>testing component </div>
      <Smallcomponent />
      <Button onClick={() => dispatch(incrementforAppdata(1))}>
        my button
      </Button>
    </>
  );
};

export default memo(Testing);
