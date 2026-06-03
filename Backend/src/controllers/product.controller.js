import Product from "../models/product.model.js";

export const getAllProducts = async (req, res) => {
  try {
    const { category, subCategory, page = 1, limit = 12 } = req.query;
    const filter = {};

    if (category) {
      filter.category = category;
    }
    if (subCategory) {
      filter.subCategory = subCategory;
    }

    const pageNumber = Number(page);
    const limitNumber = Number(limit);

    const skip = (pageNumber - 1) * limitNumber;
    const products = await Product.find(filter).skip(skip).limit(limitNumber);

    const totalProducts = await Product.find(filter);
    const totalPages = Math.ceil(totalProducts / limitNumber);

    res.status(200).json({
      success: true,
      count: products.length,
      totalProducts,
      totalPages,
      currentPage: pageNumber,
      products,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
