import React from "react";
import brandlist from "../data/brandlist";

const BrandList = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14 px-4 py-10">
        {brandlist.map((brand, idx) => {
          return (
            <div key={idx} className="flex items-center justify-center">
              <img
                className="h-10 sm:h-14 md:h-20 lg:h-24 object-contain transition-all duration-300 hover:scale-110"
                src={brand.img}
                alt={brand.name}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BrandList;
