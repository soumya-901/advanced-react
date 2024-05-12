import React, { memo } from "react";
import { useSelector } from "react-redux";

const Showredux = () => {
  console.log("inside showredux");
  const appdata2 = useSelector((state: any) => state.incrementor.app.appdata2);
  return <div>Showredux {appdata2}</div>;
};

export default memo(Showredux);
