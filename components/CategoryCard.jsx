import Link from "next/link";
import React, { useContext } from "react";
import MyContext from "../context/MyContext";

export function CategoryCard({ title, img, id }) {
  console.log(title);
  return (
    <>
      <Link href={`/categories/${id}`}>
        <div className="relative rounded-md w-52 md:w-full h-auto shadow-xl lg:hover:scale-105 transition duration-300">
          <span className="absolute bottom-6 z-20 w-full text-center text-white font-bold text-3xl">
            {title}
          </span>
          <div className="w-full h-full absolute bg-gradient-to-t from-gray-800 top-0 z-10 opacity-75 rounded-md"></div>
          <div className="w-full h-full bg-white relative rounded-lg">
            <img
              className="w-full object-cover h-full  rounded-md"
              src={img}
              alt={title}
            />
          </div>
        </div>
      </Link>
    </>
  );
}
