import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  marginBottom: "2rem",
});

export const flex = style({
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
    },
  },
});

export const box = style({
  width: "10rem",
  height: "10rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "#D7DFE8",
  cursor: "pointer",

  "@media": {
    "screen and (max-width: 768px)": {
      width: "20rem",
      height: "7rem",
      justifyContent: "center",
      gap: "0.5rem",
    },
  },
});

export const text = style({
  width: "80%",
  textAlign: "center",
  paddingTop: "1rem",
});
