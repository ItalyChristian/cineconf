"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "./logo.png";
import * as styles from "./styles.css";
import { Menu, X } from "lucide-react";
import { MenuMobile } from "./MenuMobile";
import { Button, HStack } from "@chakra-ui/react";

export type MenuLinkProps = {
  id?: number;
  children: React.ReactNode;
  link: string;
  newTab: boolean;
};

export type MenuProps = {
  links: MenuLinkProps[];
};

export const Header = ({ links }: MenuProps) => {
  const logoLink = "#";
  const [visible, setVisible] = useState(false);

  if (links.length === 0) return null;
  const [firstLink, ...restLinks] = links;

  return (
    <header>
      <div
        className={`${styles.container} ${
          visible ? styles.containerMobileVisible : ""
        }`}
      >
        <div>
          {visible ? (
            <button
              onClick={() => setVisible(false)}
              className={styles.buttonBurger}
              aria-label="Fechar menu"
            >
              <X className={styles.icon} />
            </button>
          ) : (
            <button
              onClick={() => setVisible(true)}
              className={`${styles.buttonBurger} ${
                visible ? styles.buttonHidden : ""
              }`}
              aria-label="Abrir menu"
            >
              <Menu className={styles.icon} style={{ color: "white" }} />
            </button>
          )}
        </div>

        <nav
          className={`${styles.content} ${
            visible ? styles.contentMobileVisible : ""
          }`}
        >
          <Link href={logoLink} className={styles.logoContainer}>
            <div className={styles.imageWrapper}>
              <Image
                src={logo}
                alt="Logo da CineConf"
                className={styles.imageStyles}
              />
            </div>
          </Link>

          <div className={styles.navContainer}>
            <div className={styles.firstItem}>
              <Link
                href={firstLink.link}
                target={firstLink.newTab ? "_blank" : "_self"}
              >
                {firstLink.children}
              </Link>
            </div>
            {restLinks.map((link) => (
              <Link
                key={link.id}
                href={link.link}
                className={styles.navLink}
                target={link.newTab ? "_blank" : "_self"}
              >
                {link.children}
              </Link>
            ))}
            <div>
              <Link href="#" onClick={() => setVisible(false)}>
                <Button aria-label="Cadastro" className={styles.button}>
                  CADASTRO
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {visible && (
        <MenuMobile firstLink={firstLink} restLinks={restLinks} setVisible />
      )}
    </header>
  );
};
