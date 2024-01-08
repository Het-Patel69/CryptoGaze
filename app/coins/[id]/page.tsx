import SingleCoinPage from "@/components/SingleCoinPage";
import React, { useEffect } from "react";

interface props {
  params: {
    id: string;
  };
}

const page = ({ params }: props) => {
  return (
    <div>
      <h1>{params.id}</h1>
      <SingleCoinPage id={params.id}/>
    </div>
  );
};

export default page;
