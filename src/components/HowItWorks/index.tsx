import {
  AlarmClock,
  CalendarSearch,
  ClipboardClock,
  NotebookText,
} from "lucide-react";
import { Title } from "../Title";
import * as styles from "./styles.css";
import { StarShape } from "./StarShape";

export const HowItWorks = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        marginTop: "2rem",
      }}
    >
      <Title>Como funciona</Title>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <div className={styles.itemContainer}>
          <StarShape>
            <NotebookText size={40} />
          </StarShape>

          <div>Escolha uma sala</div>
        </div>

        <div className={styles.itemContainer}>
          <StarShape>
            <CalendarSearch size={40} />
          </StarShape>

          <div>Verifique a disponibilidade</div>
        </div>

        <div className={styles.itemContainer}>
          <StarShape>
            <ClipboardClock size={40} />
          </StarShape>

          <div>Faça a reserva</div>
        </div>

        <div className={styles.itemContainer}>
          <StarShape>
            <AlarmClock size={40} />
          </StarShape>

          <div>Chegue no horário</div>
        </div>
      </div>
    </div>
  );
};
