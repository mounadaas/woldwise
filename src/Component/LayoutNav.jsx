import { NavLink } from "react-router-dom";
import "./LayoutNav.css";

const LayoutNav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink to="ceties">Ceties</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default LayoutNav;
