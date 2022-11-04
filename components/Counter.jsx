import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import AddIcon from "./icons/AddIcon";
import SubstractIcon from "./icons/SubstractIcon";

export function Counter({ cant, setQuantity }) {
  const [count, setCount] = React.useState(1);

  const max = cant;
  const min = 1;

  const maxCount = () => {
    setQuantity(max);
    setCount(max);
  };
  const add = () => {
    if (count === max) return;
    setQuantity(count + 1);
    setCount(count + 1);
  };
  const subtract = () => {
    if (count < 2) return;
    setQuantity(count - 1);
    setCount(count - 1);
  };
  const minCount = () => {
    setQuantity(1);
    setCount(1);
  };
  return (
    <div className="flex w-full border border-slate-600/25 rounded-md justify-between items-center px-8 py-1">
      <button
        onClick={minCount}
        className="text-red-600 font-medium rounded-full hover:bg-slate-100 transition duration-300 p-1"
      >
        Min
      </button>
      <button
        disabled={count < 2}
        onClick={subtract}
        className="rounded-full hover:bg-slate-100 transition duration-300 p-1"
      >
        <SubstractIcon color={count < 2 ? "gray" : "red"} />
      </button>
      <span className="text-xl font-semibold text-slate-600">{count}</span>
      <button
        disabled={count === max}
        onClick={add}
        className="rounded-full hover:bg-slate-100 transition duration-300 p-1"
      >
        <AddIcon color={count === max ? "gray" : "green"} />
      </button>
      <button
        onClick={maxCount}
        className="text-green-600 font-medium rounded-full hover:bg-slate-100 transition duration-300 p-1"
      >
        Max
      </button>
    </div>
  );
}
