import React from "react";
import { OrgService } from "../../services/orgservice";
import List from "../common/List";
import { useEffect, useState } from "react";
import CreateOrg from "./CreateOrg";
import FormModel from "../common/FormModel";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function OrgList() {
  const orgSerivce = new OrgService();
  const [organisations, setOrganisations] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  let GridModel = {
    columns: [
      { label: "Id", name: "id" },
      { label: "Name", name: "name" },
      { label: "Description", name: "description" },
      { label: "Address", name: "address" },
    ],
    data: [organisations],
    edit: async (id, item) => {
      await orgSerivce.edit(id, item);
      getOrgs();
    },
    delete: async (id) => {
      await orgSerivce.delete(id);
    },
  };
  useEffect(() => {
    getOrgs();
  }, []);
  const add = (e) => {
    //open model to add data
    setShowAdd((s) => !s);
  };
  const onSave = async (data) => {
    await orgSerivce.create(data);
    await getOrgs();
    toast.success("save sucessfully...");
  };
  const getOrgs = async () => {
    const value = await orgSerivce.getAll();
    setOrganisations(value);
    GridModel.data = organisations;
  };
  return (
    <>
      <div className="row">
        <div className="col-sm-10">
          <h5>List of organiations</h5>
        </div>
        <div className="col-sm-2">
          <button onClick={add}>Add</button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          {organisations && organisations.length > 0 && (
            <List gridModel={{ ...GridModel, data: organisations }} />
          )}
        </div>
      </div>

      {showAdd && (
        <FormModel show={showAdd}>
          <CreateOrg heading="Create organization" onAdd={onSave} />
        </FormModel>
      )}
    </>
  );
}

export default OrgList;
