import { useEffect } from "react";
import Banner from "./Banner";
import Products from "./product/Products";

const Home = () => {
  const title = "Gadget Heaven || Home";

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <Banner />
      <Products />
    </>
  );
};

export default Home;
