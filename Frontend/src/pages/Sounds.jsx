import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

const Sounds = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () =>{
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/products?category=sounds`
        )

        const data = await response.json()
        setProducts(data.products)

      } catch (error) {
        console.log(error);
        
      }
    }
    fetchProducts()
  }, [])
  

  return (
    <>
      <h1 className="text-7xl p-4">Sound Essentials</h1>
      <div className="grid grid-cols-5 gap-4 p-2">
        {products.map((sound) => {
          return (
            <>
              <Link key={sound._id} to={`/product/sounds/${sound._id}`}>
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
