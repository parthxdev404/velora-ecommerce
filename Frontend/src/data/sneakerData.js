const sneakerData = [
  {
    id: 11,
    name: "Nike Air Force 1 White",
    description:
      "Classic all-white leather sneaker with a chunky sole, clean streetwear look, everyday casual wear.",
    image:
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "7000",
  },
  {
    id: 82,
    name: "Nike Air Force 1 White",
    description:
      "Minimal white leather sneaker with Nike swoosh, premium casual styling.",
    image:
      "https://images.unsplash.com/photo-1592516169664-24ce0acc1257?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "8599",
  },
  {
    id: 83,
    name: "Nike Free Neon Green",
    description:
      "Lightweight performance sneaker with breathable mesh and sporty design for training/running.",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "9599",
  },
  {
    id: 84,
    name: "Nike Training Sneaker",
    description:
      "Athletic shoe with durable grip and support, made for gym or workouts.",
    image:
      "https://images.unsplash.com/photo-1605408499391-6368c628ef42?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "5999",
  },
  {
    id: 85,
    name: "Nike Running Shoe",
    description:
      "Cushioned running sneaker with mesh upper and sporty silhouette.",
    image:
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "9999",
  },
  {
    id: 86,
    name: "Air Jordan 4 Black & Red",
    description:
      "Cushioned running sneaker with mesh upper and sporty silhouette.",
    image:
      "https://images.unsplash.com/photo-1602596532816-a5a81fd92c84?q=80&w=737&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "12999",
  },
  {
    id: 87,
    name: "Adidas Counter Sneaker ",
    description:
      "Retro tennis-style sneaker with clean leather finish and blue stripes.",
    image:
      "https://images.unsplash.com/photo-1706550633313-f3b773139349?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "10999",
  },
  {
    id: 88,
    name: "Adidas Performance Sneaker",
    description: "Sporty casual sneaker focused on comfort and movement.",
    image:
      "https://plus.unsplash.com/premium_photo-1779231387647-8e693a53ec18?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "8999",
  },
  {
    id: 89,
    name: "Adidas Campus Gazelle Style",
    description:
      "Suede low-top sneaker with iconic three stripes, vintage aesthetic.",
    image:
      "https://images.unsplash.com/photo-1621665422246-fde75fb7e7f5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "",
  },
  {
    id: 90,
    name: "Puma Suede",
    description:
      "Classic suede sneaker with low profile and timeless casual styling.",
    image:
      "https://images.unsplash.com/photo-1626298038175-e9f383124e1f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "10999",
  },
  {
    id: 91,
    name: "Vans Old Skool Maroon",
    description:
      "Skate-inspired sneaker with durable canvas upper and iconic low-top design.",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=698&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "6499",
  },
  {
    id: 92,
    name: "Vans Old Skool Black",
    description:
      "Classic black skate sneaker with signature side stripe and comfortable sole.",
    image:
      "https://images.unsplash.com/photo-1663179046056-538a182cfa8a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "6999",
  },
  {
    id: 93,
    name: "Flex Knit Sock Sneaker",
    description:
      "Lightweight sock-fit sneaker with breathable material for all-day comfort.",
    image:
      "https://plus.unsplash.com/premium_photo-1723708873555-34eae52c42e8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "5499",
  },
  {
    id: 94,
    name: "Puma White Leather Sneaker",
    description:
      "Minimal white leather sneaker with clean detailing and premium finish.",
    image:
      "https://images.unsplash.com/photo-1608379894453-c6b729b05596?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "7999",
  },
  {
    id: 95,
    name: "Reebok Classic Leather Beige",
    description:
      "Retro-inspired casual sneaker with soft neutral tones and everyday comfort.",
    image:
      "https://images.unsplash.com/photo-1614900152989-6f773ea2a99b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "7499",
  },
  {
    id: 96,
    name: "Puma RS Chunky Sneaker",
    description:
      "Bold chunky sneaker with sporty cushioning and modern streetwear appeal.",
    image:
      "https://images.unsplash.com/photo-1619253341026-74c609e6ce50?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "9499",
  },
  {
    id: 97,
    name: "Athletic Slip-On Runner",
    description:
      "Comfort-focused lightweight running sneaker with breathable material.",
    image:
      "https://images.unsplash.com/photo-1726133731501-b4ed4a6915eb?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "5899",
  },
  {
    id: 98,
    name: "Knit Performance Sneaker",
    description:
      "Breathable knit sneaker designed for flexibility, comfort, and active wear.",
    image:
      "https://images.unsplash.com/photo-1629201973727-8aabeed95aad?q=80&w=697&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "8299",
  },
  {
    id: 99,
    name: "Puma RS-X White Red",
    description:
      "Chunky retro-inspired sneaker with bold red accents and cushioned sole.",
    image:
      "https://images.unsplash.com/photo-1676379748664-86dc37244f6b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "9999",
  },
  {
    id: 100,
    name: "Puma Court Black",
    description:
      "Classic black low-top sneaker with smooth leather finish and casual style.",
    image:
      "https://images.unsplash.com/photo-1714396239552-09ec1c968241?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "8699",
  },
  {
    id: 101,
    name: "Adidas Gazelle Mint Pink",
    description:
      "Retro-inspired suede sneaker with gum sole and soft pastel colorway.",
    image:
      "https://images.unsplash.com/photo-1725900351486-f342d4743c1b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "8999",
  },
  {
    id: 102,
    name: "Adidas Retro Blue Orange",
    description:
      "Sporty retro sneaker with iconic three-stripe design and bold contrast colors.",
    image:
      "https://images.unsplash.com/photo-1600363167532-191aee8fc9af?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "7999",
  },
  {
    id: 103,
    name: "Adidas Performance Sneaker",
    description:
      "Sporty casual sneaker built for movement, comfort, and everyday wear.",
    image:
      "https://plus.unsplash.com/premium_photo-1779231387647-8e693a53ec18?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "8799",
  },
  {
    id: 104,
    name: "Adidas Gazelle White Pink",
    description:
      "Minimal low-top sneaker with soft pink accents and timeless casual appeal.",
    image:
      "https://images.unsplash.com/photo-1710504989595-604f59d1b140?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "8499",
  },
  {
    id: 105,
    name: "Adidas Superstar Red",
    description:
      "Bold suede sneaker with signature three stripes and premium streetwear vibe.",
    image:
      "https://images.unsplash.com/photo-1654027182774-a7db2a41a34c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "9299",
  },
];

export default sneakerData;
