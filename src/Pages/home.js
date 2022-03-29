import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../actions/index";

const UserDetailsComponent = () => {
  const [User, setUser] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();
  return (
    <div>
      <h1> Login</h1>
      <input
        type="text"
        placeholder="User"
        onChange={(e) => setUser(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setpassword(e.target.value)}
      />
      <br />
      <button onClick={() => dispatch(addUser({ User, password }))}>
        <Link to="/dashboard"> Login </Link>
      </button>
    </div>
  );
};

export default UserDetailsComponent;
