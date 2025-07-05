import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
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
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
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



export default Header;
