import React from "react";
import { Link } from "react-router-dom";
import { clothingData } from "../data/ClothingData";
import Footer from "../components/Footer";

const Clothing = () => {
  return (
    <>
      <div className="flex items-center justify-between p-4 text-black mt-4 ">
        <h1 className="text-6xl px-4 font-bold">Men Wear</h1>
        <Link
          to="/clothing/men"
          className="px-4 p-3 mx-4 bg-black text-white text-xl font-medium "
        >
          Explore More{" "}
        </Link>
      </div>

      <section className="grid grid-cols-5 gap-2 mt-5 p-2">
        {clothingData.men.slice(0, 5).map((product) => {
          return (
            <div key={product.id}>
              <img
                className="w-full h-[500px] object-cover"
                src={product.image}
                alt=""
              />
              <h1 className="text-xl pt-2 px-2">{product.name}</h1>
            </div>
          );
        })}
      </section>
      <div className="flex items-center justify-between p-4 text-black mt-4">
        <h1 className="text-6xl px-4 font-bold">Women Wear</h1>
        <Link
          to="/clothing/women"
          className="px-4 p-3 mx-4 bg-black text-white text-xl font-medium "
        >
          Explore More{" "}
        </Link>
      </div>

      <section className="grid grid-cols-5 gap-2 mt-5 p-2">
        {clothingData.women.slice(0, 5).map((product) => {
          return (
            <div key={product.id}>
              <img
                className="w-full h-[500px] object-cover"
                src={product.image}
                alt=""
              />
              <h1>{product.name}</h1>
              <p>{product.description}</p>
            </div>
          );
        })}
      </section>

      <div className="flex items-center justify-between p-4 text-black mt-4">
        <h1 className="text-6xl px-4 font-bold">Boys Wear</h1>
        <Link
          to="/clothing/boys"
          className="px-4 p-3 mx-4 bg-black text-white text-xl font-medium "
        >
          Explore More{" "}
        </Link>
      </div>

      <section className="grid grid-cols-5 gap-2 mt-5 p-2">
        {clothingData.boys.slice(0, 5).map((product) => {
          return (
            <div key={product.id}>
              <img
                className="w-full h-[500px] object-cover"
                src={product.image}
                alt=""
              />
              <h1>{product.name}</h1>
              <p>{product.description}</p>
            </div>
          );
        })}
      </section>

      <div className="flex items-center justify-between p-4 text-black mt-4">
        <h1 className="text-6xl px-4 font-bold">Girls Wear</h1>
        <Link
          to="/clothing/girls"
          className="px-4 p-3 mx-4 bg-black text-white text-xl font-medium "
        >
          Explore More{" "}
        </Link>
      </div>

      <section className="grid grid-cols-5 gap-2 mt-5 pb-4 p-2">
        {clothingData.girls.slice(0, 5).map((product) => {
          return (
            <div key={product.id}>
              <img
                className="w-full h-[500px] object-cover"
                src={product.image}
                alt=""
              />
              <h1>{product.name}</h1>
              <p>{product.description}</p>
            </div>
          );
        })}
      </section>
      <Footer />
    </>
  );
};

export default Clothing;
