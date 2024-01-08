import { coins } from "@/data/coins";
import { coin } from "@/types/coin";
import { formatCompactNumber } from "@/utils/numberFormat";
import Link from "next/link";
import React from "react";
import ButtonWithIcon from "./ButtonWithIcon";

import styles from "./CoinsList.module.css";

const CoinsList = ({ initialData }: { initialData: coin[] }) => {
  const data = initialData;

  //   const [data, setData] = useState(initialData);
  //   const [page, setPage] = useState(2);
  //   const [Loading, setLoading] = useState(false);

  //   if (page > 5) {
  //     setLoading(false);
  //   }
  //   async function fetchMore() {
  //     setLoading(true);
  //     const res = await fetch(
  //       `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${page}&sparkline=false&precision=3&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y&locale=en`
  //     );
  //     const nextData = await res.json();

  //     setData((prev) => {
  //       return [...prev, ...nextData];
  //     });

  //     setPage((prev) => prev + 1);
  //     setLoading(false);
  //   }
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <tbody>
          <tr>
            <th>Rank</th>
            <th colSpan={2} style={{ textAlign: "center" }}>
              Name
            </th>
            <th>Symbol</th>
            <th>Marketcap</th>
            <th>Volume</th>
            <th>Current Price</th>
            <th>+/-24h</th>
            <th>+/-30d</th>
            <th>+/-</th>
          </tr>
          {data.map((elem: coin, index) => {
            const isPositive = elem.price_change_24h > 0;
            return (
              <tr
                key={elem.id}
                className={`${isPositive ? styles.positive : styles.negative}`}
              >
                <td style={{ textAlign: "center" }}>#{index + 1}</td>
                <td>
                  <Link href={`coins/${elem.id}`}>
                    <img
                      className={styles.image}
                      src={elem.image}
                      alt={`image of ${elem.name}`}
                      height={50}
                      width={50}
                    />
                  </Link>
                </td>
                <td>{elem.name}</td>
                <td>{elem.symbol}</td>
                <td>&#36;{formatCompactNumber(elem.market_cap)}</td>
                <td>{formatCompactNumber(elem.total_volume)}</td>
                <td>&#36;{elem.current_price}</td>
                <td
                  className={`${
                    isPositive ? styles.positiveChange : styles.negativeChange
                  }`}
                >
                  {elem.price_change_percentage_24h_in_currency?.toFixed(2)}%
                </td>
                <td
                  className={`${
                    elem.price_change_percentage_30d_in_currency > 0
                      ? styles.positiveChange
                      : styles.negativeChange
                  }`}
                >
                  {elem.price_change_percentage_30d_in_currency?.toFixed(2)}%
                </td>
                <td
                  className={`${
                    elem.price_change_percentage_1y_in_currency > 0
                      ? styles.positiveChange
                      : styles.negativeChange
                  }`}
                >
                  {elem.price_change_percentage_1y_in_currency?.toFixed(2)}%
                </td>
                <td>
                  <Link href={`coins/${elem.id}`}>
                    <ButtonWithIcon
                      classes="btn btnPrimary"
                      iconLink="/icons/arrow-up-white.svg"
                    >
                      More Details
                    </ButtonWithIcon>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* {Loading ? <h2>Loading</h2> : ""}
      {page < 5 ? (
        <button
          disabled={Loading}
          className="btn btnSecondary"
          onClick={fetchMore}
        >
          Load More
        </button>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default CoinsList;
