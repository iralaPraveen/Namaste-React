import { LOGO_URL } from "../src/utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Inside JSX:
<li>
  <Link to="/about">About</Link>
</li>

const Header = () => {
  const [lbtn, setLbtn] = useState("Login");
  console.log("Header rendered");
  useEffect(() => {
    console.log("useEffect is rendered");
  }, []);

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
          {/* <li><a href="/about">About</a></li>  using like these in react is not encouraged*/}
          <li>
            {/* <a href="/about">About</a> */}
            <Link to="/about">About</Link>
          </li>

          <li>
            <a href="/contacts">Cart</a>
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

export const praveen =
  "These is the mixture of both default export and the named export";
export default Header;
