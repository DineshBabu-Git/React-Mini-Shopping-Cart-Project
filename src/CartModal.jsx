import React from "react";

const CartModal = ({ cartItems, onClose, onRemove }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">

      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 relative max-h-[100%] overflow-auto">

        <h2 className="text-xl font-bold pb-6 border-b-3">🛒 Your Cart</h2>

        <button className="absolute top-7 right-5 text-gray-600 cursor-pointer hover:text-black" onClick={onClose}> ✖ </button>

        {cartItems.length === 0 ? (
          <p className="text-gray-600 text-center">Your Cart is Empty...</p>
        ) : (
          <ul className="space-y-4 mt-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b pb-2">
                <div className="flex items-center space-x-3">
                  <img src={item.image} alt={item.title} className="h-12 w-12 object-contain" />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-md text-black">${item.price}</p>
                  </div>
                </div>
                <button onClick={() => onRemove(item.id)} className="bg-red-500 text-white px-3 py-1 rounded-lg cursor-pointer hover:bg-red-600">Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CartModal;
