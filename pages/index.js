import React, { useContext } from "react";
import { CategoryButtons } from "../components/CategoryButtons";
import { CategoryCard } from "../components/CategoryCard";
import { ProductCard } from "../components/ProductCard";
import MyContext from "../context/MyContext";

export default function Home() {
  const {
    category,
    setPagination,
    pagination,
    products,
    loading,
    callProducts,
    callCategories,
  } = useContext(MyContext);

  const seeMore = React.useCallback(
    () => setPagination(pagination + 20),
    [pagination, setPagination]
  );

  React.useEffect(() => {
    callProducts();
    callCategories();
  }, [callProducts, callCategories]);

  return (
    <>
      <CategoryButtons />
      <h2 className="text-slate-200 text-4xl font-bold mb-5">Our Products</h2>
      <section className="grid grid-cols-gridCard gap-6">
        {products?.map((product, index) => (
          <ProductCard
            key={`${index}-${product.id}`}
            id={product.id}
            img={product.images[0]}
            price={product.price}
            title={product.title}
            cant={product.cant}
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
          onClick={seeMore}
        >
          {loading ? "Cargando..." : "Ver más"}
        </button>
      </div>
    </>
  );
}
