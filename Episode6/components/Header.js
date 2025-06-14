import { LOGO_URL } from "../src/utils/constants";
import { useState } from "react";
const Header = () => {

  const [lbtn, setLbtn] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="ice cream bomma logo of our APP"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>About</li>
          <li>Cart</li>
          <li>Home</li>
        </ul>
      </div>
      <button
        onClick={() => {
          setLbtn((lbtn) => (lbtn === "Login" ? "Logout" : "Login"));
        }}
      >
        {lbtn}
      </button>
    </div>
  );
};

export const praveen =
  "These is the mixture of both default export and the named export";
export default Header;
