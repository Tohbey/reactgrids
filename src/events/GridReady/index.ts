import { GridReadyParams } from "../../types/gridReady";

export const gridReadyParams = (
  gridId: string
): GridReadyParams => {
  const params = {
    type: "gridReady",
    gridId,
  };
  return params;
};
