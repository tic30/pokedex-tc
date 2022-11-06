import { CSSObject } from "../../types";
import { blueGrey } from "@mui/material/colors";

const styles: CSSObject = {
  listWrapper: {
    flexGrow: 1,
    overflowY: "auto",
    backgroundColor: blueGrey[50],
  },
  list: {
    display: "grid",
    gridTemplateColumns: ["repeat(auto-fit, 1fr)", "repeat(4, 1fr)"],
    gap: 2,
    p: 2,
  },
};

export const compressedStyles: CSSObject = {
  list: {
    ...styles.list,
    gridTemplateColumns: "1fr",
    gap: 1,
  },
};

export default styles;
