import { style } from "@vanilla-extract/css";

export const wrapper = style({
  width: "80vw",
  height: "80vh",
  display: "flex",
  justifyContent: "space-between",

  "@media": {
    "screen and (max-width: 1024px)": {
      flexDirection: "column",
    },
  },
});

export const dotsWrapper = style({
  height: "100%",
  display: "flex",
  flex: 1,
  flexDirection: "column",

  "@media": {
    "screen and (max-width: 1024px)": {
      width: "100%",
      height: "15%",
      flexDirection: "row",
    },
  },
});

export const dot = style({
  height: "20rem",
  cursor: "pointer",
  transition: "background 0.3s ease",

  "@media": {
    "screen and (max-width: 1024px)": {
      width: "calc(100% / 5)",
    },
  },
});

export const contentWrapper = style({
  display: "flex",
  flex: 10,
  gap: "3rem",

  "@media": {
    "screen and (max-width: 1024px)": {
      justifyContent: "center",
    },
  },
});

export const content = style({
  display: "flex",
  marginLeft: "3rem",
  marginTop: "2rem",
  gap: "2rem",

  "@media": {
    "screen and (max-width: 1024px)": {
      marginTop: 0,
      marginLeft: 0,
      alignItems: "center",
      flexDirection: "column",
      gap: "1rem",
    },
  },
});

export const imageContainer = style({
  width: "30vw",
  height: "90%",
  overflow: "hidden",

  "@media": {
    "screen and (max-width: 1024px)": {
      width: "100%",
      height: "15rem",
    },
  },
});

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const textContainer = style({
  width: "25rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  color: "white",

  "@media": {
    "screen and (max-width: 1024px)": {
      width: "90%",
    },
  },
});
