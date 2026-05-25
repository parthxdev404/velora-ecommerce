import React from "react";
import brandlist from "../data/brandlist";

const BrandList = () => {
  return (
    <>
      <div className="flex gap-14 items-center justify-center mt-10">
        {brandlist.map((brand, idx) => {
          return (
            <div key={idx}>
              <img className="h-24" src={brand.img} alt={brand.name} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BrandList;
