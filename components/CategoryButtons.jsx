import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import { CategoryCard } from "./CategoryCard";

export function CategoryButtons() {
  const { category } = useContext(MyContext);
  console.log(category);
  return (
    <>
      <h2 className="text-slate-200 text-4xl font-bold mb-5">Categories</h2>
      <section className="flex overflow-auto pb-5 md:pt-5 md:pb-9 md:grid md:grid-cols-gridCardCategory gap-4 mb-5 md:mb-0 h-auto">
        {category.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            title={category.name}
            img={category.image}
          />
        ))}
      </section>
    </>
  );
}
