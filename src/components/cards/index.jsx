import React, { useEffect, useState } from "react";
import Card from "./card";
import axios from "axios";
import Skeleton from "./skeleton/inde";

const Cards = () => {
  let [data, setData] = useState([]);
  let [state, setState] = useState(true);
  let fetchFunc = async () => {
    setState(true);
    let newData = await axios.get(`${import.meta.env.VITE_BASE_URL}/contact`);
    setData(newData.data);
    setState(false);
  };
  useEffect(() => {
    fetchFunc();
  }, []);
  return (
    <div className="grid cursor-pointer grid-cols-4 gap-5 py-7 w-[95%] mx-auto">
      {state
        ? [
            <Skeleton key={1} />,
            <Skeleton key={2} />,
            <Skeleton key={3} />,
            <Skeleton key={4} />,
            <Skeleton key={5} />,
            <Skeleton key={6} />,
            <Skeleton key={7} />,
            <Skeleton key={8} />,
          ]
        : data.map((value) => <Card {...value} key={value.id} />)}
    </div>
  );
};

export default Cards;
