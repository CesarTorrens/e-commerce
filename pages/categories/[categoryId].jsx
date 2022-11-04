import React from "react";
import { useContext } from "react";
import { CategoryButtons } from "../../components/CategoryButtons";

import { ProductCard } from "../../components/ProductCard";
import MyContext from "../../context/MyContext";

export default function CategoryId() {
  const {
    loading,
    callCategoryProducts,
    categoryProducts,
    callCategories,
    setPagination,
    pagination,
  } = useContext(MyContext);

  React.useEffect(() => {
    callCategories();
    callCategoryProducts();
  }, [callCategoryProducts, callCategories]);
  return (
    <>
      <CategoryButtons />
      <h2 className="text-slate-200 text-4xl font-bold mb-5">
        {categoryProducts[0]?.category.name}
      </h2>
      <section className="grid grid-cols-gridCard gap-4">
        {categoryProducts?.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            img={product.images[0]}
            price={product.price}
            title={product.title}
            category={product.category.name}
          />
        ))}
      </section>
      <div className="w-full flex justify-center py-10">
        <button
          disabled={loading}
          className={
            !loading
              ? "py-2 px-5 bg-slate-800 rounded-md text-white hover:opacity-75 transition duration-300"
              : "bg-slate-600"
          }
          onClick={() => setPagination(pagination + 20)}
        >
          {loading ? "Cargando..." : "Ver más"}
        </button>
      </div>
    </>
  );
}
