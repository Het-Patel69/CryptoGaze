import CoinsList from "@/components/CoinsList";
import { coins } from "@/data/coins";
import { coin } from "@/types/coin";
import { secureHeapUsed } from "crypto";
import React from "react";

const page = async () => {
  let error;
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&precision=3&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y&locale=en`,
    { next: { revalidate: 10 } }
  ).catch((err) => {
    error = true
  });

  if(error){
    return(
      <section>
        <h1>Server Down, please try later</h1>
      </section>
    )
  }
  const data: coin[] = await res?.json();

  // const data: coin[] = coins;
  return (
    <section style={{paddingBlock: '1rem'}}>
      <h1 className="section-title">Browse Cryptocurrencies</h1>
      <CoinsList initialData={data} />
    </section>
  );
};

export default page;
