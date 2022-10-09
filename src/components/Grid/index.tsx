import React, { useState } from "react";
import { ColumnData } from "../../types/column";
import CheckboxColumn from "../CheckboxColumn";
import Column from "../Column";
import CustomColumn from "../CustomColum";
import Header from "../Header";
import HeaderColumn from "../HeaderColumn";
import Row from "../Row";

interface ReactGridProps {
  columns: ColumnData[];
  rows: any[];
  onCellClicked: () => void;
  onRowClicked: () => void;
}

const ReactGrid: React.FC<ReactGridProps> = ({
  columns,
  rows,
  onCellClicked,
  onRowClicked,
}) => {
  const [rowSelected, setRowSelected] = useState<boolean>(false);
  return (
    <div className="gridWrapper">
      <Header columns={columns}>
        {columns && columns.length
          ? columns.map((column) => (
              <HeaderColumn column={column}>{column.name}</HeaderColumn>
            ))
          : null}
      </Header>
      {rows && rows.length
        ? rows.map((row) => {
            return (
              <Row
                columns={columns}
                onRowClicked={onRowClicked}
                row={row}
                rowSelected={rowSelected}
              >
                {columns && columns.length
                  ? columns.map((column) => {
                      return (
                        <>
                          {column.field === "checkbox" ? (
                            <CheckboxColumn
                              column={column}
                              setRowSelected={setRowSelected}
                            ></CheckboxColumn>
                          ) : column.colRenderer !== undefined ? (
                            <CustomColumn column={column}>{column.colRenderer(row)}</CustomColumn>
                          ) : (
                            <Column
                              column={column}
                              onCellClicked={onCellClicked}
                              row={row}
                            >
                              {row[column.field]}
                            </Column>
                          )}
                        </>
                      );
                    })
                  : null}
              </Row>
            );
          })
        : null}
    </div>
  );
};

export default ReactGrid;
