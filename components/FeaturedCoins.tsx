import React from "react";

import { coin } from "@/types/coin";
import CoinCard from "./CoinCard";
import { coins } from "@/data/coins";

import styles from "./FeaturedCoins.module.css";

const FeaturedCoins = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=9&page=1&sparkline=false",
    { next: { revalidate: 10 } }
  );

  const data: coin[] = await res.json();

  // const data: coin[] = coins;

  return (
    <>
    <h1 className={styles.title}>Featured Coins</h1>
      <div className={styles.coinsGridWrapper}>
        <div className={styles.coinsGrid}>
          {data.map((coin: coin) => {
            return <CoinCard key={coin.id} elem={coin} />;
          })}
        </div>
      </div>
    </>
  );
};

export default FeaturedCoins;
