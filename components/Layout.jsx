import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Footer } from "./Footer";

export function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="w-full bg-slate-600 min-h-mainCalc">
        <main className="max-w-screen-2xl m-auto px-3 sm:px-10 pt-28 pb-10">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
