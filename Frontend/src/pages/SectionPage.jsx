import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { clothingData } from "../data/ClothingData";
import Footer from "../components/Footer";
import CategoryNav from "../layouts/CategoryNav";

const SectionPage = () => {
  const { section } = useParams();
  const products = clothingData[section];

  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl px-4 pt-8 uppercase font-semibold">
            {section} Collections
          </h1>
          <CategoryNav />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-5 p-4">
          {products.map((product) => {
            return (
              <Link key={product.id} to={`/product/clothing/${product.id}`}>
                <div>
                  <img
                    className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover"
                    src={product.image}
                    alt={product.name}
                  />
                  <h2 className="text-lg sm:text-xl p-2">{product.name}</h2>
                  <p className="text-lg sm:text-xl px-2">₹{product.price}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SectionPage;
