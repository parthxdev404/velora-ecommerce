import React from "react";
import soundData from "../data/soundData";
import { Link } from "react-router-dom";
const Sounds = () => {
  return (
    <>
      <h1 className="text-7xl p-4">Sound Essentials</h1>
      <div className="grid grid-cols-5 gap-4 p-2">
        {soundData.map((sound) => {
          return (
            <>
              <Link key={sound.id} to={`/product/sounds/${sound.id}`}>
                <div>
                  <img
                    className="h-[400px] cursor-pointer w-full object-cover"
                    src={sound.image}
                  />
                  <h1 className="text-2xl">{sound.name}</h1>
                  <h1 className="text-2xl">
                    {"₹"}
                    {sound.price}
                  </h1>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Sounds;
