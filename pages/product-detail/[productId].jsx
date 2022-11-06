import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { ButtonAddCart } from "../../components/ButtonAddCart";
import Carrusel from "../../components/Carrusel";
import { CategoryButtons } from "../../components/CategoryButtons";
import { ArrowTitle } from "../../components/icons/ArrowTitle";
import { ProductCard } from "../../components/ProductCard";
import MyContext from "../../context/MyContext";
import { Counter } from "../../components/Counter";

export default function ProductDetail() {
  const [isMobile, setIsMobile] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);

  const router = useRouter();
  const id = router.query.productId;

  const {
    img,
    changeImg,
    callCategories,
    callProduct,
    product,
    callCategoryInProduct,
    categoryProducts,
    products,
  } = useContext(MyContext);
  React.useEffect(() => {
    callCategories();
    callProduct();
    callCategoryInProduct(id);
  }, [callCategories, callProduct, callCategoryInProduct, id]);

  React.useEffect(() => {
    const calculateWindowSize = () => {
      if (window.innerWidth > 650) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };
    calculateWindowSize();
    window.addEventListener("resize", () => {
      calculateWindowSize();
    });
  }, [isMobile]);

  return (
    <>
      <CategoryButtons />
      <div className="flex items-center gap-1 pb-5">
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
      <section
        className={
          !isMobile
            ? "flex gap-10 bg-slate-800 p-5 mb-5 rounded-xl "
            : "flex flex-col gap-10 bg-slate-800 p-5 mb-5 rounded-xl "
        }
      >
        <div className="flex flex-col gap-4 w-full">
          <img className="w-full h-full rounded-xl object-cover" src={img} />
        </div>
        <div className="w-full flex flex-col gap-10">
          {isMobile && (
            <div className="flex gap-4">
              {product?.images?.map((image, index) => (
                <button
                  className="border border-white"
                  onClick={() => changeImg(image)}
                  key={index}
                >
                  <img className="w-full object-cover rounded-xl" src={image} />
                </button>
              ))}
            </div>
          )}
          <p className="text-3xl text-white font-semibold">{product?.title}</p>
          <p className="text-white opacity-50">{product?.description}</p>
          <p className="text-white font-semibold text-lg">$ {product.price}</p>
          <div>
            <div className="w-full flex items-center justify-between h-6 pb-5">
              <span className="text-xs italic text-white">
                {" "}
                Quedan <b>{product.cant}</b> productos disponibles
              </span>
              <span
                className={
                  quantity === 1 ? "hidden" : "font-semibold text-white"
                }
              >
                ${quantity * product.price}
              </span>
            </div>
            <div className="flex flex-col lg:flex-row gap-5">
              <Counter cant={product.cant} setQuantity={setQuantity} />
              <ButtonAddCart
                product={{
                  img: img,
                  price: product?.price,
                  title: product?.title,
                  category: product?.category?.name,
                  id: product?.id,
                  cant: product?.cant,
                  quantity,
                }}
                type="success"
                text="Item added to cart."
              />
            </div>
          </div>
          {!isMobile && (
            <div className="flex gap-4">
              {product?.images?.map((image, index) => (
                <button
                  className=""
                  onClick={() => changeImg(image)}
                  key={index}
                >
                  <img className="w-full object-cover rounded-xl" src={image} />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
      <p className="text-xl text-white font-semibold">
        {categoryProducts.length > 0
          ? `Other products in this category`
          : "More Products"}
      </p>
      {!isMobile && categoryProducts.length > 0 && (
        <div>
          <Carrusel products={categoryProducts} />
        </div>
      )}
      {!isMobile && !categoryProducts.length > 0 && (
        <div>
          <Carrusel products={products} />
        </div>
      )}
      {isMobile && categoryProducts.length > 0 && (
        <>
          <div className="flex overflow-auto pb-5">
            {categoryProducts.map((product) => (
              <div className="pr-2" key={product.id}>
                <ProductCard
                  id={product.id}
                  img={product.images[0]}
                  price={product.price}
                  title={product.title}
                  cant={product.cant}
                  category={product.category.name}
                />
              </div>
            ))}
          </div>
        </>
      )}
      {!categoryProducts.length > 0 && isMobile && (
        <>
          <div className="flex overflow-auto pb-5">
            {products.map((product) => (
              <div className="pr-2" key={product.id}>
                <ProductCard
                  id={product.id}
                  img={product.images[0]}
                  price={product.price}
                  title={product.title}
                  cant={product.cant}
                  category={product.category.name}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
