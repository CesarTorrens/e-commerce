import React, { useContext } from "react";
import MyContext from "../context/MyContext";

export function ButtonAddCart({ product, text, type }) {
  const { addToCart, showAlert } = useContext(MyContext);
  const onClick = () => {
    addToCart(product);
    showAlert(type, text, product.title);
  };
  return (
    <button
      onClick={onClick}
      className="w-full bg-green-500 shadow-lg hover:opacity-75 transition duration-300 rounded-md text-white py-2 px-1"
    >
      Add to cart
    </button>
  );
}
