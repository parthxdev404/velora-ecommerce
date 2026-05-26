import React from "react";
import Essential1 from "../assets/Essesntial1.png";
import Essential2 from "../assets/Essesntial2.png";
import Essential3 from "../assets/Essesntial3.png";

const Essentials = () => {
  return (
    <>
      <section className="flex flex-col p-4 sm:p-6 lg:p-8 mt-10">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-semibold mt-4 text-center p-4">
          EVERYDAY ESSENTIALS
        </h1>

        <main className="flex flex-col lg:flex-row items-center justify-center gap-4">
          <div className="w-full lg:w-auto h-96 sm:h-120 lg:h-140 relative overflow-hidden cursor-pointer group">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-all"
              src={Essential1}
              alt=""
            />
            <h1 className="absolute inset-0 p-2 flex items-end text-2xl sm:text-3xl lg:text-4xl text-white font-semibold">
              EVERYDAY FITS
            </h1>
          </div>

          <div className="w-full lg:w-auto h-96 sm:h-120 lg:h-140 relative overflow-hidden cursor-pointer group">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-all"
              src={Essential2}
              alt=""
            />
            <h1 className="absolute inset-0 p-2 flex items-end text-2xl sm:text-3xl lg:text-4xl text-white font-semibold">
              HEAR BETTER
            </h1>
          </div>

          <div className="w-full lg:w-auto h-96 sm:h-120 lg:h-140 relative overflow-hidden cursor-pointer group">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-all"
              src={Essential3}
              alt=""
            />
            <h1 className="absolute inset-0 p-2 flex items-end text-2xl sm:text-3xl lg:text-4xl text-white font-semibold">
              FINAL TOUCH
            </h1>
          </div>
        </main>
      </section>
    </>
  );
};

export default Essentials;
