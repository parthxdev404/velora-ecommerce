import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { clothingData } from "../data/ClothingData";

const SectionPage = () => {
  const { section } = useParams();
  const products = clothingData[section];

  return (
    <div>
      <h1 className="text-5xl px-4 pt-8 uppercase font-semibold">
        {section} Collections
      </h1>

      <div className="grid grid-cols-5 gap-5 mt-5 p-4">
        {products.map((product) => {
          return (
            <Link key={product.id} to={`/product/clothing/${product.id}`}>
              <div>
                <img
                  className="w-full h-[500px] object-cover "
                  src={product.image}
                  alt={product.name}
                />
                <h2 className="text-xl p-2">{product.name}</h2>
                <p className="text-xl px-2">
                  {"₹"}
                  {product.price}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SectionPage;
