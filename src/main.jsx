import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import DetailProductPage from "./Pages/detailProduct";
import ErrorPage from "./Pages/404";
import LoginPage from "./Pages/login";
import ProductPage from "./Pages/product";
import ProfilePage from "./Pages/profile";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import RegisterPage from "./Pages/register";
import store from "./redux/store";
import Navbar from "./components/Layouts/Navbar";
import DarkModeContextProvider from "./context/DarkMode";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/product/:id",
    element: <DetailProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <RouterProvider router={router} />
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>
);
