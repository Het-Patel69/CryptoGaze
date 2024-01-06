import React from "react";

import { coin } from "@/types/coin";
import Image from "next/image";

import styles from "./CoinCard.module.css";

const CoinCard = ({ elem }: { elem: coin }) => {
  return (
    <div className={styles.coinCard}>
      <img
        className={styles.image}
        src={elem.image}
        alt={`image of ${elem.name}`}
        height={70}
        width={70}
      />
      <p className={styles.name}>{elem.name}</p>
      <p className={styles.price}>&#36;{elem.current_price}</p>
      <p className={styles.change}>{elem.price_change_percentage_24h}</p>
    </div>
  );
};

export default CoinCard;
