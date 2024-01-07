import React from "react";

import { coin } from "@/types/coin";
import CoinCard from "./CoinCard";
import { coins } from "@/data/coins";

import styles from "./FeaturedCoins.module.css";
import Link from "next/link";

const FeaturedCoins = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=9&page=1&sparkline=false",
    { next: { revalidate: 10 } }
  );

  const data: coin[] = await res.json();

  // const data: coin[] = coins;

  return (
    <>
      <h1 className={`section-title ${styles.title}`}>Top Cryptocurrencies</h1>
      <div className={styles.coinsGridWrapper}>
        <div className={styles.coinsGrid}>
          {data.map((coin: coin) => {
            return (
              <Link key={coin.id} href={`coins/${coin.id}`}>
                <CoinCard elem={coin} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FeaturedCoins;
