import React, { useContext } from "react";
import Link from "next/link";
import MyContext from "../context/MyContext";

export default function CartItem({
  title,
  id,
  img,
  price,
  category,
  categoryId,
  quantity,
}) {
  const { removeProduct } = useContext(MyContext);
  const remove = () => removeProduct(id);
  return (
    <div className="flex py-3">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{title}</h3>
            <p className="ml-4">${price * quantity}</p>
          </div>
          <Link
            href={`/categories/${categoryId}`}
            className="mt-1 text-sm text-gray-500"
          >
            {category}
          </Link>

          <p className="text-xs text-slate-800 flex items-center gap-2">
            {" "}
            Items:{" "}
            <span className="text-green-600 font-semibold text-base">
              {quantity}
            </span>
          </p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <Link
            href="/"
            className="text-blue-500 hover:underline transition duration-300"
          >
            See details
          </Link>

          <div className="flex">
            <button
              onClick={remove}
              type="button"
              className="font-medium text-red-600 hover:opacity-75 transition duration-300"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
