import React from "react";

import { coin } from "@/types/coin";
import Image from "next/image";

import styles from "./CoinCard.module.css";
import { formatCompactNumber } from "@/utils/numberFormat";

const CoinCard = ({ elem }: { elem: coin }) => {
  const isPositive = elem.price_change_percentage_24h > 0;
  return (
    <div
      className={`${styles.coinCard} ${isPositive ? styles.green : styles.red}`}
    >
      <div className={styles.left}>
        <img
          className={styles.image}
          src={elem.image}
          alt={`image of ${elem.name}`}
          height={50}
          width={50}
        />
        <p className={styles.name}>{elem.symbol}</p>
      </div>
      <div className={styles.right}>
        <p className={styles.price}>Price : &#36;{elem.current_price}</p>
        <p>Market Cap : &#36;{formatCompactNumber(elem.market_cap)}</p>
        <div>
          <p
            className={`${styles.change}`}
          >
            Last 24H : {elem.price_change_percentage_24h}%
            <Image
              width={20}
              height={20}
              src={isPositive ? "/icons/up.svg" : "/icons/down.svg"}
              alt="..."
              style={{ translate: `0 ${isPositive ? "4px" : "3px"}` }}
            />
          </p>
        </div>
        {/* <p>24H Low : {elem.low_24h}</p>
        <p>24H High : {elem.high_24h}</p> */}
      </div>
    </div>
  );
};

export default CoinCard;
