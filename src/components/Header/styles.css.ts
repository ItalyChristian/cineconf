import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  backgroundColor: "transparent",
  color: "grey",
  zIndex: "10",
});

export const containerMobileVisible = style({
  "@media": {
    "screen and (max-width: 768px)": {
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
    },
  },
});

export const buttonBurger = style({
  width: "4rem",
  height: "4rem",
  display: "none",
  position: "fixed",
  top: "1rem",
  right: "2rem",
  zIndex: 6,
  color: "white",
  background: "none",
  border: "none",
  "@media": {
    "screen and (max-width: 768px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
});

export const icon = style({
  width: "2.5rem",
  height: "2.5rem",
  color: "white",
});

export const buttonHidden = style({
  pointerEvents: "none",
});

export const content = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0.8rem 2.5rem",

  "@media": {
    "screen and (max-width: 768px)": {
      display: "none",
    },
  },
});

export const contentMobileVisible = style({
  display: "flex",
});

export const menuMobileContainer = style({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 5,
  backgroundColor: "var(--dark-grey)",
  color: "white",
  "@media": {
    "screen and (min-width: 769px)": {
      display: "none",
    },
  },
});

export const logoContainer = style({
  // width: "12rem",
  // height: "3rem",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

export const imageWrapper = style({
  height: "100%",
});

export const imageStyles = style({
  maxWidth: "100px",
  height: "50px",
});

export const navContainer = style({
  display: "flex",
  alignItems: "center",
  gap: "2rem",

  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      gap: "1.5rem",
    },
  },
});

export const navContainerMobile = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1.5rem",
});

export const firstItem = style({
  color: "#111F30",
  fontWeight: "bold",
});

export const navLink = style({
  fontWeight: 600,
  transition: "color 0.3s",

  ":hover": {
    color: "#111F30",
    transition: "all 0.3s ease-out",
  },
});

export const navLinkMobile = style({
  fontWeight: "bold",
  fontSize: "1.2rem",

  ":hover": {
    color: "#111F30",
    transition: "all 0.3s ease-out",
  },
});

export const button = style({
  backgroundColor: "#111F30",
  color: "white",
  padding: "0.8rem",
  cursor: "pointer",
  textDecoration: "none",
  borderRadius: "4px",
  fontWeight: 600,
  transition: "all 0.3s ease",
  border: "none",

  ":hover": {
    backgroundColor: "#07101A",
    transform: " translateY(-2px)",
  },
});
