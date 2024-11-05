import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout.jsx";
import Home from "./components/pages/home/Home.jsx";
import ProductDetails from "./components/pages/home/product/ProductDetails.jsx";
import Dashboard from "./components/pages/dashboard/Dashboard.jsx";
import DashboardContent from "./components/pages/dashboard/DashboardContent.jsx";
import Nofound from "./components/Nofound.jsx";
import PrivacyAndPolicy from "./components/pages/privacyAndPolicy/PrivacyAndPolicy.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Nofound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails />,
        loader: () => fetch("../Data.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardContent />,
          },
        ],
      },
      {
        path: "/privacyandpolicy",
        element: <PrivacyAndPolicy />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
