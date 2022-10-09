import { ColumnData } from "../types/column";

export const getTemplateColums = (list: ColumnData[]) => {
  const templates = Array.from({ length: list.length }, () => "auto");
  return templates.join(" ");
};
