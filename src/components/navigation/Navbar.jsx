import React from "react";
import { Link } from "react-router-dom";
import AppNavLink from "./AppNavLink";
const getRoutes = () => {
  const routes = [];
  routes.push({ key: "/organisation", value: "Organisation" });
  routes.push({ key: "/department", value: "Department" });
  routes.push({ key: "/standard", value: "Standard" });
  routes.push({ key: "/branch", value: "Branch" });
  routes.push({ key: "/class", value: "Class" });
  routes.push({ key: "/subject", value: "Subject" });
  routes.push({ key: "/student", value: "Student" });
  routes.push({ key: "/staff", value: "Staff" });
  routes.push({ key: "/exams", value: "Exams" });
  return routes;
};
function Navbar() {
  const routes = getRoutes();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Org Manangement
          </Link>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {routes.map((x) => (
                <AppNavLink to={x.key} label={x.value} key={x.key} />
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
