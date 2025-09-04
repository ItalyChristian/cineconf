import React from "react";
import * as styles from "./styles.css";
import Link from "next/link";

export type MenuMobileProps = {
  firstLink: any;
  restLinks: any;
  setVisible: any;
};

export const MenuMobile = ({
  firstLink,
  restLinks,
  setVisible,
}: MenuMobileProps) => {
  return (
    <nav className={styles.menuMobileContainer}>
      <div className={styles.navContainerMobile}>
        <div className={styles.firstItem}>
          <Link
            href={firstLink.link}
            className={styles.navLinkMobile}
            target={firstLink.newTab ? "_blank" : "_self"}
            onClick={() => setVisible(false)}
          >
            {firstLink.children}
          </Link>
        </div>
        {restLinks.map((link: any) => (
          <Link
            key={link.id}
            href={link.link}
            className={styles.navLinkMobile}
            target={link.newTab ? "_blank" : "_self"}
            onClick={() => setVisible(false)}
          >
            {link.children}
          </Link>
        ))}
        <div>
          <Link href="/register" onClick={() => setVisible(false)}>
            <button className={styles.button} aria-label="Cadastro">
              CADASTRO
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
