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
      <SingleCoinPage id={params.id}/>
    </div>
  );
};

export default page;
