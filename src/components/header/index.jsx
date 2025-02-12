import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

// svg
import logo from "../../assets/logo.svg";

// icons
import { RiTelegramLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { TbGridDots } from "react-icons/tb";
import { ProductContext } from "../../context";

// #6b59cc
const Header = () => {
  let {state}=useContext(ProductContext)
  
  return (
    <>
      <div className="border-b border-[#a9a9a9] py-2">
        <div className="flex w-[95%] mx-auto items-center gap-4 justify-between">
          <div className="flex items-center gap-1">
            <RiTelegramLine />
            <p className="text-[12px] text-[#1b1d1f]">
              г. Нижний Новгород, Нижегородская обл.
            </p>
          </div>
          <div className="flex items-center gap-1">
            <FiPhone />
            <a href="tel:+7 (347) 229-46-45" className=" text-[#1b1d1f]">
              <p className=" text-[#1b1d1f]">+7 (347) 229-46-45</p>
            </a>
          </div>
          <div className="text-[12px] text-[#55556d] flex items-center gap-2">
            <NavLink to="/delevery">Доставка</NavLink>
            <NavLink to="/payment">Оплата</NavLink>
            <NavLink to="/contact">Контакты</NavLink>
          </div>
        </div>
      </div>
      <div className="pb-5 shadow-[0_5px_20px_0_rgba(44,41,51,0.1)]">
        <div className="w-[95%] mx-auto flex items-center gap-4 py-4">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
          <div className="border border-gray-400 flex items-center gap-2 rounded-md w-full">
            <input
              type="text"
              placeholder="Введите номер запчасти или VIN"
              className=" rounded-l-md px-3 w-full"
            />
            <button className="rounded-r-md bg-[#6b59cc] text-white  py-2 px-4  flex items-center gap-2">
              <IoSearch />
              Искать
            </button>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex  items-center gap-2 py-2 px-4">
              <FaRegUser />
              <p className="text-[14px] text-nowrap  ">Вход / Регистрация</p>
            </div>
            <NavLink to="/contact">
              <div className="border border-[#dedee2] flex items-center gap-3 px-3 py-2  rounded-md ">
                <LuShoppingCart color="#6b59cc" />
                <p className="text-[14px]">Корзина</p>

                {/* cart length */}
                <div className="text-[14px] rounded-md bg-[#fb6019] w-fit px-1.5 text-white ">
                {state.data.length}
                </div>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="w-[95%] mx-auto ">
          <div className="flex items-center gap-4">
            <button className="text-[14px] text-white flex items-center gap-2 px-3 py-2 rounded-md  bg-[#6b59cc]">
              <TbGridDots color="white" />
              Все категории
            </button>
            <button className="text-[14px] bg-[#f4f5f6]  px-3 py-2 rounded-md  ">
              Запчасти для ТО
            </button>
            <button className="text-[14px] bg-[#f4f5f6]  px-3 py-2 rounded-md  ">
              Автомасла
            </button>
            <button className="text-[14px] bg-[#f4f5f6]  px-3 py-2 rounded-md  ">
              Оригинальные запчасти
            </button>
            <button className="text-[14px] bg-[#f4f5f6]  px-3 py-2 rounded-md  ">
              Неоригинальные запчасти
            </button>
            <button className="text-[14px] bg-[#f4f5f6]  px-3 py-2 rounded-md  ">
              Лампочки
            </button>
            <button className="text-[14px] bg-[#f4f5f6]  px-3 py-2 rounded-md  ">
              Аккумуляторы
            </button>
          </div>
        </div>
      </div>

      {/* <NavLink  to="/">home</NavLink>
      <NavLink to="about">about</NavLink>
      <NavLink to="contact">cart</NavLink>
      <NavLink to="faq">faq</NavLink> */}
    </>
  );
};

export default Header;
