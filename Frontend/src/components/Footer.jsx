import React from "react";

const Footer = () => {
  return (
    <div className="bg-black w-full h-72">
      <footer className="bg-black text-white px-6 md:px-16 py-14 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-800 pb-10">
          <div>
            <h1 className="text-2xl font-semibold tracking-widest mb-4">
              VELORA
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              Elevating everyday fashion with minimal, timeless design.
            </p>
          </div>

          <div>
            <h2 className="text-sm uppercase tracking-widest mb-4 text-gray-300">
              Categories
            </h2>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Men</li>
              <li className="hover:text-white cursor-pointer">Women</li>
              <li className="hover:text-white cursor-pointer">Kids Wear</li>
              <li className="hover:text-white cursor-pointer">Sneakers</li>
              <li className="hover:text-white cursor-pointer">Accessories</li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm uppercase tracking-widest mb-4 text-gray-300">
              Essentials
            </h2>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">New Arrivals</li>
              <li className="hover:text-white cursor-pointer">Best Sellers</li>
              <li className="hover:text-white cursor-pointer">Trending</li>
              <li className="hover:text-white cursor-pointer">Offers</li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm uppercase tracking-widest mb-4 text-gray-300">
              Contact
            </h2>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: support@velora.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>
                Address: 123 Fashion Street, <br />
                New Delhi, India
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-lg text-gray-500">
          <p>© {new Date().getFullYear()} Velora. All rights reserved.</p>

          <div className="flex space-x-6 text-xl mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">Terms</span>
            <span className="hover:text-white cursor-pointer">Sitemap</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
