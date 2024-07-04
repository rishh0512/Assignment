import React from "react";
import { FaHome, FaBell, FaChevronDown, FaUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div variant="h6" style={{ width: "100%", color: "white" }}>
      Dashboard
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <nav style={{ display: "flex", alignItems: "center" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <FaHome style={{ color: "white" }} />
          </Link>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            return (
              <React.Fragment key={to}>
                <span style={{ color: "white", margin: "0 8px" }}>/</span>
                <Link to={to} style={{ color: "white", textDecoration: "none" }}>
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </Link>
              </React.Fragment>
            );
          })}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", color: "white" }}>
            <span>Nanny's Shop</span>
            <FaChevronDown style={{ marginLeft: "5px" }} />
          </div>
          <FaBell style={{ color: "white" }} />
          <FaUser style={{ color: "white" }} />
        </div>
      </div>
    </div>
  );
};

export default Header;
