import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import { Alert } from "./Alert";
import { MailIcon } from "./icons/MailIcon";
import { PhoneIcon } from "./icons/PhoneIcon";

export function Footer() {
  const { alert } = useContext(MyContext);
  return (
    <div className="w-full bg-slate-800 ">
      {alert && <Alert />}
      <footer className="py-7 px-3 sm:px-10 max-w-screen-2xl m-auto flex flex-col items-center gap-2 md:gap-0 md:flex-row md:justify-between">
        <p className="text-white font-semibold">Created by Cesar Torrens</p>

        <a
          className="text-white hover:underline transition duration-300"
          href="https://www.linkedin.com/in/cesar-torrens/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          LinkedIn{" "}
        </a>
        <div className="flex items-center gap-1">
          <MailIcon />
          <p className="text-white">cesar.a.torrens@gmail.com</p>
        </div>
        <div className="flex items-center gap-1">
          <PhoneIcon />
          <p className="text-white">+57 302 862 68 34</p>
        </div>
      </footer>
    </div>
  );
}
