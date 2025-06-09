
import { LOGO_URL } from "../utils/contents";
const Header = () => {
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
    </div>
  );
};

export const praveen = "These is the mixture of both default export and the named export";
export default Header;