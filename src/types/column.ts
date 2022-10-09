export interface ColumnData {
  name: string;
  field: string;
  width: string;
  colRenderer?: (row?: any) => void;
}
