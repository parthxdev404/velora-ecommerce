import React from "react";
import banner1 from "../assets/Banner1.png";
import banner2 from "../assets/Banner2.png";
import banner3 from "../assets/Banner3.png";
import banner4 from "../assets/Banner4.png";

const Collection = () => {
  return (
    <div className="flex items-center flex-col justify-center">
      <h1 className="text-black text-7xl font-semibold text-center mt-10 p-4">
        ALL COLLECTIONS
      </h1>
      <main className="p-4 relative">
        <div className="overflow-hidden h-52 transition-all">
          <img className="object-cover " src={banner1} />
          <h1 className="absolute bottom-4 left-4 text-white">cdscdscds</h1>
        </div>
        <div className="overflow-hidden h-52 transition-all">
          <img className="object-cover " src={banner2} />
        </div>
        <div className="overflow-hidden h-52 transition-all">
          <img className="object-cover " src={banner3} />
        </div>
        <div className="overflow-hidden h-52 transition-all">
          <img className="object-cover " src={banner4} />
        </div>
      </main>
    </div>
  );
};

export default Collection;
