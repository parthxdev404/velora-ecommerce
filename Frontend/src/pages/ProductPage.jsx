import { useState, useEffect } from "react";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const { category, id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/products/${id}`,
        );

        const data = await response.json();
        setProduct(data.product);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    const fetchRelated = async () => {
      try {
        if (!product) return;
        let url = `${import.meta.env.VITE_API_URL}/api/products?category=${product.category}`;

        if (product.subCategory) {
          url += `&subCategory=${product.subCategory}`;
        }

        const response = await fetch(url);

        const data = await response.json();

        const filtered = (data.products || [])
          .filter((p) => p._id !== product._id)
          .slice(0, 6);

        setRelatedProducts(filtered);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRelated();
  }, [product]);

  if (!product) {
    return <h1 className="text-center mt-10">Loading...</h1>;
  }

  const getImage = (p) => p.image || p.images?.[0] || p.imageUrl || "";

  const handleAddToCart = () => {
    if ((category === "clothing" || category === "sneakers") && !selectedSize) {
      alert("Please select a size");
      return;
    }

    addToCart({
      ...product,
      size: selectedSize,
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart/checkout");
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10 p-6 max-w-7xl mx-auto">
        <img
          src={getImage(product)}
          className="lg:w-1/2 w-full h-[500px] object-cover"
          alt={product.name}
        />

        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold">{product.name}</h1>

          <p className="mt-4">{product.description}</p>

          <h2 className="text-3xl mt-6">₹{product.price}</h2>

          {(category === "clothing" || category === "sneakers") && (
            <div className="mt-6">
              <h3>Select Size</h3>

              <div className="flex gap-3 mt-2">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border px-4 py-2 ${
                      selectedSize === size ? "bg-black text-white" : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4 mt-8">
            <button
              onClick={handleAddToCart}
              className="bg-black text-white px-6 py-3"
            >
              Add To Cart
            </button>

            <button
              onClick={handleBuyNow}
              className="bg-black text-white px-6 py-3"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20 px-6">
        <h2 className="text-3xl text-center">Related Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {relatedProducts.map((item) => (
            <Link key={item._id} to={`/product/${category}/${item._id}`}>
              <img
                src={getImage(item)}
                className="h-[350px] w-full object-cover"
                alt={item.name}
              />
              <p className="p-2">{item.name}</p>
              <p className="px-2">₹{item.price}</p>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductPage;
