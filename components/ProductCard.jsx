import React, { useContext } from "react";
import Link from "next/link";
import { ButtonAddCart } from "./ButtonAddCart";
import { Counter } from "./Counter";
import MyContext from "../context/MyContext";

export function ProductCard(props) {
  const { img, price, title, category, id, categoryId, categoryImg, cant } =
    props;
  const [quantity, setQuantity] = React.useState(1);

  return (
    <div className="bg-white rounded-lg relative shadow-2xl shadow-slate-800 hover:scale-105 transition duration-300">
      <span className="absolute bg-slate-600 py-1 px-2 rounded-xl right-2 top-2 text-white font-semibold">
        {category}
      </span>
      <Link href={`/product-detail/${id}`} name="group">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          {img && (
            <img
              src={img}
              alt={title}
              className="h-full w-full object-cover object-center"
            />
          )}
        </div>
        {!img && (
          <div className="h-60 flex items-center justify-center bg-slate-800 rounded-b-xl">
            <span className="text-3xl text-white font-bold">Image Empty</span>
          </div>
        )}
        <div className="pt-4 px-2">
          <h3 className="text-sm text-gray-700">{title}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$ {price}</p>
        </div>
      </Link>
      <div className="px-2 pt-1">
        <div className="w-full flex items-center justify-between h-6">
          <span className="text-xs italic text-slate-800">
            {" "}
            Quedan <b>{cant}</b> productos disponibles
          </span>
          <span
            className={
              quantity === 1 ? "hidden" : "font-semibold text-slate-800"
            }
          >
            ${quantity * price}
          </span>
        </div>

        <Counter setQuantity={setQuantity} cant={cant} />
      </div>
      <div className="px-2 py-4">
        <ButtonAddCart
          product={{
            img,
            price,
            title,
            category,
            id,
            categoryId,
            categoryImg,
            cant,
            quantity,
          }}
        />
      </div>
    </div>
  );
}
