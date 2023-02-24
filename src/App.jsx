import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";
import { ProductsContext } from "./context/productsContext";
import Header from "./components/Header";
import Cart from "./pages/Cart";

function App() {
  // all products
  const [products, setProducts] = useState([]);
  // cart products IDs
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // fetch products
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div className="container mx-auto">
      <ProductsContext.Provider value={{ products, cart, setCart }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ProductsContext.Provider>
    </div>
  );
}

export default App;
