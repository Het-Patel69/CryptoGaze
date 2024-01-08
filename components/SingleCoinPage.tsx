"use client";

import { SingleCoinData } from "@/types/singleCoinData";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

const SingleCoinPage = ({ id }: { id: string }) => {
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  async function fetchCoinData() {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}`
    ).catch((err) => {
      console.log(err);
      setError(true);
      return;
    });

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

  return (
    <div>
      <div>{id}</div>
      {data?<div>Current Price : {data.market_data.current_price.usd}</div>:<h3>Loading...</h3>}
    </div>
  );
};

export default SingleCoinPage;
