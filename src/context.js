import { createContext, useState } from "react";
const userDetailContext = createContext();

const UserDetailProvider = (props) => {
  var [userDetails, setUserDetails] = useState();
  const onSubmit = ({ User, password }) => {
    setUserDetails({ User, password });
  };

  return (
    <userDetailContext.Provider value={{ userDetails, onSubmit }}>
      {props.children}
    </userDetailContext.Provider>
  );
};

export { userDetailContext, UserDetailProvider };
