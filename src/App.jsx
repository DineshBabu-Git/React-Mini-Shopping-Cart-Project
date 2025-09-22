import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import CartModal from "./CartModal";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  const handleAddToCart = (product) => {
    const alreadyInCart = cart.find((item) => item.id === product.id);
    if (alreadyInCart) {
      alert("Item already added to the cart");
      return;
    }
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar cartCount={cart.length} onCartClick={() => setIsCartOpen(true)} />

      <div className="p-6">
        <ProductList products={products} onAddToCart={handleAddToCart} />
      </div>

      {isCartOpen && (
        <CartModal cartItems={cart} onClose={() => setIsCartOpen(false)} onRemove={handleRemoveFromCart} />
      )}
    </div>
  );
};

export default App;
