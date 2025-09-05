import { StaticImageData } from "next/image";
import firstImage from "../Slider/slider1.jpg";
import secondImage from "../Slider/slider2.jpg";
import thirdImage from "../Slider/slider3.jpg";
import fourthImage from "../Slider/slider4.jpg";
import heartless from "./heartless.jpg";

export interface ItemElement {
  title: string;
  text: string;
  image: StaticImageData;
  alt: string;
  backgroundColor: string;
}

export const verticalSliderData: ItemElement[] = [
  {
    image: fourthImage,
    alt: "Description for Image 1",
    title: "Title 1",
    text: "Title 1",
    backgroundColor: "#111F30",
  },
  {
    image: secondImage,
    alt: "Description for Image 2",
    title: "Title 2",
    text: "Title 2",
    backgroundColor: "#2E455E",
  },
  {
    image: thirdImage,
    alt: "Description for Image 3",
    title: "Title 3",
    text: "Title 3",
    backgroundColor: "#59718C",
  },
  {
    image: firstImage,
    alt: "Description for Image 4",
    title: "Title 4",
    text: "Title 4",
    backgroundColor: "#91A4BA",
  },
  {
    image: heartless,
    alt: "Description for Image 5",
    title: "Title 5",
    text: "Title 5",
    backgroundColor: "#D7DFE8",
  },
];
