import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  marginBottom: "2rem",

  // "@media": {
  //   "screen and (max-width: 768px)": {
  //     padding: "2rem ",
  //   },
  // },
});

export const box = style({
  width: "10rem",
  height: "10rem",
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
});
