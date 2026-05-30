import { useState } from "react";
import React from "react";
import allProducts from "../data/allProduct";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";

const ProductPage = () => {
  const { category, id } = useParams();
  const products = allProducts[category];

  const allCategoryProducts = Array.isArray(products)
    ? products
    : Object.values(products || {}).flat();

  const product = allCategoryProducts.find((items) => items.id === Number(id));

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Related Products Logic
  const currentSubCategory =
    !Array.isArray(products) &&
    Object.keys(products).find((key) =>
      products[key].some((items) => items.id === product.id),
    );

  const relatedProducts = Array.isArray(products)
    ? products.filter((item) => item.id !== product.id).slice(0, 6)
    : products[currentSubCategory]
        ?.filter((item) => item.id !== product.id)
        .slice(0, 6);

  return (
    <>
      <div className="flex justify-center mt-10 px-4">
        <div className="flex flex-col lg:flex-row justify-around gap-8 max-w-7xl w-full">
          <div className="lg:w-1/2">
            <img
              className="w-full h-[450px] sm:h-[600px] lg:h-[700px] object-cover"
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl">{product.name}</h1>

            <p className="whitespace-pre-line leading-7 text-base sm:text-lg lg:text-xl mt-4">
              {product.description}
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl mt-10 font-semibold">
              ₹{product.price}
            </h1>

            {(category === "clothing" || category === "sneakers") && (
              <div>
                <h3 className="text-lg sm:text-xl mt-4">Select Size</h3>

                <div className="flex flex-wrap gap-3 sm:gap-5 mt-2">
                  {["S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`border-2 cursor-pointer text-lg sm:text-xl px-4 py-2 ${
                        selectedSize === size ? "bg-black text-white" : ""
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <button className="px-6 py-3 bg-black cursor-pointer text-white">
                Add To Cart
              </button>

              <button className="px-6 py-3 bg-black cursor-pointer text-white">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 px-4">
        <h1 className="text-center text-3xl sm:text-4xl">Related Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {relatedProducts?.map((item) => {
            return (
              <Link key={item.id} to={`/product/${category}/${item.id}`}>
                <img
                  className="w-full h-[400px] sm:h-[500px] lg:h-[700px] object-cover"
                  src={item.image}
                  alt={item.name}
                />

                <h2 className="text-lg sm:text-xl p-2">{item.name}</h2>

                <p className="text-lg sm:text-xl px-2">₹{item.price}</p>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
