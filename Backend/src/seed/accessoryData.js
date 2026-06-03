const accessoryData = [
  {
    id: 126,
    name: "Midnight Shield Sunglasses",
    description:
      "Bold square-frame sunglasses designed for everyday style and UV protection.",
    image:
      "https://images.unsplash.com/photo-1610136649349-0f646f318053?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "499",
  },
  {
    id: 127,
    name: "Ivory Luxe Sunglasses",
    description:
      "Elegant oversized sunglasses with a modern and sophisticated look.",
    image:
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "799",
  },
  {
    id: 128,
    name: "Eternal Gold Ring",
    description:
      "Minimal gold ring crafted for timeless elegance and daily wear.",
    image:
      "https://plus.unsplash.com/premium_photo-1678730056676-5dfaa08449f3?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "4999",
  },
  {
    id: 129,
    name: "Silver Edge Pendant",
    description:
      "Sleek silver pendant necklace with a clean contemporary design.",
    image:
      "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1599",
  },
  {
    id: 130,
    name: "Diamond Glow Necklace",
    description: "Sparkling statement necklace that adds luxury to any outfit.",
    image:
      "https://plus.unsplash.com/premium_photo-1681276170092-446cd1b5b32d?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1999",
  },
  {
    id: 131,
    name: "Golden Chain Necklace",
    description:
      "Classic gold chain necklace perfect for layering or solo styling.",
    image:
      "https://plus.unsplash.com/premium_photo-1681276170423-2c60b95094b4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "2599",
  },
  {
    id: 132,
    name: "Trailblazer Cap",
    description:
      "Casual baseball cap built for comfort and everyday adventures.",
    image:
      "https://images.unsplash.com/photo-1560774358-d727658f457c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "399",
  },
  {
    id: 133,
    name: "Olive Classic Cap",
    description: "Versatile cap featuring a timeless design and relaxed fit.",
    image:
      "https://images.unsplash.com/photo-1690243006944-624df2d168a3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "399",
  },
  {
    id: 134,
    name: "Pure White Cap",
    description: "Clean and minimalist cap that complements any wardrobe.",
    image:
      "https://plus.unsplash.com/premium_photo-1680859126205-1c593bb4f9e8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "599",
  },
  {
    id: 135,
    name: "Sunshine Knit Beanie",
    description: "Soft knitted beanie offering warmth with a vibrant touch.",
    image:
      "https://plus.unsplash.com/premium_photo-1695603437311-fec2f916a0f5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "999",
  },
  {
    id: 136,
    name: "Lavender Cozy Beanie",
    description: "Comfortable knit beanie designed for cold-weather styling.",
    image:
      "https://images.unsplash.com/photo-1607265705067-ab09cf1f18d0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "999",
  },
  {
    id: 137,
    name: "Luxe Link Bracelet",
    description: "Premium chain bracelet with a refined and modern finish.",
    image:
      "https://images.unsplash.com/photo-1633810543462-77c4a3b13f07?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "299",
  },
  {
    id: 138,
    name: "Silver Bar Bracelet",
    description: "Minimal bracelet featuring a sleek geometric accent.",
    image:
      "https://images.unsplash.com/photo-1633810546077-7934c6a6a8ad?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "499",
  },
  {
    id: 139,
    name: "Heritage Chronograph Watch",
    description:
      "Sophisticated chronograph watch combining style and precision.",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "5999",
  },
  {
    id: 140,
    name: "SteelCraft Watch",
    description: "Durable stainless-steel watch built for everyday elegance.",
    image:
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "7999",
  },
  {
    id: 141,
    name: "Classic Noir Watch",
    description:
      "Timeless black-dial watch with a clean and professional look.",
    image:
      "https://images.unsplash.com/photo-1669621952722-4eb9d749b403?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "7999",
  },
  {
    id: 142,
    name: "Fossil Elite Watch",
    description:
      "Premium watch offering a perfect balance of fashion and function.",
    image:
      "https://images.unsplash.com/photo-1711227266361-5962d59b0268?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "6999",
  },
  {
    id: 143,
    name: "Shadow Sport Watch",
    description: "Modern chronograph watch designed for an active lifestyle.",
    image:
      "https://images.unsplash.com/photo-1734796823549-a837538497ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "17999",
  },
  {
    id: 144,
    name: "Cloud Pack Backpack",
    description: "Lightweight backpack ideal for daily commutes and travel.",
    image:
      "https://plus.unsplash.com/premium_photo-1664110691115-790e20a41744?q=80&w=653&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1999",
  },
  {
    id: 145,
    name: "Urban Carry Backpack",
    description:
      "Spacious backpack with a sleek design for work and everyday use.",
    image:
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1999",
  },
];

export default accessoryData;
