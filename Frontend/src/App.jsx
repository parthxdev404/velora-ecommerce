import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Essentials from "./pages/Essentials";
import Collection from "./pages/Collection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Home />
      <About />
      <Essentials />
      <Collection />
      <Footer />
    </>
  );
};

export default App;
