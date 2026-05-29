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
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/clothing/:section" element={<SectionPage />} />
          <Route path="/sounds" element={<Sounds />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/sneakers" element={<Sneakers />} />
          <Route path="/product/:category/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default RootRouter;
