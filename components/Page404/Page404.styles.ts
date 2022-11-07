import { CSSObject } from "../../types";
import { grey, blue } from "@mui/material/colors";

const styles: CSSObject = {
  wrapper404: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
  four: {
    fontSize: "9rem",
    fontWeight: "bold",
  },
  text404: {
    mt: 3,
    mb: 5,
    maxWidth: "min(400px, 90%)",
    letterSpacing: "0.25rem",
  },
  link: {
    fontSize: "1.25rem",
    color: grey[700],
    borderRadius: 2,
    borderColor: grey[700],
    letterSpacing: "0.25rem",
    ":hover": {
      color: blue[800],
    },
  },
};

export default styles;
