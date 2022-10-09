import React from "react";
import { v4 as uuidv4 } from "uuid";
import { cellClickParams } from "../../events/CellClicked";
import { CellClickParams } from "../../types/cellClicked";
import { ColumnData } from "../../types/column";
import { styles } from "./styles";

interface ColumnProps {
  column: ColumnData;
  onCellClicked: (arg: CellClickParams) => void;
  row: any;
}

const Column: React.FC<ColumnProps> = ({
  children,
  column,
  onCellClicked,
  row,
}) => {
  const colId = uuidv4();

  return (
    <div
      id={colId}
      key={colId}
      className="column"
      style={{ ...styles.column, width: column.width }}
      onClick={(e) =>
        onCellClicked
          ? onCellClicked(cellClickParams(row[column.field], colId))
          : undefined
      }
    >
      {children}
    </div>
  );
};

export default Column;
