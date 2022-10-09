import { CellClickParams } from "../../types/cellClicked";

export const cellClickParams = (
  value: string,
  colId: string
): CellClickParams => {
  const params = {
    type: "cellClicked",
    colId,
    value,
  };
  return params;
};
