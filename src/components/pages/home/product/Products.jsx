import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState([]);
  const [btn, setBtn] = useState("");

  useEffect(() => {
    const URL = async () => {
      const res = await fetch("Data.json");
      const data = await res.json();
      setProducts(data);
      setShowProducts(data);
    };
    URL();
  }, []);

  const clickHandler = (category) => {
    setShowProducts(
      products.filter((product) => product.category === category)
    );
    category === "allProduct" && setShowProducts(products);
    setBtn(category);
  };

  return (
    <section className="mt-12 bg-gray-100 py-12">
      <h2 className="text-2xl font-bold text-black text-center mb-20">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="products flex mx-4 gap-12 flex-col lg:flex-row">
        <div className="category min-w-48">
          <ul>
            <li className="">
              <button
                onClick={() => clickHandler("allProduct")}
                className={
                  btn === "" || btn === "allProduct"
                    ? "broder bg-purple-600 rounded-full px-4 py-2 border mb-4 w-48 text-start text-white"
                    : "rounded-full px-4 py-2 border mb-4 w-48 text-start"
                }
              >
                All Products
              </button>
            </li>
            <li className="">
              <button
                onClick={() => clickHandler("laptop")}
                className={
                  btn === "laptop"
                    ? "broder bg-purple-600 rounded-full px-4 py-2 border mb-4 w-48 text-start text-white"
                    : "rounded-full px-4 py-2 border mb-4 w-48 text-start"
                }
              >
                Laptops
              </button>
            </li>
            <li className="">
              <button
                onClick={() => clickHandler("mobile")}
                className={
                  btn === "mobile"
                    ? "broder bg-purple-600 rounded-full px-4 py-2 border mb-4 w-48 text-start text-white"
                    : "rounded-full px-4 py-2 border mb-4 w-48 text-start"
                }
              >
                Phones
              </button>
            </li>
            <li className="">
              <button
                onClick={() => clickHandler("accessories")}
                className={
                  btn === "accessories"
                    ? "broder bg-purple-600 rounded-full px-4 py-2 border mb-4 w-48 text-start text-white"
                    : "rounded-full px-4 py-2 border mb-4 w-48 text-start"
                }
              >
                Accessories
              </button>
            </li>
            <li className="">
              <button
                onClick={() => clickHandler("smartWatchs")}
                className={
                  btn === "smartWatchs"
                    ? "broder bg-purple-600 rounded-full px-4 py-2 border mb-4 w-48 text-start text-white"
                    : "rounded-full px-4 py-2 border mb-4 w-48 text-start"
                }
              >
                Smart Watches
              </button>
            </li>
          </ul>
        </div>
        <div className="products flex-auto grid grid-cols-1 mx-4 lg:grid-cols-3 gap-8" id="shop">
          {showProducts.length
            ? showProducts.map((product, i) => (
                <Product key={i} product={product} />
              ))
            : "No Product Found"}
        </div>
      </div>
    </section>
  );
};

export default Products;
