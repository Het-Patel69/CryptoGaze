"use client";

import { SingleCoinData } from "@/types/singleCoinData";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

const SingleCoinPage = ({ id }: { id: string }) => {
  const [error, setError] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState<SingleCoinData>();

  async function fetchCoinData() {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);

    if (!res.ok) {
      setError(true);
      return;
    }

    const tempData = await res.json();

    setData(tempData);
  }

  useEffect(() => {
    console.log("mounted");
    fetchCoinData();
  }, []);
  console.log(data);

  if (error) {
    return <h3>server error</h3>;
  }

  if (!data) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <img src={data.image.small} />
      <div>Name : {data.name}</div>
      <div>Symbol : {data.symbol}</div>
      <div>Current Price : {data.market_data.current_price.usd}</div>
      <div>24H High : {data.market_data.high_24h.usd}</div>
      <div>24H Low Price : {data.market_data.low_24h.usd}</div>
      <div>All time Low : {data.market_data.atl.usd}</div>
      <div>All time High : {data.market_data.ath.usd}</div>
    </div>
  );
};

export default SingleCoinPage;
