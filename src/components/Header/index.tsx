import React from "react";
import { ColumnData } from "../../types/column";
import { getTemplateColums } from "../../utils";
import { styles } from "./styles";

interface HeaderProps {
  columns: ColumnData[];
}

const Header: React.FC<HeaderProps> = ({ children, columns }) => {
  return (
    <div
      className="header"
      style={{
        ...styles.header,
        gridTemplateColumns: getTemplateColums(columns),
      }}
    >
      {children}
    </div>
  );
};

export default Header;
