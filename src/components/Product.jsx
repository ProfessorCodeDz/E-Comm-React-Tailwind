import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Product({ product, setCart }) {
  // destructuring product object
  const { id, image, price, title } = product;

  return (
    <div
      key={id}
      className="group overflow-hidden relative mx-10 h-80 p-5 shadow-xl bg-white flex items-center justify-between flex-col rounded-[30px]"
    >
      <button
        onClick={() => setCart((current) => [...current, id])}
        className="shadow-xl z-50 absolute right-2 -top-20 group-hover:top-2 transition-all duration-300 bg-orange p-2 rounded-full "
      >
        <BsFillCartPlusFill className="text-2xl text-black " />
      </button>
      <Link to={`/products/${id}`}>
        <button className="shadow-xl z-50 absolute top-16 -right-20 group-hover:right-2 transition-all duration-300 bg-orange p-2 rounded-full ">
          <AiFillEye className="text-2xl text-black " />
        </button>
      </Link>
      <img
        className="h-[60%] hover:scale-110 hover:rotate-2 transition duration-300 cursor-pointer"
        src={image}
        alt="product image"
      />
      <div>
        <Link to={`/products/${id}`}>
          <h4 className="text-center cursor-pointer text-sm text-violet font-bold pb-1">
            {title}
          </h4>
        </Link>
        <p className="text-center text-grey">$ {price}</p>
      </div>
    </div>
  );
}
