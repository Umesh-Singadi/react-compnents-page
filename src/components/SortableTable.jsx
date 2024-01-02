import { VscArrowSmallUp, VscArrowSmallDown } from "react-icons/vsc";
import Table from "./Table";
import useSort from "../hooks/use-sort";

function SortableTable(props) {
  const { config, data } = props;
  const { sortBy, sortOrder, sortedData, setSortColumn } = useSort(
    data,
    config
  );

  const updatedConFig = config.map((column) => {
    if (column.sortValue) {
      return {
        ...column,
        header: () => (
          <th
            className="cursor-pointer hover:bg-gray-100"
            onClick={() => setSortColumn(column.label)}
          >
            <div className="flex  items-center">
              {getIcons(column.label, sortBy, sortOrder)}
              {column.label}
            </div>
          </th>
        ),
      };
    } else {
      return column;
    }
  });

  return <Table {...props} config={updatedConFig} data={sortedData}></Table>;
}

export default SortableTable;
{
  /*  */
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <VscArrowSmallUp></VscArrowSmallUp>
        <VscArrowSmallDown></VscArrowSmallDown>
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <VscArrowSmallUp></VscArrowSmallUp>
        <VscArrowSmallDown></VscArrowSmallDown>
      </div>
    );
  } else if (sortOrder === "asc") {
    return <VscArrowSmallUp></VscArrowSmallUp>;
  } else if (sortOrder === "desc") {
    return <VscArrowSmallDown></VscArrowSmallDown>;
  }
}
