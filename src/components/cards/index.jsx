import React, { useEffect, useState } from "react";
import Card from "./card";
import axios from "axios";

const Cards = () => {
  let [data, setData] = useState([]);
  let fetchFunc = async () => {
    let newData = await axios.get(`${import.meta.env.VITE_BASE_URL}/contact`);
    setData(newData.data);
  };
  useEffect(() => {
    fetchFunc();
  }, []);
  return (
    <div className="grid cursor-pointer grid-cols-4 gap-5 py-7 w-[95%] mx-auto">
      {data.map((value) => (
        <Card {...value} key={value.id} />
      ))}
    </div>
  );
};

export default Cards;
