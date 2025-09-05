import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
});

export const itemContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
});

export const star = style({
  width: "0px",
  height: "0px",
  margin: "50px 0",
  position: "relative",
  display: "block",
  color: "yellow",
  borderRight: "100px solid transparent",
  borderBottom: "70px solid yellow",
  borderLeft: "100px solid transparent",
  transform: "rotate(35deg)",

  ":after": {
    width: "0px",
    height: "0px",

    display: "block",
    position: "absolute",
    top: "3px",
    left: "-105px",
    color: "yellow",
    borderRight: "100px solid transparent",
    borderBottom: "70px solid yellow",
    borderLeft: "100px solid transparent",
    transform: "rotate(-70deg)",
    content: "",
  },
  ":before": {
    width: 0,
    height: 0,
    display: "block",
    position: "absolute",
    top: "-45px",
    left: "-65px",
    borderBottom: "80px solid yellow",
    borderLeft: "30px solid transparent",
    borderRight: "30px solid transparent",
    transform: "rotate(-35deg)",
    content: "",
  },
});

export const iconWrapper = style({
  position: "absolute",
  transform: "translate(-70%, 5%)",
  rotate: "-35deg",
  color: "#07101A",
  zIndex: 100,
});
