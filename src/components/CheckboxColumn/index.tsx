import React from "react";
import { v4 as uuidv4 } from "uuid";
import { ColumnData } from "../../types/column";
import { styles } from "./styles";

interface CheckboxColumnProps {
  column: ColumnData;
  setRowSelected: (arg: boolean) => void;
}
const CheckboxColumn: React.FC<CheckboxColumnProps> = ({
  children,
  column,
  setRowSelected,
}) => {
  const colId = uuidv4();

  return (
    <div
      id={colId}
      key={colId}
      className="checkboxColumn"
      style={{ ...styles.checkboxColumn, width: column.width }}
    >
      <input type="checkbox" />
      {children}
    </div>
  );
};

export default CheckboxColumn;
