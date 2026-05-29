import React, { useState } from "react";
import { Link } from "react-router-dom";

const CategoryNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-4 pt-6 relative">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center">
        <Link
          to="/clothing/men"
          className="mx-2 rounded hover:bg-black hover:text-white p-2 px-4 transition-all"
        >
          Men
        </Link>

        <Link
          to="/clothing/women"
          className="mx-2 rounded hover:bg-black hover:text-white p-2 px-4 transition-all"
        >
          Women
        </Link>

        <Link
          to="/clothing/boys"
          className="mx-2 rounded hover:bg-black hover:text-white p-2 px-4 transition-all"
        >
          Boys
        </Link>

        <Link
          to="/clothing/girls"
          className="mx-2 rounded hover:bg-black hover:text-white p-2 px-4 transition-all"
        >
          Girls
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden bg-black text-white px-4 py-2 rounded"
      >
        Menu
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute right-4 mt-2 bg-white shadow-lg rounded flex flex-col w-40 z-50">
          <Link
            to="/clothing/men"
            className="p-3 hover:bg-black hover:text-white transition-all"
            onClick={() => setIsOpen(false)}
          >
            Men
          </Link>

          <Link
            to="/clothing/women"
            className="p-3 hover:bg-black hover:text-white transition-all"
            onClick={() => setIsOpen(false)}
          >
            Women
          </Link>

          <Link
            to="/clothing/boys"
            className="p-3 hover:bg-black hover:text-white transition-all"
            onClick={() => setIsOpen(false)}
          >
            Boys
          </Link>

          <Link
            to="/clothing/girls"
            className="p-3 hover:bg-black hover:text-white transition-all"
            onClick={() => setIsOpen(false)}
          >
            Girls
          </Link>
        </div>
      )}
    </div>
  );
};

export default CategoryNav;
