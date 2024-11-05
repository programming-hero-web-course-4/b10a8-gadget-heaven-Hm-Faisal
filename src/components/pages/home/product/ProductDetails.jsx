import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import {
  addToCard,
  addToWishlist,
  getlocalstgItems,
} from "../../../../utils/functions";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Rating from "react-rating";

const ProductDetails = () => {
  const navigate = useNavigate();

  const allProduct = useLoaderData();
  const { id } = useParams();
  const [cardAdded, setCardAdded] = useState(false);
  const [wishlistAdded, setWishlistAdded] = useState(false);

  const showProductDetails = allProduct.filter(
    (product) => product.product_id === id
  );
  const productItem = showProductDetails[0];

  function addToCardHandler(productItem) {
    addToCard(productItem);
    setCardAdded(true);
    toast.success("Card Added Successfully!");
    navigate(`/productDetails/${productItem.product_id}`);
  }
  function addToWishlistHandler(productItem) {
    addToWishlist(productItem);
    setWishlistAdded(true);
    toast.success("Item Added to Wishlist Successfully!");
    navigate(`/productDetails/${productItem.product_id}`);
  }

  // check card item exist
  const savedCardItems = getlocalstgItems("cardItem");
  const Carditem = savedCardItems.find(
    (item) => item.product_id === productItem.product_id
  );
  // check wish list  item exist
  const savedwislist = getlocalstgItems("wishlistItem");
  const wishlistItem = savedwislist.find(
    (item) => item.product_id === productItem.product_id
  );

  return (
    <section className="pt-2 pb-24 bg-purple-600 rounded-b-3xl mb-[50%] mx-1 lg:mx-4">
      <ToastContainer className="absolute top-8 left-[45%" bg-white />
      <div className="max-w-5xl relative flex flex-col gap-6 mx-auto justify-center items-center text-center p-12 text-white">
        <h3 className="text-5xl font-bold">Product Details</h3>
        <p className="text-base">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="productDetails flex flex-col lg:flex-row gap-16 relative lg:absolute top-[100%] text-gray-600 bg-white max-w-5xl w-full p-2 lg:p-32 rounded-xl">
          <div className="image flex-1 max-w-lg">
            <img src={productItem.product_image} alt="" />
          </div>
          <div className="content text-left flex flex-col flex-1 gap-2">
            <h3 className="text-2xl font-bold text-black">
              {productItem.product_title}
            </h3>
            <p className="text-base font-bold ">price: $ {productItem.price}</p>
            <p>
              <span className="px-4 py-2 border border-green-500 rounded-full">
                {productItem.availability ? "In stock" : "Out of Stock"}
              </span>
            </p>
            <p>{productItem.description}</p>
            <p className="text-base font-bold text-black">Specification:</p>
            <ul>
              {productItem.Specification.map((spec, i) => (
                <li key={i}>
                  {i + 1}. {spec}
                </li>
              ))}
            </ul>

            <p className="text-base font-bold text-black">Rating</p>
            <p className="flex gap-4 justify-start items-center relative">
              <span className="flex z-10">
                <Rating
                  initialRating={productItem.rating}
                  fractions={1}
                  emptySymbol={<FaStar className="text-gray-400" />}
                  fullSymbol={<FaStar className="text-yellow-400" />}
                />
              </span>
              <span>{productItem.rating}</span>
            </p>
            <div className="flex flex-col lg:flex-row gap-4">
              {JSON.stringify(Carditem) !== JSON.stringify(productItem) &&
              !cardAdded ? (
                <button
                  className="btn btn-secondary mr-4"
                  onClick={() => addToCardHandler(productItem)}
                >
                  Add to card
                  <span>
                    <IoCartOutline />
                  </span>
                </button>
              ) : (
                <button className="btn btn-secondary mr-4" disabled>
                  Add to card
                  <span>
                    <IoCartOutline />
                  </span>
                </button>
              )}
              {JSON.stringify(wishlistItem) !== JSON.stringify(productItem) &&
              !wishlistAdded ? (
                <button
                  className="btn btn-secondary mr-4"
                  onClick={() => addToWishlistHandler(productItem)}
                >
                  Add to wishlist
                  <span>
                    <FaRegHeart />
                  </span>
                </button>
              ) : (
                <button className="btn btn-secondary mr-4" disabled>
                  Add to wishlist
                  <span>
                    <FaRegHeart />
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
