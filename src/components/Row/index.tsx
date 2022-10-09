import React from "react";
import { v4 as uuidv4 } from "uuid";
import { rowClickParams } from "../../events/RowClicked";
import { ColumnData } from "../../types/column";
import { RowClickParams } from "../../types/rowClicked";
import { getTemplateColums } from "../../utils";
import { styles } from "./styles";

interface RowProps {
  columns: ColumnData[];
  onRowClicked: (arg: RowClickParams) => void;
  row: any;
  rowSelected: boolean;
}
const Row: React.FC<RowProps> = ({
  children,
  columns,
  onRowClicked,
  row,
  rowSelected,
}) => {
  const rowId = uuidv4();

  return (
    <div
      id={rowId}
      key={rowId}
      className={"row " + (rowSelected ? " rowSelected" : " ")}
      style={{ ...styles.row, gridTemplateColumns: getTemplateColums(columns) }}
      onClick={(e) =>
        onRowClicked ? onRowClicked(rowClickParams(row, rowId)) : undefined
      }
    >
      {children}
    </div>
  );
};

export default Row;
