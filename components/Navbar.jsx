import React, { useContext } from "react";
import Link from "next/link";
import { Avatar } from "./Avatar";
import MyContext from "../context/MyContext";
import ShoppingCart from "./icons/ShoppingCart";
import { Slide } from "./Slide";
import CartItem from "./CartItem";
import Dropdown from "./Dropdown";

export function Navbar() {
  const { user, category, callUser, showCart, cart } = useContext(MyContext);
  const [isMobile, setIsMobile] = React.useState(false);
  const [scrollCheck, setScrollCheck] = React.useState(false);

  React.useEffect(() => {
    callUser();
  }, [callUser]);

  React.useEffect(() => {
    const calculateWindowSize = () => {
      if (window.innerWidth > 768) {
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
  React.useEffect(() => {
    const calculateScrollTop = () => {
      if (window.scrollY > 166) {
        setScrollCheck(false);
      } else {
        setScrollCheck(true);
      }
    };
    calculateScrollTop();
    window.addEventListener("scroll", () => {
      calculateScrollTop();
    });
  }, [scrollCheck]);
  console.log(isMobile);
  return (
    <div className="w-full bg-slate-800 fixed z-40">
      <header className="py-5 px-3 sm:px-10 max-w-screen-2xl m-auto flex flex-col justify-between">
        <div className="w-full flex flex-col justify-between gap-2">
          <div className="flex w-full gap-3 justify-between">
            <Link href="/" className="text-white font-bold text-3xl">
              e-commerce
            </Link>
            <div className="flex items-center gap-4">
              {!isMobile && (
                <p className="text-white text-lg font-bold">
                  Hello! {user[0]?.name}{" "}
                </p>
              )}
              <Avatar img={user[0]?.avatar} name={user[0]?.name} />
              <button
                onClick={showCart}
                className="bg-white rounded-full p-1 hover:bg-slate-400 transition duration-300 relative"
              >
                {cart.length > 0 && (
                  <div className="bg-red-600 p-1 rounded-full w-0 absolute right-2 top-1"></div>
                )}
                <ShoppingCart />
              </button>
            </div>
          </div>
          {!scrollCheck && !isMobile && (
            <div className="flex gap-3">
              {category?.map((category) => (
                <Link
                  className="text-white hover:opacity-75 transition duration-300"
                  href={`/categories/${category.id}`}
                  key={category.id}
                >
                  {" "}
                  {category.name}{" "}
                </Link>
              ))}
            </div>
          )}
          {!scrollCheck && isMobile && (
            <div className="flex gap-3">
              <Dropdown options={category} />
            </div>
          )}
        </div>
        <Slide title="Shopping Cart" className="">
          {cart?.map((product) => (
            <CartItem
              key={product.id}
              id={product.id}
              category={product.category}
              img={product.img}
              price={product.price}
              title={product.title}
              quantity={product.quantity}
              categoryId={product.categoryId}
            />
          ))}
        </Slide>
      </header>
    </div>
  );
}
