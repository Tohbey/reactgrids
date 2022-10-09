import React from "react";
import { ColumnData } from "../../types/column";
import { styles } from "./styles";

interface HeaderColumnProps {
  column: ColumnData;
}
const HeaderColumn: React.FC<HeaderColumnProps> = ({ children, column }) => {
  return (
    <div
      className="headerColumn"
      style={{ ...styles.headerColumn, width: column.width }}
    >
      {children}
    </div>
  );
};

export default HeaderColumn;
