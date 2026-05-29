import React from "react";
import background from "../assets/Background.png";
import { Link } from "react-router-dom";
import BrandList from "../components/BrandList";

const Home = () => {
  return (
    <>
      <div className="w-full bg-black text-white text-xs sm:text-sm py-2 px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-2 tracking-wide text-center">
        <span>Limited Time ✦ 30% Off</span>

        <span>Free Shipping ✦ On All Orders</span>

        <span>New Season ✦ Now Live</span>
      </div>

      {/* Hero Section */}
      <div
        className="flex flex-col lg:flex-row items-start justify-between px-5 sm:px-8 lg:px-14 py-10"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <section className="text-white">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none">
            ELEVATE
          </h1>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none">
            STYLE
          </h1>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none">
            EASE
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mt-4 leading-relaxed">
            Just the right <br />
            pieces to upgrade <br />
            your everyday look
          </p>

          <Link
            className="inline-block text-sm sm:text-lg md:text-xl font-medium bg-white text-black py-3 px-6 sm:px-10 cursor-pointer mt-8 hover:scale-105 transition-all duration-300"
            to="/clothing"
          >
            SHOP NOW
          </Link>
        </section>

        <section className="text-white mt-12 lg:mt-0 self-end lg:self-start">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none">
            YOUR
          </h1>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none">
            WITH
          </h1>
        </section>
      </div>
    </>
  );
};

export default Home;
