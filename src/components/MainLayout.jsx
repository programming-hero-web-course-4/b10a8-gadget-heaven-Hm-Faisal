import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = () => {
  return (
    <>
      <Header />

      <div className=" mx-4">
        {/* Dynamic content */}
      <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default MainLayout;
