import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { product_id, product_title, product_image, price } = product;
  const clickHandler = useNavigate();

  return (
    <div className="flex flex-col gap-4 items-start">
      <img src={product_image} alt="" className="w-56 h-44" />
      <h4 className="text-xl font-bold">{product_title}</h4>
      <p>{price}</p>
      <button
        className="px-4 py-2 rounded-full border border-purple-500"
        onClick={() => clickHandler(`/productDetails/${product_id}`)}
      >
        View Details
      </button>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
