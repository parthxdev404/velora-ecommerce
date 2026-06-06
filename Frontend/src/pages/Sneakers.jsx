import React , {useState,useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";

const Sneakers = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () =>{
      try {
        const response = await fetch(
          "http://localhost:4000/api/products?category=sneakers"
        );

        const data = await response.json();
        setProducts(data.products)

      } catch (error) {
          console.log(error);
          
      }
    };

    fetchProducts()

  }, [])
  

  return (
    <>
      <div>
        <h1 className="px-4 text-3xl sm:text-4xl md:text-5xl lg:text-7xl mt-6 font-bold">
          Urban Kicks
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 p-4">
          {products.map((shoes) => {
            return (
              <div className="mt-4" key={shoes._id}>
                <Link to={`/product/sneakers/${shoes._id}`}>
                  <img
                    className="h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full object-cover"
                    src={shoes.image}
                    alt=""
                  />
                  <h1 className="text-base sm:text-lg mt-2">{shoes.name}</h1>
                  <h1 className="text-base sm:text-2xl ">
                    {"₹"}
                    {shoes.price}
                  </h1>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sneakers;
