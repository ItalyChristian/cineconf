import Image from "next/image";
import styles from "./page.module.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import data from "./dataMock.json";

export default function Home() {
  return (
    <div>
      <Header links={data.menuAttributes} />
      BODY
      <Footer />
    </div>
  );
}
