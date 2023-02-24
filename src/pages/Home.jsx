import React, { useContext, useState } from "react";
import { ProductsContext } from "../context/productsContext";
import Product from "../components/Product";

export default function Home() {
  // get state
  const { products, cart, setCart } = useContext(ProductsContext);
  // category state
  const [category, setCategory] = useState("all");

  return (
    <>
      <section className="hadow-xl w-full bg-orange h-80 rounded-[30px] text-center pt-8 font-bold text-4xl">
        <button
          onClick={() => setCategory("all")}
          className="rounded-[5px] text-sm mx-5 hover:bg-[#df6208] bg-[#f86a03] text-lightOrange py-2 px-3"
        >
          All
        </button>
        {[...new Set(products.map((p) => p.category))].map((item) => (
          <button
            onClick={() => setCategory(item)}
            key={item}
            className="rounded-[5px] text-sm mx-5 hover:bg-[#df6208] bg-[#f86a03] text-lightOrange py-2 px-3"
          >
            {item}
          </button>
        ))}
      </section>
      <section className="-translate-y-44 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {products.map((product) => {
          if (category == "all") {
            return (
              <Product
                key={product.id}
                product={product}
                cart={cart}
                setCart={setCart}
              />
            );
          } else if (category == product.category) {
            return (
              <Product
                key={product.id}
                product={product}
                cart={cart}
                setCart={setCart}
              />
            );
          }
        })}
      </section>
    </>
  );
}
