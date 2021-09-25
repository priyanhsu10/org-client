import React from "react";
import { NavLink } from "react-router-dom";
function AppNavLink({ to, label }) {
  return (
    <NavLink to={to} className="nav-link" activeClassName="active">
      {label}
    </NavLink>
  );
}

export default AppNavLink;
