import React from "react";
import { useState } from "react";

const Login = () => {
  console.log("rendering cycles");
  const [login, setLogin] = useState("Login");
  const handleClick = () => {
    login === "Login" ? setLogin("Logout") : setLogin("Login");
  };

  return (
    <>
      <button onClick={handleClick}>{login}</button>  
      {/* <button onClick={() =>setLogin("Logout")}>{login}</button> */} line 2
    </>
  );
};

export default Login;

