import Order from "../models/order.model.js";
import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js";

export const createOrder = async (req, res) => {
  try {
    const { name, phone, email, address, city, state, pincode } = req.body;

    const cart = await Cart.findOne({
      user: req.user.id,
    }).populate("items.product");

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        message: "Cart is Empty",
      });
    }
    let totalAmount = 0;

    const orderItems = cart.items.map((item) => {
        totalAmount += item.product.price * item.quantity;

        return {
            product:item.product._id,
            quantity:item.quantity,
            price:item.product.price
        }
    });

    const order = await Order.create({
        user:req.user.id,
        items:orderItems,

        shippingAddress :{
            name,
            phone,
            email,
            address,
            city,
            state,
            pincode
        },
        totalAmount,
    });

    cart.items = [];
    await cart.save();

    res.status(201).json({
        success:true,
        message:"Order placed successfully",
        order
    })

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
