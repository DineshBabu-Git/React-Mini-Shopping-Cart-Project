import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white shadow-md border border-gray-300 rounded-lg p-4 flex flex-col justify-between">

      <img src={product.image} alt={product.title} className="h-40 w-auto mx-auto object-contain" />

      <h2 className="mt-4 font-semibold text-gray-600 text-lg text-center line-clamp-2">
        {product.title}</h2>

      <p className="text-lg font-bold mt-2 text-center">${product.price}</p>

      <button onClick={() => onAddToCart(product)} className="mt-4 bg-gray-600 text-white rounded-lg px-3 py-2 cursor-pointer hover:bg-gray-900 transition">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
