import React, { useContext } from "react";
import { Button, Rate } from "antd";

import productImg from "../../../assets/image 18.svg";

import { LuShoppingCart } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import { ProductContext } from "../../../context";
import { replace } from "react-router-dom";

const CartItem = (props) => {
  let { id, counter, name, old_price, price, rating, reviews } = props;
  let { dispatch } = useContext(ProductContext);

  return (
    <>
      <div className="border-2  border-[#dedee2] rounded-md px-4 py-4 flex items-center gap-4  relative">
        <div className="flex items-center justify-center ">
          <img
            className="max-w-[220px] max-h-[170px]"
            src={productImg}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2">
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
          <p className="font-medium">{name}</p>
          <div className="flex items-center gap-2 justify-between">
            <div className="flex items-start gap-2">
              <p className="text-[#1b1d1f] text-[30px] font-medium">{price.toLocaleString()} ₽</p>
              <p className="text-[#7a7680] line-through">{old_price.toLocaleString()} ₽</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 text-2xl">
          <Button
            onClick={() =>
              dispatch({ type: "increment", payload: { plusId: id } })
            }
          >
            <FaPlus />
          </Button>
          <p>{counter}</p>
          <Button
            onClick={() =>
              dispatch({ type: "decrement", payload: { minusId: id } })
            }
          >
            <FaMinus />
          </Button>
        </div>
        <button
          onClick={() => dispatch({ type: "delete", payload: { id: id } })}
          className="absolute top-5 right-5 text-red-500 text-2xl !font-bold "
        >
          <FiTrash />
        </button>
      </div>
    </>
  );
};

export default CartItem;
