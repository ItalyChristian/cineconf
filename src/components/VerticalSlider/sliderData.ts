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
    title: "Sala 1",
    text: "Sala coletiva com capacidade máxima para 20 pessoas. As sessões para essa sala são abertas ao público geral, portanto, para fazer uma reserva é necessário preencher a capacidade no mínimo de 90% ou pagar o valor correspondente.",
    backgroundColor: "#111F30",
  },
  {
    image: sala2,
    alt: "Description for Image 2",
    title: "Sala 2",
    text: "Sala privada com capacidade máxima para 15 pessoas. Verificar o catálogo semanal para escolher o filme.",
    backgroundColor: "#2E455E",
  },
  {
    image: sala3,
    alt: "Description for Image 3",
    title: "Sala 3",
    text: "Sala privada com capacidade máxima para 5 pessoas. Catálogo flexível.",
    backgroundColor: "#59718C",
  },
  {
    image: sala4,
    alt: "Description for Image 4",
    title: "Sala 4",
    text: "Sala privada com capacidade máxima para 10 pessoas. Catálogo flexível.",
    backgroundColor: "#91A4BA",
  },
  {
    image: sala5,
    alt: "Description for Image 5",
    title: "Sala 5",
    text: "Sala privada com capacidade máxima para 5 pessoas. Catálogo flexível.",
    backgroundColor: "#B3C1D1",
  },
];
