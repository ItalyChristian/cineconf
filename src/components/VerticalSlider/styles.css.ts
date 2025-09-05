import { style } from "@vanilla-extract/css";

export const wrapper = style({
  width: "80vw",
  height: "80vh",
  display: "flex",
  justifyContent: "space-between",
});

export const dotsWrapper = style({
  height: "100%",
  display: "flex",
  flex: 1,
  flexDirection: "column",
});

export const dot = style({
  height: "20rem",
  cursor: "pointer",
  transition: "background 0.3s ease",
});

export const content = style({
  display: "flex",
  marginLeft: "3rem",
  marginTop: "2rem",
  gap: "2rem",
});

export const imageContainer = style({
  width: "30vw",
  height: "90%",
  overflow: "hidden",
});

export const textContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  color: "white",
});
