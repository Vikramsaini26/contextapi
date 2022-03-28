import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { userDetailContext } from "../context";

const UserDetailsComponent = () => {
  const [User, setUser] = useState("");
  const [password, setpassword] = useState("");

  const { onSubmit } = useContext(userDetailContext);
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
      <button onClick={() => onSubmit({ User, password })}>
        <Link to="/dashboard"> Login </Link>
      </button>
    </div>
  );
};

export default UserDetailsComponent;
