import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import { Button, Grid } from "@mui/material";
import GetBackendData from "./components/GetBackendData";
import { useDispatch, useSelector } from "react-redux";
import Testing from "./components/Testing";
import {
  incrementByAmount,
  incrementforAppdata,
  incrementforAppdata2,
} from "./features/storeFetchData";
import Showredux from "./components/Showredux";
import { increaseExperiment } from "./features/experimentSlice";

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);

  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = useCallback(() => setOpen(false), []);
  const increment = () => {
    setCounter(counter + 1);
    // Increment the counter without re-rendering
  };
  const count = useSelector((state: any) => state.incrementor.value);
  const exp = useSelector((state: any) => state.notes.experiment);

  console.log("get ting props data ", count);
  const dispatch = useDispatch();
  console.log("inside app component");
  useEffect(() => {
    console.log("insisde  app compoent useeffect ");
    return () => {};
  }, [counter]);

  return (
    <>
      <p>props value = {count}</p>
      <button onClick={() => dispatch({ type: "increment-value" })}>
        increment
      </button>
      <Button onClick={() => dispatch(incrementforAppdata2(1))}>
        my button for testing
      </Button>
      <Button onClick={handleOpen}>Open modal</Button>
      <p>Count: {counter}</p>
      <button onClick={increment}>Increment</button>
      {open && <GetBackendData handleClose={handleClose} open={open} />}{" "}
      <Testing />
      belo is a rudux component
      <Showredux />
      <Grid mt={4}>
        this is non persist storeage
        <p>this is non persisit value {exp}</p>
        <Button onClick={() => dispatch(increaseExperiment(9))}>
          non persist
        </Button>
      </Grid>
    </>
  );
}

export default App;
