import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import { IconInfo } from "./icons/IconInfo";

export function Alert() {
  const { dataAlert } = useContext(MyContext);
  return (
    <>
      {dataAlert.type === "success" && (
        <div className="bg-green-300 rounded-xl fixed bottom-7 right-10 flex gap-1 items-center py-2 px-3 min-w-fit w-96">
          <IconInfo />
          <p className="truncate text-green-700 font-semibold text-xl">
            Item <b>{dataAlert.productName}</b> added to cart.
          </p>
        </div>
      )}
      {dataAlert.type === "error" && (
        <div className="bg-red-300 rounded-xl fixed bottom-7 right-10 flex gap-1 items-center py-2 px-3 min-w-fit w-96">
          <IconInfo />
          <p className="truncate  text-red-700 font-semibold text-xl">
            Espera. Hubo un error. Intentelo nuevamente.
          </p>
        </div>
      )}
    </>
  );
}
