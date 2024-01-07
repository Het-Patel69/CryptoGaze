import React from "react";

import { coin } from "@/types/coin";
import CoinCard from "./CoinCard";
import { coins } from "@/data/coins";

const FeaturedCoins = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=24&page=1&sparkline=false",
    { next: { revalidate: 10 } }
  );

  const data: coin[] = await res.json();

  // const data: coin[] = coins;

  return (
    <>
      <div>
        {data.map((coin: coin) => {
          return <CoinCard key={coin.id} elem={coin} />;
        })}
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        consequatur, saepe voluptatibus repellat animi dicta eos omnis porro
        illum quis cum molestias ea reprehenderit. Animi fugiat aut unde maxime,
        saepe nostrum error libero consequuntur repellendus reprehenderit magni
        in. Autem sunt qui aliquid ratione repellendus iusto culpa impedit
        perferendis assumenda, magnam amet dicta quod quae officiis provident
        non nisi eaque numquam aspernatur soluta! Consequatur blanditiis saepe
        quisquam quia vitae, ad eveniet. Maiores delectus repellendus numquam
        quis placeat fugit eum dolor? Ab, doloremque! Accusamus illum debitis
        nisi possimus iure delectus culpa veniam officia nam, commodi dolorum
        eius distinctio cum laudantium itaque tempore temporibus, velit
        laboriosam! Magni quam laboriosam repellat consequatur aliquam et, quas
        unde voluptatibus ullam voluptate dolorem iusto. Aliquid, omnis! Quae
        exercitationem temporibus non. Voluptate ipsa, error quos consequuntur
        eveniet quisquam quam eligendi recusandae dolorum pariatur inventore,
        accusantium deleniti maxime obcaecati dolores repellendus minus vero
        dolorem odio fugiat consectetur cumque a explicabo? Inventore, odit quod
        deleniti totam numquam officiis sed at non aut commodi sapiente alias
        amet voluptas id soluta harum sunt fuga, cum molestiae illum autem!
        Facilis ullam autem quod quasi ipsam repudiandae enim pariatur!
        Corrupti, cupiditate? Harum totam necessitatibus eius dicta libero,
        minus perferendis voluptas placeat vero dolorem nihil repudiandae?
        Quaerat incidunt praesentium porro ad veritatis ipsum nulla tempora
        minus accusamus dolor excepturi, maxime eos facilis perspiciatis, fugit
        possimus dolorem voluptate, libero ullam qui soluta laudantium! Cum
        enim, expedita accusantium totam commodi vero similique sit iure
        aspernatur. Ipsa iste dicta sapiente sunt pariatur possimus, unde eum
        nostrum quas voluptatibus autem commodi, deserunt nisi, dolore fugiat
        expedita dignissimos. Ea quis amet sed, esse incidunt ut corrupti
        tenetur doloribus illo doloremque aliquam quas mollitia, dolores
        temporibus magni ducimus ex iure reprehenderit similique vero. Ducimus
        qui voluptate esse temporibus modi dolor at magnam illo quos libero.
        Blanditiis aliquam voluptatum nesciunt? Enim, rem!
      </div>
    </>
  );
};

export default FeaturedCoins;
