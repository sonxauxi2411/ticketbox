import "./layout.scss";
import logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo text-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="header-navbar">
        <div className="header-link">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            state={{ name: "Main Dashboard" }}
          >
            <span className="pe-2">
              <FaHome />
            </span>
            <span> Main Dashboard</span>
          </NavLink>
        </div>
        <div className="header-link">
          <NavLink to="/organization" state={{ name: "Organization" }}>
            Organization
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
