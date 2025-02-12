import React, { useContext } from "react";
import CartItem from "./cartItem";
import { ProductContext } from "../../context";
import { Button } from "antd";

const Cart = () => {
  let { state } = useContext(ProductContext);
  console.log(state);
  let totalPrice = state.data.reduce(
    (acc, value) => acc + value.price * value.counter,
    0
  );
  return (
    <div className="grid grid-cols-[3fr_1fr] gap-5 p-5">
      <div className="flex flex-col gap-4 *:shadow-md">
        {/* {state.data == [] ? ( */}
        {/* <div className="w-full h-full flex items-center justify-center flex-col p-8">
          <img
            className="h-[50%]"
            src="https://uzum.uz/static/img/shopocat.490a4a1.png"
            alt=""
          />
          <p className="text-3xl">hozircha malumot topilmadi</p>
        </div> */}
        {/* ) : ( */}
        {state.data.map((value) => (
          <CartItem key={value.id} {...value} />
        ))}
        {/* )} */}
      </div>
      <div className="p-5 border-2 rounded-md border-[#eeeeee] w-full h-fit">
        <div className=" flex items-center gap-2">
          <p className="text-2xl font-medium">total price :</p>
          <p className="text-2xl font-semibold  ">{totalPrice} ₽</p>
        </div>
        <Button className="!text-lg !bg-[#6b59cc] !text-white">Go to payment procces</Button>
      </div>
    </div>
  );
};

export default Cart;
