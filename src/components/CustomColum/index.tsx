import React from "react";
import { v4 as uuidv4 } from "uuid";
import { ColumnData } from "../../types/column";
import { styles } from "./styles";

interface CustomColumnProps {
  column: ColumnData;
}

const CustomColumn: React.FC<CustomColumnProps> = ({ children, column }) => {
  const colId = uuidv4();
  return (
    <div
      id={colId}
      key={colId}
      className="customColumn"
      style={{ ...styles.customColumn, width: column.width }}
    >
      {children}
    </div>
  );
};

export default CustomColumn;
