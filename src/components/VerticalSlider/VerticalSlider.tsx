"use client";
import { useState } from "react";
import * as styles from "./styles.css";
import { Text } from "@radix-ui/themes";

import { ItemElement } from "./sliderData";
import Image from "next/image";

type VerticalSliderProps = {
  items: ItemElement[];
};

export const VerticalSlider = ({ items }: VerticalSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const goToSlide = (index: number) => setCurrentIndex(index);

  return (
    <div className={styles.wrapper}>
      <div className={styles.dotsWrapper}>
        {items.map((item, index) => (
          <span
            key={index}
            className={styles.dot}
            style={{
              backgroundColor: item.backgroundColor,
            }}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <div
        className={styles.contentWrapper}
        style={{ backgroundColor: items[currentIndex].backgroundColor }}
      >
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <Image
              src={items[currentIndex].image}
              alt={items[currentIndex].alt}
              className={styles.image}
            />
          </div>

          <div className={styles.textContainer}>
            <h3>{items[currentIndex].title}</h3>
            <Text>{items[currentIndex].text}</Text>
          </div>
        </div>
      </div>
    </div>
  );
};
