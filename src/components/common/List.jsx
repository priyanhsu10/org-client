import React from "react";

function List({ gridModel }) {
  return (
    <table className="table">
      <thead>
        <tr>
          {gridModel.columns.map((x) => (
            <th scope="col" key={x.name}>
              {x.label}
            </th>
          ))}
          {gridModel.permission.edit && (
            <th scope="col" className="text-center">
              edit
            </th>
          )}
          {gridModel.permission.delete && (
            <th scope="col" className="text-center">
              delete
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {gridModel.data.map((x) => (
          <Row
            rowData={x}
            columns={gridModel.columns}
            onDelete={gridModel.delete}
            onUpdate={gridModel.edit}
            permission={gridModel.permission}
            key={x.id}
          />
        ))}
      </tbody>
    </table>
  );
}

export default List;
const Row = ({ rowData, columns, onDelete, onUpdate, permission }) => {
  return (
    <tr>
      {columns.map((x) => (
        <td scope="row" key={x.name}>
          {rowData[x.name]}
        </td>
      ))}
      {permission.edit && (
        <td className="text-center">
          <button onClick={() => onUpdate(rowData.id, rowData)}>edit</button>
        </td>
      )}
      {permission.delete && (
        <td className="text-center">
          <button onClick={() => onDelete(rowData.id)}>delete</button>
        </td>
      )}
    </tr>
  );
};
