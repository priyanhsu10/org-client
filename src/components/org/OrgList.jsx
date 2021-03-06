import React from "react";
import { AppUrlConst } from "../../services/AppUrlConst";
import AppList from "../common/AppList";
import CreateOrg from "./CreateOrg";
function OrgList() {
  const columns = [
    { label: "Id", name: "id" },
    { label: "Name", name: "name" },
    { label: "Description", name: "description" },
    { label: "Address", name: "address" },
  ];
  const permission = { read: true, edit: true, delete: false };
  return (
    <div>
      <h1>Organizations</h1>
      {/* <OrgList /> */}
      <AppList
        columns={columns}
        permission={permission}
        url={AppUrlConst.Organization()}
      >
        <CreateOrg />
      </AppList>
    </div>
  );
}

export default OrgList;
