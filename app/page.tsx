import Image from "next/image";
import styles from "./page.module.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import data from "./dataMock.json";
import { Slider } from "@/components/Slider";
import { sliderData } from "../src/components/Slider/sliderData";
import { VerticalSliderWrapper } from "@/components/VerticalSlider";

export default function Home() {
  return (
    <div>
      <Header links={data.menuAttributes} />
      <Slider images={sliderData} />
      <VerticalSliderWrapper />
      <Footer />
    </div>
  );
}
