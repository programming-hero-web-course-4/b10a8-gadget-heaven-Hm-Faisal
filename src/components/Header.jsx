import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const localCardItem = localStorage.getItem("cardItem");
  const cardItem = JSON.parse(localCardItem) || "";
  const cardlength = cardItem.length;

  const localWishlistItem = localStorage.getItem("wishlistItem");
  const wishlistItem = JSON.parse(localWishlistItem) || "";
  const wishlistLength = wishlistItem.length;

  return (
    <header
      className={
        location.pathname === "/"
          ? "bg-purple-600 rounded-t-3xl mx-4 mt-8"
          : " mx-4 mt-8"
      }
    >
      <div className="navbar max-w-full">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <NavLink
              tabIndex={0}
              className="menu menu-sm dropdown-content text-black font-bold text-base bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/statistics"}>Statistics</Link>
              </li>
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
              <li>
                <Link to={"/privacyandpolicy"}>Privacy and Policy</Link>
              </li>
            </NavLink>
          </div>
          <Link
            to={"/"}
            className={
              location.pathname === "/"
                ? "btn btn-ghost text-xl text-white"
                : "text-xl text-black"
            }
          >
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <NavLink
            className={
              location.pathname === "/"
                ? "menu menu-horizontal px-1 text-white font-bold text-base"
                : "menu menu-horizontal px-1 text-black font-bold text-base"
            }
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/statistics"}>Statistics</Link>
            </li>
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <Link to={"/privacyandpolicy"}>Privacy and Policy</Link>
            </li>
          </NavLink>
        </div>
        <div className="navbar-end">
          <Link
            className={
              location.pathname === "/"
                ? "border rounded-full text-xl font-bold p-4 mr-4 text-white relative"
                : "border rounded-full text-xl font-bold p-4 mr-4 text-black relative"
            }
            to={"/dashboard"}
          >
            <span className="absolute -top-8 bg-gray-300 text-black px-4 py-2 rounded border -right-4">
              {cardlength ? cardlength : "0"}
            </span>
            <IoCartOutline />
          </Link>
          <Link
            to={"/dashboard"}
            className={
              location.pathname === "/"
                ? "border rounded-full text-xl font-bold p-4 mr-4 text-white relative"
                : "border rounded-full text-xl font-bold p-4 mr-4 text-black relative"
            }
          >
            <span className="absolute -top-8 bg-gray-300 text-black px-4 py-2 rounded border -right-4">
              {wishlistLength ? wishlistLength : "0"}
            </span>
            <FaRegHeart />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
