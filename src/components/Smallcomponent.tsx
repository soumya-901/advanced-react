import React from "react";
import { useSelector } from "react-redux";

const Smallcomponent = () => {
  console.log("inside small component");
  const counttesting = useSelector(
    (state: any) => state.incrementor.app.appdata
  );
  return <div>Showing test data - {counttesting}</div>;
};

export default Smallcomponent;
