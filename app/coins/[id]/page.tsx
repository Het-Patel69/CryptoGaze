import React from "react";

interface props {
  params: {
    id: string;
  };
}

const page = ({ params }: props) => {
  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  );
};

export default page;
