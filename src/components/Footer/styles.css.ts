import { style } from "@vanilla-extract/css";

export const container = style({
  backgroundColor: "#111F30",
  color: "white",
  padding: "30px 30px 0 60px",

  "@media": {
    "screen and (max-width: 768px)": {
      padding: "2rem ",
    },
  },
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "30px",
  marginBottom: "40px",
});

export const colTitle = style({
  fontSize: "1.2rem",
  marginBottom: "20px",
  position: "relative",
  paddingBottom: "10px",
  fontWeight: 600,

  ":after": {
    content: "",
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "40px",
    height: "2px",
    backgroundColor: "#07101A",
  },
});

export const subtitle = style({
  marginBottom: "20px",
  opacity: "0.8",
  fontSize: "0.95rem",
});

export const ul = style({
  listStyle: "none",
});

export const li = style({
  marginBottom: "10px",
});

export const listItem = style({
  color: "white",
  textDecoration: "none",
  opacity: "0.8",
  transition: "opacity 0.3s",
  fontSize: "0.95rem",

  ":hover": {
    opacity: 1,
    textDecoration: "underline",
  },
});

export const socialLinks = style({
  display: "flex",
  gap: "15px",
});

export const socialLink = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "35px",
  height: "35px",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  borderRadius: "50%",
  transition: "background-color 0.3s",
  cursor: "pointer",

  ":hover": {
    backgroundColor: "#B3C1D1",
  },
});

export const bottom = style({
  padding: "20px 0",
  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  textAlign: "center",
  fontSize: "0.9rem",
  opacity: "0.7",
});
