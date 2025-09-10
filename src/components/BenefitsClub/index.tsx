import * as styles from "./styles.css";
import { Title } from "../Title";
import { Box, Flex } from "@radix-ui/themes";
import { Armchair, TicketPlus, BellRing, HeartHandshake } from "lucide-react";

export const BenefitsClub = () => {
  return (
    <section className={styles.container}>
      <Title>Clube de Benefícios</Title>

      <Flex gap="3" className={styles.flex}>
        <div className={styles.box}>
          <p className={styles.text}>Tenha prioridade nas reservas</p>
          <i>
            <Armchair />
          </i>
        </div>
        <div className={styles.box}>
          <p className={styles.text}>
            Ingresso grátis para qualquer sessão uma vez por mês
          </p>
          <i>
            <TicketPlus />
          </i>
        </div>
        <div className={styles.box}>
          <p className={styles.text}>
            Receba antecipadamente as atualizações do catálogo
          </p>
          <i>
            <BellRing />
          </i>
        </div>
        <div className={styles.box}>
          <p className={styles.text}>
            Ticket mensal com desconto para um acompanhante
          </p>
          <i>
            <HeartHandshake />
          </i>
        </div>
      </Flex>
    </section>
  );
};
