import { NavLink, Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="logo">
        <img src="earth (1).png" alt="logo image" />
        <span className="worldwide">WorldWide</span>
      </Link>
      <ul>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <Link to="/login" className="ctalogin">
            Log In
          </Link>
          <Link to="/login" className=" user">
            <i className="fa-solid fa-user"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
