import React, { useState, useEffect } from "react";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import { useDispatch } from "react-redux";
import { setOpenCart } from "../app/CartSlice";

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const dispatch = useDispatch();
  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };
  const onNavScroll = () => {
    if (window.scrollY > 30) setNavState(true);
    else setNavState(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);
  return (
    <>
      <header
        className={
          !navState
            ? "absolute top-7 left-0 right-0 opacity-100 z-50"
            : "fixed top-0 left-0 right-0 opacity-100 z-[200] h-[9vh] flex items-center justify-center blur-effect-theme"
        }
      >
        <nav className="flex justify-between nike-container items-center">
          <div className="flex items-center">
            <img
              src={logo}
              alt="img/logo"
              className={`w-16 h-auto ${navState && "filter brightness-0"}`}
            />
          </div>
          <ul className="flex items-center justify-center gap-2">
            <li className={`grid items-center `}>
              <MagnifyingGlassIcon
                className={`icon-style ${
                  navState && "text-slate-900 trasition-all duration-300"
                }`}
              />
            </li>
            <li className="grid items-center">
              <HeartIcon
                className={`icon-style ${
                  navState && "text-slate-900 trasition-all duration-300"
                }`}
              />
            </li>
            <li className="grid items-center">
              <button
                onClick={onCartToggle}
                className="relative border-none outline-none active:scale-110 transition-all duration-300"
              >
                <ShoppingBagIcon
                  className={`icon-style ${
                    navState && "text-slate-900 trasition-all duration-300"
                  }`}
                />
                <div className="absolute top-4 right-0 bg-red-500 text-white text-slate-900 shadow shadow-slate-100 w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer  hover:scale-110 trasition-all duration-300">
                  0
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
