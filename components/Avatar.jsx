import React, { useContext } from "react";
import MyContext from "../context/MyContext";

export function Avatar({ img, name }) {
  const { user } = useContext(MyContext);
  return (
    <button>
      <img
        className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
        src={img}
        alt={name}
      />
    </button>
  );
}
