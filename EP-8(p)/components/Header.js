import { Link } from "react-router-dom";

const Header = () => {
  // console.log("The Header is rendering");
  return (
    <div className="box">
          <div id="header-items">
              <ul>
                 <Link to="/about"><li>About</li></Link>
                 <Link to="/home"><li>Home</li></Link> 
                  <Link to="/contacts"><li>Contacts</li></Link>
              </ul>
      </div>
    </div>
  );
};
export default Header;
