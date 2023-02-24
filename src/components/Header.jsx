import React from "react";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GiShop } from "react-icons/gi";
import { ProductsContext } from "../context/productsContext";
import { Link } from "react-router-dom";

export default function Header() {
  // get state
  const { cart } = useContext(ProductsContext);

  return (
    <header className="sticky top-0 flex z-40 items-center justify-between py-6">
      <Link to="/">
        <GiShop className="font-bold text-[50px] bg-whiteOrange p-2 rounded-[10px] w-[60px] h-[60px]">
          Shoping
        </GiShop>
      </Link>
      <Link to="cart">
        <button className="relative text-2xl bg-whiteOrange p-2 rounded-full">
          <FaShoppingCart />
          {
            <span className="absolute text-sm -top-2 -left-2 bg-orange rounded-full w-5 h-5 text-center">
              {cart.length}
            </span>
          }
        </button>
      </Link>
    </header>
  );
}
