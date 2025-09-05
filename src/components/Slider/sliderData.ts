import { StaticImageData } from "next/image";
import firstImage from "./slider1.jpg";
import secondImage from "./slider2.jpg";
import thirdImage from "./slider3.jpg";
import fourthImage from "./slider4.jpg";

interface SliderElement {
  title: string;
  alt: string;
  image: StaticImageData;
}

export const sliderData: SliderElement[] = [
  {
    image: firstImage,
    alt: "Description for Image 1",
    title: "Title 1",
  },
  {
    image: secondImage,
    alt: "Description for Image 2",
    title: "Title 2",
  },
  {
    image: thirdImage,
    alt: "Description for Image 3",
    title: "Title 3",
  },
  {
    image: fourthImage,
    alt: "Description for Image 4",
    title: "Title 4",
  },
];
