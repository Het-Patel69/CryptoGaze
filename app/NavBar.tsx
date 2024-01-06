"use client";

import Link from "next/link";
import React from "react";

import styles from "./NavBar.module.css";

const NavBar = () => {
  const routes = {
    home: "/",
    coins: "/coins",
    speceficCoin: "/coins/[id]",
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <span className="colorPrimary">Crypto</span>
          <span className="colorAccent">Gaze</span>
        </Link>
      </div>
      <div className={styles.navList}>
        <div className={`${styles.navLink} `}>
          <Link href="/">Home</Link>
        </div>
        <div className={`${styles.navLink} `}>
          <Link href="/coins">Coins</Link>
        </div>
        <div className={`${styles.navLink} `}>
          <Link href="/convert">Convert</Link>
        </div>
      </div>
      <div className={styles.mobileNavToggler}>
        <div className={styles.lines}></div>
        <div className={styles.lines}></div>
      </div>
    </header>
  );
};

export default NavBar;
