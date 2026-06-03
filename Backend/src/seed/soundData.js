const soundData = [
  {
    id: 106,
    name: "Shadow Bass Headphones",
    description:
      "Premium over-ear headphones with deep bass and immersive sound quality.",
    image:
      "https://images.unsplash.com/photo-1637780852590-8ab27248ec41?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1599",
  },
  {
    id: 107,
    name: "Timber Tune Wireless",
    description:
      "Lightweight wireless headphones designed for comfortable everyday listening.",
    image:
      "https://images.unsplash.com/photo-1715645970186-7a9d6d816b49?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1299",
  },
  {
    id: 108,
    name: "Pulse Beat Headphones",
    description:
      "Stylish on-ear headphones delivering clear audio and punchy performance.",
    image:
      "https://images.unsplash.com/photo-1627926357525-aff29272a5ee?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1399",
  },
  {
    id: 109,
    name: "JBL Pocket Boom",
    description:
      "Compact portable speaker with powerful sound in a travel-friendly design.",
    image:
      "https://images.unsplash.com/photo-1635087338559-96dbfc824cee?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1999",
  },
  {
    id: 110,
    name: "NoiseCancel Pro X",
    description:
      "Wireless noise-cancelling headphones built for distraction-free listening.",
    image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1299",
  },
  {
    id: 111,
    name: "Sony DeepSound 700",
    description:
      "Comfortable over-ear headphones offering rich sound and extended battery life.",
    image:
      "https://images.unsplash.com/photo-1641048930621-ab5d225ae5b0?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "2599",
  },
  {
    id: 112,
    name: "Sony Studio Wireless",
    description:
      "Sleek wireless headphones crafted for balanced and detailed audio.",
    image:
      "https://images.unsplash.com/photo-1598200085759-6eebadf8a499?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1249",
  },
  {
    id: 113,
    name: "BlueWave Headphones",
    description:
      "Lightweight wired headphones with vibrant style and everyday comfort.",
    image:
      "https://images.unsplash.com/photo-1741958378365-4955a407b60c?q=80&w=734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "2999",
  },
  {
    id: 114,
    name: "UrbanSound Headset",
    description:
      "Durable over-ear headphones made for music, work, and travel.",
    image:
      "https://images.unsplash.com/photo-1693841115069-049662159bff?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1999",
  },
  {
    id: 115,
    name: "GamerGlow Headset",
    description:
      "Gaming headset engineered for immersive audio and long play sessions.",
    image:
      "https://images.unsplash.com/photo-1628501899963-43bb8e2423e1?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1499",
  },
  {
    id: 116,
    name: "Titan Gaming Headset",
    description:
      "Performance-focused gaming headset with crystal-clear sound and comfort.",
    image:
      "https://images.unsplash.com/photo-1677086813101-496781a0f327?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1099",
  },
  {
    id: 117,
    name: "Sony Aqua Speaker",
    description:
      "Water-resistant portable speaker perfect for outdoor adventures.",
    image:
      "https://images.unsplash.com/photo-1618532498309-08ba18e6da89?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1599",
  },
  {
    id: 118,
    name: "Sony AirBuds Lite",
    description:
      "Compact true wireless earbuds delivering freedom and convenience.",
    image:
      "https://images.unsplash.com/photo-1609255386725-b9b6a8ad829c?q=80&w=702&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1499",
  },
  {
    id: 119,
    name: "Sony Travel Speaker",
    description:
      "Portable Bluetooth speaker with room-filling sound and modern design.",
    image:
      "https://images.unsplash.com/photo-1748189662619-221f11937341?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1099",
  },
  {
    id: 120,
    name: "JBL Clip Mini",
    description:
      "Ultra-portable speaker featuring a built-in clip for easy carrying.",
    image:
      "https://images.unsplash.com/photo-1588131153911-a4ea5189fe19?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1399",
  },
  {
    id: 121,
    name: "JBL Charge Tube",
    description:
      "Powerful cylindrical speaker designed for rich audio on the go.",
    image:
      "https://images.unsplash.com/photo-1561930661-20c9650e3e25?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1599",
  },
  {
    id: 122,
    name: "JBL Adventure Clip",
    description:
      "Rugged clip-on speaker built for travel, hikes, and outdoor fun.",
    image:
      "https://images.unsplash.com/photo-1656730792555-80ef0228417f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1099",
  },
  {
    id: 123,
    name: "JBL Pocket Square",
    description:
      "Compact square speaker offering surprisingly big sound in a small package.",
    image:
      "https://images.unsplash.com/photo-1606999807171-ea138db6dcd1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1999",
  },
  {
    id: 124,
    name: "boAt Airdopes Blue",
    description:
      "Stylish wireless earbuds with seamless connectivity and crisp sound.",
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_91.jpg?v=1706776330",
    price: "1199",
  },
  {
    id: 125,
    name: "JBL Studio Buds",
    description: "Lightweight earbuds designed for everyday music and calls.",
    image:
      "https://images.unsplash.com/photo-1596628319258-c6f3f387a1ed?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1999",
  },
];

export default soundData;
