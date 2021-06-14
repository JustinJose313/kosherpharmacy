import React, { useState, useRef } from "react";
import Link from "next/link";
import { useClickOutside } from "../customHooks/useClickOutside";

const Header = () => {
  const data = [
    {
      h: "Home",
      url: "/",
    },
    {
      h: "Home",
      url: "/",
    },
    {
      h: "Home",
      url: "/",
    },
  ];
  const [menu, setMenu] = useState(false);
  let domNode = useClickOutside(() => {
    setMenu(false);
  });
  return (
    <>
      <div className="flex w-full items-center justify-center">
        <img className='h-24' src="/Logo.png" alt="" />
      </div>
      <div className="sticky top-0 z-50 h-auto">
        <div ref={domNode} className="">
          <div className="bg-brand-100">
            <div className="max-w-7xl mx-auto flex items-center justify-between pr-4">
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
              <div className="hidden md:flex items-center">
                <a
                  href="#categories"
                  className="flex items-center hover:animate-pulse justify-center font-semibold px-6 py-2 bg-brand-200 transition text-white"
                >
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
                {data.map((each, i) => {
                  return (
                    <Link href={each.url} key={i}>
                      <a
                        className="block font-semibold px-6 py-2 hover:bg-brand-200 transition text-white"
                        href=""
                      >
                        {each.h}
                      </a>
                    </Link>
                  );
                })}
              </div>
              <div>
                <div className="flex items-center justify-center">
                  <svg
                    className="text-white mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M6 9h13.938l.5-2H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1V4H2V2h3a1 1 0 0 1 1 1v6zm0 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                      fill="currentColor"
                    />
                  </svg>{" "}
                  <span className="text-white">0</span>
                </div>
              </div>
            </div>
          </div>
          {menu && (
            <div
              className={`shadow-lg rounded-b-lg overflow-hidden md:hidden block max-w-7xl mx-auto bg-white border-t`}
            >
              {data.map((each, i) => {
                return (
                  <Link key={i} href={each.url}>
                    <div className="w-full transition px-4 py-2 text-brand-200 hover:text-white hover:bg-brand-200 font-semibold">
                      {each.h}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
