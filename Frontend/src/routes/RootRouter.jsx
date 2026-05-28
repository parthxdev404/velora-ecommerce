import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import About from "../pages/About";
import Essentials from "../pages/Essentials";
import Collection from "../pages/Collection";
import Footer from "../components/Footer";
import SignUp from "../pages/SignUp";
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
            element={isLoggedIn ? (to = "/") : <SignUp />}
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
          <Route path="/clothing" />
          <Route path="/sounds" />
          <Route path="/accessories" />
          <Route path="/sneakers" />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default RootRouter;
