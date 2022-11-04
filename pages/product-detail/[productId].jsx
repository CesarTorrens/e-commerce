import Link from "next/link";
import React, { useContext } from "react";
import Carrusel from "../../components/Carrusel";
import { CategoryButtons } from "../../components/CategoryButtons";
import { ArrowTitle } from "../../components/icons/ArrowTitle";
import MyContext from "../../context/MyContext";

export default function ProductDetail() {
  const {
    callCategories,
    callProduct,
    product,
    callCategoryInProduct,
    categoryProducts,
  } = useContext(MyContext);
  React.useEffect(() => {
    callProduct();
    callCategories();
    callCategoryInProduct();
  }, [callCategories, callProduct, callCategoryInProduct]);
  return (
    <>
      <CategoryButtons />
      <div className="flex items-center gap-1">
        <Link
          className="text-xl font-medium text-slate-200 hover:opacity-25 transition duration-300"
          href={`/categories/${product?.category?.id}`}
        >
          {product?.category?.name}
        </Link>
        <ArrowTitle />
        <span className="text-xl font-medium text-slate-200">
          {" "}
          {product?.title}{" "}
        </span>
      </div>
      <div>
        <Carrusel />
      </div>
    </>
  );
}
