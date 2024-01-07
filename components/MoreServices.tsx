import Link from "next/link";
import React from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import styles from "./MoreServices.module.css";

const MoreServices = () => {
  return (
    <div>
      <h1 className={`section-title`}>Explore Our Services</h1>
      <div className={styles.subSec}>
        <p>Browse all the cryptos available, and check their data</p>
        <Link href="/coins">
          <ButtonWithIcon
            classes="btn btnPrimary"
            iconLink="/icons/arrow-up-white.svg"
          >
            Browse Cryptos
          </ButtonWithIcon>
        </Link>
      </div>
      <div className={styles.subSec}>
        <p>
          Check convertion rates for all the cryptos available against popular
          crypto currencies
        </p>
        <Link href="/convert">
          <ButtonWithIcon
            classes="btn btnPrimary"
            iconLink="/icons/arrow-up-white.svg"
          >
            Check Convertions
          </ButtonWithIcon>
        </Link>
      </div>
    </div>
  );
};

export default MoreServices;
