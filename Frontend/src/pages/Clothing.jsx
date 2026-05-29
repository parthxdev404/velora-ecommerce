import React from "react";
import { Link } from "react-router-dom";
import { clothingData } from "../data/ClothingData";
import Footer from "../components/Footer";

const Clothing = () => {
  return (
    <>
      <div className="flex items-center justify-between p-4 text-black mt-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-4 font-bold">
          Men Wear
        </h1>
        <Link
          to="/clothing/men"
          className="px-3 py-2 md:px-4 md:py-3 mx-4 bg-black text-white text-sm sm:text-base md:text-xl font-medium"
        >
          Explore More
        </Link>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-5 p-2">
        {clothingData.men.slice(0, 5).map((product) => {
          return (
            <div key={product.id}>
              <img
                className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover"
                src={product.image}
                alt=""
              />
            </div>
          );
        })}
      </section>

      <div className="flex items-center justify-between p-4 text-black mt-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-4 font-bold">
          Women Wear
        </h1>
        <Link
          to="/clothing/women"
          className="px-3 py-2 md:px-4 md:py-3 mx-4 bg-black text-white text-sm sm:text-base md:text-xl font-medium"
        >
          Explore More
        </Link>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-5 p-2">
        {clothingData.women.slice(0, 5).map((product) => {
          return (
            <div key={product.id}>
              <img
                className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover"
                src={product.image}
                alt=""
              />
            </div>
          );
        })}
      </section>

      <div className="flex items-center justify-between p-4 text-black mt-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-4 font-bold">
          Boys Wear
        </h1>
        <Link
          to="/clothing/boys"
          className="px-3 py-2 md:px-4 md:py-3 mx-4 bg-black text-white text-sm sm:text-base md:text-xl font-medium"
        >
          Explore More
        </Link>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-5 p-2">
        {clothingData.boys.slice(0, 5).map((product) => {
          return (
            <div key={product.id}>
              <img
                className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover"
                src={product.image}
                alt=""
              />
            </div>
          );
        })}
      </section>

      <div className="flex items-center justify-between p-4 text-black mt-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-4 font-bold">
          Girls Wear
        </h1>
        <Link
          to="/clothing/girls"
          className="px-3 py-2 md:px-4 md:py-3 mx-4 bg-black text-white text-sm sm:text-base md:text-xl font-medium"
        >
          Explore More
        </Link>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-5 pb-4 p-2">
        {clothingData.girls.slice(0, 5).map((product) => {
          return (
            <div key={product.id}>
              <img
                className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover"
                src={product.image}
                alt=""
              />
            </div>
          );
        })}
      </section>

      <Footer />
    </>
  );
};

export default Clothing;
