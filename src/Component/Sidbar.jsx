import { Link, Outlet } from "react-router-dom";
import "./Sidbar.css";
import LayoutNav from "./LayoutNav";
const Sidbar = () => {
  return (
    <div className="sidbar">
      <Link to="/" className="logo">
        <img src="earth (1).png" alt="logo image" />
        WorldWide
      </Link>

      <LayoutNav />
      <Outlet />
      <footer className="footer">
        <p className="copyright">
          &copy; copyright {new Date().getFullYear()} by Worldwide Inc
        </p>
      </footer>
    </div>
  );
};

export default Sidbar;
