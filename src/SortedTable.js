import React from "react";
import { useSortBy, useTable } from "react-table";
const SortedTable = ({ columns, data }) => {
    const {
        getTableProps, // table props from react-table
        getTableBodyProps, // table body props from react-table
        headerGroups, // headerGroups, if your table has groupings
        rows, // rows for the table based on the data passed
        prepareRow // Prepare the row (this function needs to be called for each row before getting the row props)
      } = useTable(
        {
          columns,
          data
        },
        useSortBy
      );
      
    return ( 
        <table {...getTableProps()} className="repotable">
            <thead>
            {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())} className="text2 borderbox" style={{paddingLeft:15}}>
                    {column.render("Header")}
                    <span className = "arrow-icon">
                        {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : "🔽"}                       
                    </span>
                    </th>
                ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
                prepareRow(row);
                return (
                <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()} className="text4 borderbox">{cell.render("Cell")}</td>;
                    })}
                </tr>
                );
            })}
            </tbody>
        </table>
     );
}
 
export default SortedTable;