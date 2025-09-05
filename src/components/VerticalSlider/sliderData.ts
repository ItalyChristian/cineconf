import { StaticImageData } from "next/image";
import sala1 from "./sala1.jpg";
import sala2 from "./sala2.jpg";
import sala3 from "./sala3.jpg";
import sala4 from "./sala4.jpg";
import sala5 from "./sala5.jpg";

export interface ItemElement {
  title: string;
  text: string;
  image: StaticImageData;
  alt: string;
  backgroundColor: string;
}

export const verticalSliderData: ItemElement[] = [
  {
    image: sala1,
    alt: "Description for Image 1",
    title: "Title 1",
    text: "Title 1",
    backgroundColor: "#111F30",
  },
  {
    image: sala2,
    alt: "Description for Image 2",
    title: "Title 2",
    text: "Title 2",
    backgroundColor: "#2E455E",
  },
  {
    image: sala3,
    alt: "Description for Image 3",
    title: "Title 3",
    text: "Title 3",
    backgroundColor: "#59718C",
  },
  {
    image: sala4,
    alt: "Description for Image 4",
    title: "Title 4",
    text: "Title 4",
    backgroundColor: "#91A4BA",
  },
  {
    image: sala5,
    alt: "Description for Image 5",
    title: "Title 5",
    text: "Title 5",
    backgroundColor: "#D7DFE8",
  },
];
