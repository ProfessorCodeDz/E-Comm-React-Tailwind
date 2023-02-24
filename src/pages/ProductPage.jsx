import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../context/productsContext";

export default function ProductPage() {
  // fullsize state for image zoom
  const [fullsize, setFullsize] = useState(false);
  // get state
  const { products, setCart } = useContext(ProductsContext);
  // get id from params
  const { id } = useParams();
  // get product
  const product = products.filter((p) => p.id == id);

  return (
    <div>
      <section className="shadow-xl w-full bg-orange h-80 rounded-[30px] text-center pt-8 font-bold text-4xl">
        Product Details
      </section>
      <section className="flex-col md:flex-row shadow-xl flex w-10/12 h-80 bg-lightOrange border-whiteOrange rounded-[30px] border-4 mx-auto -translate-y-52">
        <div className="h-full basis-full px-5 py-10 flex flex-col items-center justify-center">
          <h2 className="text-violet mb-5 font-bold">{product[0].title}</h2>
          <p className="text-grey overflow-hidden">{product[0].description}</p>
          <span className="text-grey font-bold">...</span>
        </div>
        <div className="group basis-full px-3 bg-white rounded-[30px] flex flex-col items-center justify-center">
          <img
            onClick={() => setFullsize(!fullsize)}
            className={`h-2/3 group-hover:scale-[1.05] group-hover:rotate-3 cursor-pointer transition-all duration-300 ${
              fullsize &&
              "absolute top-0 w-full h-fit rounded-[20px] group-hover:rotate-0"
            }`}
            src={product[0].image}
            alt="product image"
          />
          <h3 className="text-violet font-bold mt-4">$ {product[0].price}</h3>
        </div>
        <div className="py-3 basis-full flex flex-col justify-center pl-4">
          <div className="mb-10 font-bold">Review: ⭐⭐⭐⭐⭐</div>
          <div className="flex items-center font-bold">
            Color:
            <ul className="list-none flex pr-4">
              <li className="bg-[#43d9ff] w-5 h-5 rounded-full mx-1 cursor-pointer"></li>
              <li className="bg-[#f86b03] w-5 h-5 rounded-full mx-1 cursor-pointer"></li>
              <li className="bg-[#f9c20b] w-5 h-5 rounded-full mx-1 cursor-pointer"></li>
              <li className="bg-[#ab9060] w-5 h-5 rounded-full mx-1 cursor-pointer"></li>
            </ul>
          </div>
          <button
            onClick={() => setCart((current) => [...current, parseInt(id)])}
            className="bg-black shadow-xl text-orange w-fit px-5 py-2 mt-10 rounded-[10px] cursor-pointer"
          >
            Add to cart
          </button>
        </div>
      </section>
    </div>
  );
}
