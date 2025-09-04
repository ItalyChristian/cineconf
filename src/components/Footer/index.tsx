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
          <p className={styles.colTitle}>Our Coworking</p>
          <p className={styles.subtitle}>
            Conectando clientes aos melhores profissionais freelancers desde
            2025.
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
          <p className={styles.colTitle}>Categorias</p>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a className={styles.listItem} href="#">
                Design & Criatividade
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.listItem} href="#">
                Desenvolvimento & TI
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.listItem} href="#">
                Marketing Digital
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.listItem} href="#">
                Finanças & Contabilidade
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.listItem} href="#">
                Música & Áudio
              </a>
            </li>
          </ul>
        </div>

        <div id="footer-col-3">
          <p className={styles.colTitle}>Empresa</p>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a className={styles.listItem} href="#">
                Sobre nós
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.listItem} href="#">
                Termos de serviço
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.listItem} href="#">
                Política de privacidade
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.listItem} href="#">
                Contato
              </a>
            </li>
          </ul>
        </div>

        <div id="footer-col-4">
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
                Oferecer serviços na Bico
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.listItem} href="#">
                Solicitar serviços na Bico
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; 2025 Our Coworking. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
