import { RowClickParams } from '../../types/rowClicked';

export const rowClickParams = (value, rowId: string): RowClickParams => {
  const params = {
    type: "rowClicked",
    rowId,
    value,
  };
  return params;
};
