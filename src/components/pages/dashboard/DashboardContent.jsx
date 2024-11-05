import PropTypes from "prop-types";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const DashboardContent = ({ item, localStoragekey, romoveItemHandler }) => {
  const { product_image, product_title, description, price, product_id } = item;
  const localStoragekeys = localStoragekey;

  const [remove, setRemvoe] = useState(false);
  const navigate = useNavigate();

  const handleremove = (item) => {
    const localCardItem = localStorage.getItem(item);
    const savedItem = JSON.parse(localCardItem) || "";
    const filteredItem = savedItem.filter(
      (item) => item.product_id !== product_id
    );
    localStorage.setItem(item, JSON.stringify(filteredItem));

    navigate("/dashboard");
  };

  return (
    <>
      <div
        className={`flex flex-col relative lg:flex-row mt-8 justify-between items-center max-w-5xl mx-auto mb-12 ${
          remove && "hidden"
        }`}
      >
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          <img src={product_image} alt="" className="w-52 h-32 border" />
          <div className="">
            <h4 className="text-2xl font-bold text-black">{product_title}</h4>
            <p>{description}</p>
            <p className="text-base font-bold ">Price : {price}</p>
          </div>
        </div>
        <div className="">
          <button
            className="btn btn-ghost border border-black absolute lg:relative top-0 right-0"
            onClick={() => {
              handleremove(localStoragekeys);
              setRemvoe(true);
              romoveItemHandler()
            }}
          >
            <RxCross2 />
          </button>
        </div>
      </div>
    </>
  );
};

DashboardContent.propTypes = {
  item: PropTypes.object,
  localStoragekey: PropTypes.string,
  romoveItemHandler: PropTypes.func,
};

export default DashboardContent;
