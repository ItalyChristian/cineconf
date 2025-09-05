import {
  AlarmClock,
  CalendarSearch,
  ClipboardClock,
  NotebookText,
} from "lucide-react";
import { Title } from "../Title";
import * as styles from "./styles.css";
import { StarShape } from "./StarShape";
import clsx from "clsx";

export const HowItWorks = () => {
  return (
    <section className={clsx(styles.flexContainer, styles.wrapper)}>
      <Title>Como funciona</Title>

      <div className={clsx(styles.flexContainer, styles.content)}>
        <div className={clsx(styles.flexContainer, styles.itemContainer)}>
          <StarShape>
            <NotebookText size={40} />
          </StarShape>

          <p>Escolha uma sala</p>
        </div>

        <div className={clsx(styles.flexContainer, styles.itemContainer)}>
          <StarShape>
            <CalendarSearch size={40} />
          </StarShape>

          <p>Verifique a disponibilidade</p>
        </div>

        <div className={clsx(styles.flexContainer, styles.itemContainer)}>
          <StarShape>
            <ClipboardClock size={40} />
          </StarShape>

          <p>Faça a reserva</p>
        </div>

        <div className={clsx(styles.flexContainer, styles.itemContainer)}>
          <StarShape>
            <AlarmClock size={40} />
          </StarShape>

          <p>Chegue no horário</p>
        </div>
      </div>
    </section>
  );
};
