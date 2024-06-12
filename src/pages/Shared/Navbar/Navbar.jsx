import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <header className="md:flex w-full items-center justify-between px-0 md:px-20 lg:px-64 fixed md:absolute z-[100] bg-black md:bg-transparent text-white border-b border-stone-500 border-opacity-60">
        <div className="flex items-center justify-between py-4 px-4 lg:px-0 border-b border-stone-500 border-opacity-60 md:border-none">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-lg font-bold">Barber</span>
          </Link>
          <label className="burger md:hidden block" htmlFor="burger">
            <input
              type="checkbox"
              id="burger"
              onClick={() => setVisible(!visible)}
            />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <nav
          className={`${
            visible
              ? "flex flex-col bg-black py-6 max-h-96 text-white pl-4 md:pl-0 absolute -z-10 w-full"
              : "hidden"
          } md:items-center gap-6 text-sm font-medium md:flex`}
        >
          <Link
            to="/"
            className=" hover:text-[#91765a] transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/"
            className="hover:text-[#91765a] transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/"
            className="hover:text-[#91765a] transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            to="/"
            className="hover:text-[#91765a] transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>
      </header>
    </>
  );
}
