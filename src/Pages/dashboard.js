import React, { useContext } from "react";
import { userDetailContext } from "../context";

const ChildComponent = () => {
  var { userDetails } = useContext(userDetailContext);

  return (
    <div>
      <h2>Profile</h2>
      <h4> Name: {userDetails?.User}</h4>
      <h4>Age: {userDetails?.password}</h4>
    </div>
  );
};

export default ChildComponent;
