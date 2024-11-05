import { useEffect, useState } from "react";
import DashboardContent from "./DashboardContent";
import { useNavigate } from "react-router-dom";
import group from "../../../assets/Group.png";

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [showcart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);

  const localCardItem = localStorage.getItem("cardItem");
  const item = JSON.parse(localCardItem) || "";
  const product = item;
  const [defaulProduct, setDefaultProduct] = useState([...product]);
  let currPrice = 0;

  defaulProduct.map((item) => (currPrice += item.price));
  let totalPrice = currPrice.toFixed(2);
  const [price, setPrice] = useState(totalPrice);
  const romoveItemHandler = () => {
    setPrice(0);
  };

  const showCartProduct = (stgitem) => {
    const localCardItem = localStorage.getItem(stgitem);
    const item = JSON.parse(localCardItem) || "";
    setItems(item);
    setShowWishlist(false);
    setShowCart(true);
  };
  const showWishListProduct = (stgitem) => {
    const localCardItem = localStorage.getItem(stgitem);
    const item = JSON.parse(localCardItem) || "";
    setItems(item);
    setShowWishlist(true);
    setShowCart(false);
  };

  const [isOnClick, setIsOnClick] = useState(false);

  const sortPrice = (arr) => {
    setDefaultProduct([...arr.sort((a, b) => b.price - a.price)]);
  };

  const navigate = useNavigate();

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const clearItem = (item) => {
    setShowPaymentModal(true);
    localStorage.removeItem(item);
  };

  const title = "Gadget Heaven || Dashboard";

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      {showPaymentModal && (
        <div className="fixed min-w-full h-[100vh] bg-transparent flex justify-center z-30">
          <div className="paymentModal p-20 bg-white flex justify-center items-center text-black flex-col rounded-lg gap-4 max-w-md text-center h-fit">
            <img src={group} alt="" />
            <h4 className="font-bold text-xl">Payment Successfully</h4>
            <p>Thanks for purchasing. Total:{totalPrice}</p>
            <button
              onClick={() => {
                navigate("/");
              }}
              className="btn btn-neutral"
            >
              close
            </button>
          </div>
        </div>
      )}
      <section className="py-2 bg-purple-600 rounded-b-3xl mx-4 mb-8">
        <div className="max-w-5xl relative flex flex-col gap-6 mx-auto justify-center items-center text-center p-12 text-white">
          <h3 className="text-5xl font-bold">Dashboard</h3>
          <p className="text-base">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div>
            <button
              className={
                showcart || !isOnClick
                  ? "bg-white text-purple-600 border border-purple-600 px-4 py-2 rounded-full"
                  : "bg-purple-600 text-white px-4 py-2 rounded-full"
              }
              onClick={() => {
                showCartProduct("cardItem");
                setIsOnClick(true);
              }}
            >
              Card
            </button>
            <button
              className={
                showWishlist
                  ? "bg-white text-purple-600 border border-purple-600 px-4 py-2 rounded-full"
                  : "bg-purple-600 text-white px-4 py-2 rounded-full"
              }
              onClick={() => {
                showWishListProduct("wishlistItem");
                setIsOnClick(true);
              }}
            >
              Wishlist
            </button>
          </div>
        </div>
      </section>
      <div className="mx-4 mb-8">
        {!isOnClick && (
          <div>
            <div className="flex flex-col lg:flex-row justify-between max-w-6xl mx-auto items-center">
              <h3 className="text-2xl font-bold">Cart</h3>
              <p className="flex flex-col lg:flex-row items-center">
                <span className="mr-4 font-bold text-lg text-black">
                  Total Price : {price}
                </span>
                <button
                  onClick={() => sortPrice(defaulProduct)}
                  className="border px-4 py-2 rounded-full mr-4"
                >
                  Sort by price
                </button>
                {totalPrice !== "0.00" ? (
                  <button
                    className="border px-4 py-2 rounded-full mr-4"
                    onClick={() => clearItem("cardItem")}
                  >
                    Purchase
                  </button>
                ) : (
                  <button
                    className="border px-4 py-2 rounded-full mr-4"
                    onClick={() => clearItem("cardItem")}
                    disabled
                  >
                    Purchase
                  </button>
                )}
              </p>
            </div>
            <div>
              {defaulProduct.length > 0
                ? defaulProduct.map((item, i) => (
                    <DashboardContent
                      key={i}
                      item={item}
                      localStoragekey={"cardItem"}
                      romoveItemHandler={romoveItemHandler}
                    />
                  ))
                : "No Product found"}
            </div>
          </div>
        )}
        {showcart && (
          <div>
            <div className="flex justify-between max-w-6xl mx-auto items-center">
              <h3 className="text-2xl font-bold">Cart</h3>
              <p>
                <span className="mr-4 font-bold text-lg text-black">
                  Total Price : {price}
                </span>
                <button
                  onClick={() => sortPrice(items)}
                  className="border px-4 py-2 rounded-full mr-4"
                >
                  Sort by price
                </button>
                {totalPrice !== "0.00" ? (
                  <button
                    className="border px-4 py-2 rounded-full mr-4 btn"
                    onClick={() => clearItem("cardItem")}
                  >
                    Purchase
                  </button>
                ) : (
                  <button
                    className="border px-4 py-2 rounded-full mr-4 btn"
                    onClick={() => clearItem("cardItem")}
                    disabled
                  >
                    Purchase
                  </button>
                )}
              </p>
            </div>
            <div>
              {items.length > 0
                ? items.map((item, i) => (
                    <DashboardContent
                      key={i}
                      item={item}
                      localStoragekey={"cardItem"}
                      romoveItemHandler={romoveItemHandler}
                    />
                  ))
                : "No Product found"}
            </div>
          </div>
        )}
        {showWishlist && items.length > 0 && (
          <div>
            <div className="text-2xl font-bold text-left max-w-6xl mx-auto mb-8">
              Wishlist
            </div>
            <div>
              {items.map((item, i) => (
                <DashboardContent
                  key={i}
                  item={item}
                  localStoragekey={"wishlistItem"}
                  romoveItemHandler={romoveItemHandler}
                />
              ))}
            </div>
          </div>
        )}
        {showWishlist && items.length === 0 && (
          <div>
            <div className="text-2xl font-bold text-left max-w-6xl mx-auto mb-8">
              Wishlist
            </div>
            No Product found
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
