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

  const handleChange = (e) => {
    if (e.target.checked) {
      setRowSelected(true);
      e.target.checked = true;
    } else {
      setRowSelected(false);
      e.target.checked = false;
    }
  };
  return (
    <div
      id={colId}
      key={colId}
      className="checkboxColumn"
      style={{ ...styles.checkboxColumn, width: column.width }}
    >
      <input type="checkbox" onChange={handleChange} />
      {children}
    </div>
  );
};

export default CheckboxColumn;
