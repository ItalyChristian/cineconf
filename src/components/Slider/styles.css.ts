import { style } from "@vanilla-extract/css";

export const sliderContainer = style({
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "0 auto",
  position: "relative",
});

export const imageWrapper = style({
  width: "100%",
  position: "relative",
  overflow: "hidden",
});

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  // filter: " grayscale(100%)",
});

export const leftArrow = style({
  position: "absolute",
  top: "50%",
  left: "10px",
  transform: "translateY(-50%)",
  fontSize: "2rem",
  background: "transparent",
  border: "none",
  color: "#fff",
  cursor: "pointer",
});

export const rightArrow = style({
  position: "absolute",
  top: "50%",
  right: "10px",
  transform: "translateY(-50%)",
  fontSize: "2rem",
  background: "transparent",
  border: "none",
  color: "#fff",
  cursor: "pointer",
});

export const dotsWrapper = style({
  display: "flex",
  justifyContent: "center",
  marginTop: "1rem",
  gap: "0.5rem",
  bottom: "1rem",
  position: "absolute",
});

export const dot = style({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: "white",
  cursor: "pointer",
  transition: "background 0.3s ease",
});

export const activeDot = style([
  dot,
  {
    backgroundColor: "#07101A",
  },
]);
