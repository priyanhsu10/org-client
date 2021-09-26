import React from "react";
import CreateStandard from "./CreateStandard";
import { AppUrlConst } from "../../services/AppUrlConst";
import AppList from "../common/AppList";
function StandardList() {
  const columns = [
    { label: "Id", name: "id" },
    { label: "Name", name: "name" },
  ];
  const permission = { read: true, edit: true, delete: false };
  return (
    <div>
      <h1>Standard List</h1>
      <AppList
        columns={columns}
        permission={permission}
        url={AppUrlConst.Standard()}
      >
        <CreateStandard />
      </AppList>
    </div>
  );
}

export default StandardList;
