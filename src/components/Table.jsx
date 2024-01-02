import { Fragment } from "react";

function Table({ data, config, keyFn }) {
  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header("Score")}</Fragment>;
    }
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((rowData) => {
    const renderCells = config.map((column) => (
      <td className="p2" key={column.label}>
        {column.render(rowData)}
      </td>
    ));
    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderCells}
      </tr>
    );
  });
  return (
    <>
      <table className="table-auto border-spacing-2">
        <thead>
          <tr className="border-b-2 border-black">{renderedHeaders}</tr>
        </thead>
        <tbody>{renderedRows}</tbody>
      </table>
    </>
  );
}

export default Table;
