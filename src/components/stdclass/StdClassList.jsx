import React from "react";

function StdClassList() {
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
        <CreateClass />
      </AppList>
    </div>
  );
}

export default StdClassList;
