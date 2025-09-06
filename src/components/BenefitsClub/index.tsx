import * as styles from "./styles.css";
import { Title } from "../Title";
import { Box, Flex } from "@radix-ui/themes";

export const BenefitsClub = () => {
  return (
    <section className={styles.container}>
      <Title>Clube de Benefícios</Title>

      <Flex gap="3">
        <div className={styles.box}>Tenha prioridade nas reservas</div>
        <div className={styles.box}>
          Ingresso grátis para qualquer sessão uma vez por mês
        </div>
        <div className={styles.box}>
          Receba antecipadamente as atualizações do catálogo
        </div>
      </Flex>
    </section>
  );
};
