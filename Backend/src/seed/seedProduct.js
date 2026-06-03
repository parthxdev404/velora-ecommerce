import dotenv from "dotenv";
import dns from "dns";
import connectDB from "../configs/db.js";
import Product from "../models/product.model.js";
import sneakerData from "./sneakerData.js";
import clothingData from "./clothingData.js";
import soundData from "./soundData.js";
import accessoryData from "./accessoryData.js";

dns.setServers(["8.8.8.8", "1.1.1.1"]);
dotenv.config();

const seedProducts = async () => {
  try {
    console.log("MONGO_URI =", process.env.MONGO_URI);
    await connectDB();

    const sneakers = sneakerData.map((product) => ({
      name: product.name,
      description: product.description,
      image: product.image,
      price: Number(product.price),
      category: "sneakers",
      stock: 10,
    }));

    const menClothing = clothingData.men.map((product) => ({
      name: product.name,
      description: product.description,
      image: product.image,
      price: Number(product.price),
      category: "clothing",
      subCategory: "men",
      stock: 10,
    }));

    const womenClothing = clothingData.women.map((product) => ({
      name: product.name,
      description: product.description,
      image: product.image,
      price: Number(product.price),
      category: "clothing",
      subCategory: "women",
      stock: 10,
    }));
    const boysClothing = clothingData.boys.map((product) => ({
      name: product.name,
      description: product.description,
      image: product.image,
      price: Number(product.price),
      category: "clothing",
      subCategory: "boys",
      stock: 10,
    }));
    const girlsClothing = clothingData.girls.map((product) => ({
      name: product.name,
      description: product.description,
      image: product.image,
      price: Number(product.price),
      category: "clothing",
      subCategory: "girls",
      stock: 10,
    }));

    const sounds = soundData.map((product) => ({
      name: product.name,
      description: product.description,
      image: product.image,
      price: Number(product.price),
      category: "sounds",
      stock: 10,
    }));

    const accessory = accessoryData.map((product) => ({
      name: product.name,
      description: product.description,
      image: product.image,
      price: Number(product.price),
      category: "accessories",
      stock: 10,
    }));

    const allProducts = [
      ...sneakers,
      ...menClothing,
      ...womenClothing,
      ...boysClothing,
      ...girlsClothing,
      ...sounds,
      ...accessory,
    ];

    await Product.insertMany(allProducts);

    console.log("Products seeded successfully");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

seedProducts();
