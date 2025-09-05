import { ReactNode } from "react";
import * as styles from "./styles.css";

type StarShapeProps = {
  children: ReactNode;
};

export const StarShape = ({ children }: StarShapeProps) => {
  return (
    <div className={styles.star}>
      <i className={styles.iconWrapper}>{children}</i>
    </div>
  );
};
