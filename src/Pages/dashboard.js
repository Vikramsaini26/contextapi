import React from "react";
import { useSelector } from "react-redux";

const ChildComponent = () => {
  const userDetails = useSelector((state) => state.user);
  return (
    <div>
      <h2>Profile</h2>
      <h4> Name: {userDetails?.User}</h4>
      <h4>Password: {userDetails?.password}</h4>
    </div>
  );
};

export default ChildComponent;
