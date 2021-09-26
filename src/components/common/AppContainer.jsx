import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import BranchHome from "../branch/BranchHome";
import DepartmentHome from "../department/DepartmentHome";
import Navbar from "../navigation/Navbar";
import OrgHome from "../org/OrgHome";
import StdclassHome from "../stdclass/StdclassHome";
import StudentHome from "../student/StudentHome";
import SubjectHome from "../subject/SubjectHome";
import ExamHome from "../exams/ExamHome";
import Home from "../Home";
import StaffHome from "../staff/StaffHome";
import StandardHome from "../standard/StandardHome";
function AppContainer() {
  return (
    <Router>
      <Navbar />
      <div className="container text-start">
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/organisation" component={OrgHome} />
          <Route path="/department" component={DepartmentHome} />
          <Route path="/branch" component={BranchHome} />
          <Route path="/class" component={StdclassHome} />
          <Route path="/subject" component={SubjectHome} />
          <Route path="/student" component={StudentHome} />
          <Route path="/staff" component={StaffHome} />
          <Route path="/exams" component={ExamHome} />
          <Route path="/standard" component={StandardHome} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppContainer;
