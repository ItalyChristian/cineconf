"use client";
import { useState } from "react";
import * as styles from "./styles.css";
import { StaticImageData } from "next/image";

type ImageItem = {
  image: StaticImageData;
  alt: string;
  title: string;
};

type ImageSliderProps = {
  images: ImageItem[];
};

export const Slider = ({ images }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const length = images.length;
  const lastIndex = length - 1;

  const goToPrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? lastIndex : prev - 1));
  const goToNext = () =>
    setCurrentIndex((prev) => (prev === lastIndex ? 0 : prev + 1));
  const goToSlide = (index: number) => setCurrentIndex(index);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.imageWrapper}>
        <img
          src={images[currentIndex].image.src}
          alt={images[currentIndex].alt}
          className={styles.image}
        />
      </div>

      <button
        className={styles.leftArrow}
        onClick={goToPrev}
        aria-label="Ir para imagem anterior"
      >
        &#10094;
      </button>
      <button
        className={styles.rightArrow}
        onClick={goToNext}
        aria-label="Ir para próxima imagem"
      >
        &#10095;
      </button>

      <div className={styles.dotsWrapper}>
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? styles.activeDot : styles.dot}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};
