import React from "react";
import { AppUrlConst } from "../../services/AppUrlConst";
import AppList from "../common/AppList";
import SubjectForm from "./SubjectForm";
function SubjectList() {
  const columns = [
    { label: "Id", name: "id" },
    { label: "Name", name: "name" },
    { label: "Description", name: "description" },
  ];
  const permission = { read: true, edit: true, delete: false };
  return (
    <div>
      <h1>Standard List</h1>
      <AppList
        columns={columns}
        permission={permission}
        url={AppUrlConst.Subject()}
      >
        <SubjectForm />
      </AppList>
    </div>
  );
}

export default SubjectList;
