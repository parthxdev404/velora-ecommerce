import React from "react";
import background from "../assets/Background.png";
import { Link } from "react-router-dom";
import BrandList from "../components/BrandList";

const Home = () => {
  return (
    <>
      <div
        className="flex items-start justify-between p-8"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <section className="text-white">
          <h1 className="text-8xl font-bold">ELEVATE</h1>
          <h1 className="text-8xl font-bold">STYLE</h1>
          <h1 className="text-8xl font-bold">EASE</h1>
          <p className="text-2xl mt-2">
            Just the right <br /> pieces to upgrade <br /> your everyday look
          </p>
          <Link className="text-2xl font-light bg-white text-black p-2 px-10 cursor-pointer relative top-6">
            SHOP NOW
          </Link>
        </section>
        <section className="text-white">
          <h1 className="text-8xl font-bold">YOUR</h1>
          <h1 className="text-8xl font-bold">WITH</h1>
        </section>
      </div>
      <BrandList />
    </>
  );
};

export default Home;
