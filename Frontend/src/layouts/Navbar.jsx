import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Shop",
      path: "/shop",
    },
    {
      name: "Cart",
      path: "/cart",
    },
  ];

  return (
    <>
      <div>
        <nav>
          {navLinks.map((link) => (
            <Link to={link.path} key={link}>
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
