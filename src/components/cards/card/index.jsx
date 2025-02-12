import { Rate } from "antd";
import React, { useContext } from "react";

import { LuShoppingCart } from "react-icons/lu";

import { ProductContext } from "../../../context";

import productImg from "../../../assets/image 18.svg";

const Card = (props) => {
  let { id, image, name, old_price, price, rating, reviews } = props;
  let { dispatch } = useContext(ProductContext);
  return (
    <div className="border-2 cursor-pointer h-full  border-[#dedee2] rounded-md px-4 py-4 flex flex-col gap-1 !justify-between my-auto  ">
      <div className="flex items-center justify-center ">
        <img className="max-w-[220px] max-h-[170px]" src={productImg} alt="" />
      </div>
      <div className="flex flex-col  gap-2 my-auto justify-between  max-h-[200px]">
        <div className="flex items-center justify-between ">
          <p className="text-[14px] text-[#7a7680]">
            Артикул: <span className="text-[#55556d]">{reviews}</span>
          </p>
          <div className="w-fit flex items-center gap-2">
            <Rate
              direction="horizontal"
              className="!text-[12px] flex gap-1  "
              defaultValue={rating}
              //   value={"rating"}
              allowHalf
              disabled
            />
            <p className="text-[12px]">{rating}</p>
          </div>
        </div>
        <p className="font-medium my-auto">{name}</p>
        <div className="flex items-center gap-2 my-auto justify-between">
          <div className="flex items-start gap-2">
            <p className="text-[#1b1d1f] text-[30px] font-medium">{price}₽</p>
            <p className="text-[#7a7680] line-through">{old_price} ₽</p>
          </div>
          <div
            onClick={() => dispatch({ type: "add", product: props })}
            className="flex items-center p-2 border-2  rounded-md w-fit border-[#6b59cc]"
          >
            <LuShoppingCart color="#6b59cc" fontWeight={900} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
