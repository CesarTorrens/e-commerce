import React, { Children, useContext } from "react";
import MyContext from "../context/MyContext";
import CloseIcon from "./icons/CloseIcon";

export function Slide({ title, children }) {
  const { openCart, showCart, totalPayment, cart } = useContext(MyContext);
  return (
    <div
      className={
        !openCart
          ? "fixed top-28 right-0 translate-x-full transition duration-300 max-h-shoppingCart overflow-auto  border border-slate-800"
          : "fixed top-28 right-0 translate-x-0 transition duration-300 max-h-shoppingCart overflow-auto border border-slate-800"
      }
    >
      <section className="bg-slate-600  border-solid w-full sm:w-96 p-2">
        <div className="flex justify-between items-center">
          <p className="text-white font-semibold">{title}</p>
          <button
            onClick={showCart}
            className="p-1 hover:bg-slate-800 rounded-full transition duration-300"
          >
            <CloseIcon color="white" />
          </button>
        </div>
      </section>
      <div className="bg-white p-2 divide-y divide-slate-600/25">
        {cart.length === 0 && (
          <p className="text-center font-bold text-2xl">Cart Empty</p>
        )}
        {children}
      </div>
      <div className="bg-white p-2 border border-t border-slate-600/25">
        <div className="w-full flex justify-between pb-2">
          <p className="font-semibold text-lg font">Total</p>
          <p className="text-lg font-bold text-green-600">${totalPayment}</p>
        </div>
        <button className="bg-blue-600 w-full  rounded-md shadow-lg py-2 px-1 hover:opacity-75 transition duration-300 text-white font-semibold">
          Payment
        </button>
      </div>
    </div>
  );
}
