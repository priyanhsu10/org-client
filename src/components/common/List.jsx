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
          <th scope="col" className="text-center">
            edit
          </th>
          <th scope="col" className="text-center">
            delete
          </th>
        </tr>
      </thead>
      <tbody>
        {gridModel.data.map((x) => (
          <Row rowData={x} columns={gridModel.columns} key={x.id} />
        ))}
      </tbody>
    </table>
  );
}

export default List;
const Row = ({ rowData, columns }) => {
  return (
    <tr>
      {columns.map((x) => (
        <td scope="row" key={x.name}>
          {rowData[x.name]}
        </td>
      ))}
      <td className="text-center">
        <button>edit</button>
      </td>
      <td className="text-center">
        <button>delete</button>
      </td>
    </tr>
  );
};
