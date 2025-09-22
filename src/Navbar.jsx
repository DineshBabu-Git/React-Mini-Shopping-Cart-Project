import React from "react";

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="w-full bg-gray-600 text-white px-6 py-10 flex justify-between items-center fixed">

      <h1 className="text-3xl font-bold">🛒 FakeCart</h1>

      <button onClick={onCartClick} className="bg-white text-black text-xl font-bold px-6 py-2 rounded-lg cursor-pointer hover:bg-gray-200 transition"> Cart ({cartCount}) </button>

    </nav>
  );
};

export default Navbar;
