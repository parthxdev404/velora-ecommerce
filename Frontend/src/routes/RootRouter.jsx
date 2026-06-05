import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import About from "../pages/About";
import Essentials from "../pages/Essentials";
import Collection from "../pages/Collection";
import Footer from "../components/Footer";
import SignUp from "../pages/SignUp";
import Clothing from "../pages/Clothing";
import Accessories from "../pages/Accessories";
import Sneakers from "../pages/Sneakers";
import Sounds from "../pages/Sounds";
import SectionPage from "../pages/SectionPage";
import ProductPage from "../pages/ProductPage";
import ProtectedRoutes from "./ProtectedRoutes";
import CartPage from "../pages/CartPage";
import CheckOut from "../pages/CheckOut";
import OrderSuccess from "../pages/OrderSuccess";

const RootRouter = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={isLoggedIn ? <Navigate to="/" /> : <SignUp />}
          />
          <Route
            path="/"
            element={
              <>
                <ProtectedRoutes>
                  <Home />,
                  <About />,
                  <Essentials />,
                  <Collection />,
                  <Footer />
                </ProtectedRoutes>
              </>
            }
          />
         
          <Route path="/clothing" element={ <ProtectedRoutes><Clothing /></ProtectedRoutes>} />
          <Route path="/clothing/:section" element={<ProtectedRoutes><SectionPage /></ProtectedRoutes>} />
          <Route path="/sounds" element={<ProtectedRoutes><Sounds /></ProtectedRoutes>} />
          <Route path="/accessories" element={<ProtectedRoutes><Accessories /></ProtectedRoutes>} />
          <Route path="/sneakers" element={<ProtectedRoutes><Sneakers /></ProtectedRoutes>} />
          <Route path="/product/:category/:id" element={<ProtectedRoutes><ProductPage /></ProtectedRoutes>} />
          <Route path="/cart" element={<ProtectedRoutes><CartPage /></ProtectedRoutes>} />
          <Route path="/cart/checkout" element={<ProtectedRoutes><CheckOut /></ProtectedRoutes>} />
          <Route path="/order-success" element={<ProtectedRoutes><OrderSuccess /></ProtectedRoutes>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default RootRouter;
