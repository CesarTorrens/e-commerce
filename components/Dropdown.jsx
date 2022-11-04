import Link from "next/link";
import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import { ArrowDrop } from "./icons/ArrowDrop";

export default function Dropdown({ options }) {
  const [open, setOpen] = React.useState(false);
  const showMenu = () => setOpen(!open);
  return (
    <div className="relative inline-block text-left pt-1">
      <button
        onClick={showMenu}
        type="button"
        className="inline-flex w-full justify-center items-center rounded-md  bg-transparent  text-lg font-semibold text-white shadow-sm focus:outline-none"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        Categories
        <ArrowDrop open={open} />
      </button>

      {open && (
        <div
          className="absolute -right-11 z-10 mt-2 w-40 rounded-md bg-white shadow-2xl"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div className="py-1 flex flex-col" role="none">
            {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
            {options?.map((category) => (
              <Link
                classNameName="text-slate-800 hover:opacity-75 transition duration-300 w-full text-sm px-4 py-2 hover:bg-gray-100"
                href={`/categories/${category.id}`}
                key={category.id}
              >
                {" "}
                {category.name}{" "}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
