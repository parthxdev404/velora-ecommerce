import React from "react";
import sneakerData from "../data/sneakerData";
import { Link, useParams } from "react-router-dom";

const Sneakers = () => {
  return (
    <div>
      <h1 className="px-4 text-3xl sm:text-4xl md:text-5xl lg:text-7xl mt-6 font-bold">
        Urban Kicks
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 p-4">
        {sneakerData.map((shoes) => {
          return (
            <div className="mt-4" key={shoes.id}>
              <Link to={`/product/sneakers/${shoes.id}`}>
                <img
                  className="h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full object-cover"
                  src={shoes.image}
                  alt=""
                />
                <h1 className="text-base sm:text-lg mt-2">{shoes.name}</h1>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sneakers;
