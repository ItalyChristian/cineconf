import * as styles from "./styles.css";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

type LayoutType = "page" | "main";

type FooterProps = {
  layout?: LayoutType;
};

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.grid}>
        <div id="footer-col-1">
          <p className={styles.colTitle}>CINECONF</p>
          <p className={styles.subtitle}>
            Proporcionando experiências inesquescíveis desde 2019.
          </p>
          <div className={styles.socialLinks}>
            <a className={styles.socialLink}>
              <Facebook />
            </a>
            <a className={styles.socialLink}>
              <Twitter />
            </a>
            <a className={styles.socialLink}>
              <Instagram />
            </a>
            <a className={styles.socialLink}>
              <Linkedin />
            </a>
          </div>
        </div>

        <div id="footer-col-2">
          <p className={styles.colTitle}>Contato</p>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a className={styles.listItem} href="#">
                email.ficticio@email.com
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.listItem} href="#">
                (00) 0000-000
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.listItem} href="#">
                (00) 00000-000
              </a>
            </li>
          </ul>
        </div>

        <div id="footer-col-3">
          <p className={styles.colTitle}>Suporte</p>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a className={styles.listItem} href="#">
                Central de Ajuda
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.listItem} href="#">
                Segurança
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.listItem} href="#">
                Orçamento para eventos
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.listItem} href="#">
                Reservas
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; 2025 CineConf. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
