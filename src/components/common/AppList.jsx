import React from "react";
import List from "../common/List";
import { useEffect, useState } from "react";
import FormModel from "../common/FormModel";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppService } from "../../services/AppService";
function AppList({ url, columns, permission, children }) {
  const appSerivce = new AppService(url);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [gridData, setOrganisations] = useState([]);
  const [mode, setMode] = useState("add");
  const [editData, setEditData] = useState({});
  let GridModel = {
    columns: columns,
    permission: permission,
    data: [gridData],
    edit: async (id, item) => {
      setEditData(item);
      setMode("edit");
      setShow(true);
    },
    delete: async (id) => {},
  };
  useEffect(() => {
    getList();
  }, []);
  const add = (e) => {
    //open model to add data
    setShow((s) => !s);
  };
  const onSave = async (data) => {
    await appSerivce.create(data);
    await getList();
    setShow(false);
    setMode("add");
    toast.success("save sucessfully...");
  };
  const onUpdate = async (id, data) => {
    await appSerivce.update(id, data);
    await getList();
    setShow(false);
    setMode("add");
    toast.success("updated sucessfully...");
  };
  const getList = async () => {
    const value = await appSerivce.getAll();
    setOrganisations(value);
    GridModel.data = gridData;
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
          {gridData && gridData.length > 0 && (
            <List gridModel={{ ...GridModel, data: gridData }} />
          )}
        </div>
      </div>

      {show && (
        <FormModel
          show={show}
          onClose={handleClose}
          heading="Create organization"
          onAdd={onSave}
          existingData={editData}
          mode={mode}
          onUpdate={onUpdate}
        >
          {children}
        </FormModel>
      )}
    </>
  );
}

export default AppList;
