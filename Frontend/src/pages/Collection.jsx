import React from "react";
import banner1 from "../assets/Banner1.png";
import banner2 from "../assets/Banner2.png";
import banner3 from "../assets/Banner3.png";
import banner4 from "../assets/Banner4.png";

const Collection = () => {
  return (
    <div className="flex items-center flex-col justify-center p-4 sm:p-6 lg:p-10 overflow-hidden">
      <h1 className="text-black text-4xl sm:text-5xl lg:text-7xl font-semibold text-center mt-10 p-4">
        ALL COLLECTIONS
      </h1>

      <main className="w-full p-0 sm:p-4 lg:p-8 relative space-y-4">
        <div className="overflow-hidden h-44 sm:h-52 transition-all relative hover:h-60 sm:hover:h-72">
          <img
            className="object-cover w-full h-full cursor-pointer"
            src={banner1}
            alt=""
          />
          <h1 className="absolute bottom-4 left-4 font-semibold text-2xl sm:text-4xl lg:text-5xl text-white">
            CLOTHING
          </h1>
        </div>

        <div className="overflow-hidden h-44 sm:h-52 transition-all relative hover:h-60 sm:hover:h-72">
          <img
            className="object-cover w-full h-full cursor-pointer"
            src={banner2}
            alt=""
          />
          <h1 className="absolute bottom-4 left-4 font-semibold text-xl sm:text-4xl lg:text-5xl text-white">
            SOUND ESSENTIALS
          </h1>
        </div>

        <div className="overflow-hidden h-44 sm:h-52 transition-all relative hover:h-60 sm:hover:h-72">
          <img
            className="object-cover w-full h-full cursor-pointer"
            src={banner3}
            alt=""
          />
          <h1 className="absolute bottom-4 left-4 font-semibold text-2xl sm:text-4xl lg:text-5xl text-white">
            ACCESSORIES
          </h1>
        </div>

        <div className="overflow-hidden h-44 sm:h-52 transition-all relative hover:h-60 sm:hover:h-72">
          <img
            className="object-cover w-full h-full cursor-pointer"
            src={banner4}
            alt=""
          />
          <h1 className="absolute bottom-4 left-4 font-semibold text-2xl sm:text-4xl lg:text-5xl text-white">
            SNEARKS
          </h1>
        </div>
      </main>
    </div>
  );
};

export default Collection;
