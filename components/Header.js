import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useClickOutside } from "../customHooks/useClickOutside";
import { useCart } from "react-use-cart";

const Header = () => {
  const router = useRouter();
  const { totalUniqueItems } = useCart();
  const data = [
    {
      h: "FAQ",
      url: "/faq",
    },
    {
      h: "Terms & Conditions",
      url: "/term-condition",
    },
  ];
  const [menu, setMenu] = useState(false);
  let domNode = useClickOutside(() => {
    setMenu(false);
  });
  return (
    <div className="z-50 relative">
      <div className="sticky top-0 z-40">
        <div className="">
          <div className="">
            <div className="bg-brand-100">
              <div className="max-w-7xl mx-auto flex justify-between">
                <button
                  onClick={() => setMenu((prev) => !prev)}
                  className="focus:outline-none hover:bg-brand-200 p-4 transition block md:hidden cursor-pointer"
                >
                  {menu ? (
                    <svg
                      className="h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                        fill="currentColor"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                </button>
                <div className="hidden md:flex">
                  <Link href={router.pathname !== "/" ? "/" : "#categories"}>
                    <a className="flex items-center hover:animate-pulse justify-center font-semibold px-6 py-2 bg-brand-200 transition text-white">
                      <svg
                        className="mr-2 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z"
                          fill="currentColor"
                        />
                      </svg>
                      Browse Categories
                    </a>
                  </Link>
                  {data.map((each, i) => {
                    return (
                      <Link href={each.url} key={i}>
                        <a
                          className="flex items-center font-semibold px-6 py-2 hover:bg-brand-200 transition text-white"
                          href=""
                        >
                          {each.h}
                        </a>
                      </Link>
                    );
                  })}
                </div>
                <div>
                  <Link href="/cart">
                    <div className="bg-white mr-2 rounded-full relative p-4 flex items-center justify-center cursor-pointer">
                      <svg
                        className="w-6 h-6 text-brand-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        ></path>
                      </svg>
                      <span className="text-white font-bold absolute top-0 w-5 h-5 rounded-full flex items-center justify-center p-1 right-0 bg-brand-200 text-xs">
                        {totalUniqueItems}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {menu && (
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="h-screen w-full bg-white fixed top-0 left-0 z-50 p-4 hideScroll"
            >
              <div className="flex h-full flex-col overflow-y-scroll">
                <div className="flex items-center justify-between">
                  <img className="w-1/3" src="/logo.svg" alt="" />
                  <button
                    onClick={() => setMenu(false)}
                    className="text-gray-800 hover:text-brand-100 flex items-center focus:outline-none"
                  >
                    <span className="mr-2 font-medium">close</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex-1 flex flex-col items-end justify-center">
                  <Link href="/">
                    <span
                      onClick={() => setMenu(false)}
                      className="text-7xl hover:text-brand-100 focus:underline transition font-bold"
                    >
                      Home
                    </span>
                  </Link>
                  <Link href="/faq">
                    <span
                      onClick={() => setMenu(false)}
                      className="text-7xl text-right hover:text-brand-100 focus:underline transition font-bold"
                    >
                      FAQ's
                    </span>
                  </Link>
                  <Link href="/term-condition">
                    <span
                      onClick={() => setMenu(false)}
                      className="text-7xl hover:text-brand-100 focus:underline transition font-bold"
                    >
                      Terms
                    </span>
                  </Link>
                </div>

                <p className="text-gray-500 text-center">
                  Kosher Pharmaceuticals © {new Date().getFullYear()}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
