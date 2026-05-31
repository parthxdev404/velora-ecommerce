import React from "react";
import accessoryData from "../data/accessoryData";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Accessories = () => {
  return (
    <>
      <div>
        <h1 className="text-4xl px-4 sm:text-5xl md:text-6xl lg:text-7xl mt-4">
          Final Touch
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-2 mt-4">
          {accessoryData.map((accessory) => {
            return (
              <Link
                key={accessory.id}
                to={`/product/accessories/${accessory.id}`}
              >
                <div>
                  <img
                    className="w-full h-52 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] object-cover"
                    src={accessory.image}
                    alt={accessory.name}
                  />

                  <h1 className="text-sm sm:text-base lg:text-lg mt-2">
                    {accessory.name}
                  </h1>

                  <h1 className="text-sm sm:text-base lg:text-xl">
                    ₹{accessory.price}
                  </h1>
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

export default Accessories;
