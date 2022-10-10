import React, { useState, useEffect } from "react";
import { gridReadyParams } from "../../events/GridReady";
import { ColumnData } from "../../types/column";
import { GridReadyParams } from "../../types/gridReady";
import CheckboxColumn from "../CheckboxColumn";
import Column from "../Column";
import CustomColumn from "../CustomColum";
import Header from "../Header";
import HeaderColumn from "../HeaderColumn";
import Row from "../Row";
import { v4 as uuidv4 } from "uuid";

interface ReactGridProps {
  columns: ColumnData[];
  rows: any[];
  onCellClicked?: () => void;
  onRowClicked?: () => void;
  onGridReady?: (arg: GridReadyParams) => void;
}

const ReactGrid: React.FC<ReactGridProps> = ({
  columns,
  rows,
  onCellClicked,
  onRowClicked,
  onGridReady,
}) => {
  const [rowSelected, setRowSelected] = useState<boolean>(false);

  const gridId = uuidv4();

  const emitGridReadyEvent = () => {
    return onGridReady ? onGridReady(gridReadyParams(gridId)) : undefined;
  };

  useEffect(() => {
    emitGridReadyEvent();
  }, []);

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
                            <CustomColumn column={column}>
                              {column.colRenderer(row)}
                            </CustomColumn>
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
