import React from "react";
import Link from "next/link";

const Footer = () => {
  const contactInfo = ["+91 - 9769768968", "022 - 28907869"];
  const links = [
    {
      h: "Home",
      url: "/",
    },
    {
      h: "FAQ",
      url: "/faq",
    },
    {
      h: "About us",
      url: "/about",
    },
    {
      h: "Terms & Conditions",
      url: "/term-condition",
    },
  ];
  return (
    <footer>
      <div className="bg-white border-t border-brand-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <div className="flex flex-col">
            <h4 className="font-bold">Connect with Kosher</h4>
            <div className="flex items-center space-x-4 mt-2 text-gray-700">
              <a
                href="skype:kosherpharmaceuticals?call"
                target="_blank"
                className="cursor-pointer text-gray-500 hover:text-brand-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M13.004 18.423a2 2 0 0 1 1.237.207 3.25 3.25 0 0 0 4.389-4.389 2 2 0 0 1-.207-1.237 6.5 6.5 0 0 0-7.427-7.427 2 2 0 0 1-1.237-.207A3.25 3.25 0 0 0 5.37 9.76a2 2 0 0 1 .207 1.237 6.5 6.5 0 0 0 7.427 7.427zM12 20.5a8.5 8.5 0 0 1-8.4-9.81 5.25 5.25 0 0 1 7.09-7.09 8.5 8.5 0 0 1 9.71 9.71 5.25 5.25 0 0 1-7.09 7.09c-.427.066-.865.1-1.31.1zm.053-3.5C9.25 17 8 15.62 8 14.586c0-.532.39-.902.928-.902 1.2 0 .887 1.725 3.125 1.725 1.143 0 1.776-.624 1.776-1.261 0-.384-.188-.808-.943-.996l-2.49-.623c-2.006-.504-2.37-1.592-2.37-2.612C8.026 7.797 10.018 7 11.89 7c1.72 0 3.756.956 3.756 2.228 0 .545-.48.863-1.012.863-1.023 0-.835-1.418-2.9-1.418-1.023 0-1.596.462-1.596 1.126 0 .663.803.876 1.502 1.035l1.836.409C15.49 11.695 16 12.876 16 13.989 16 15.713 14.675 17 12.015 17h.038z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/kosherpharmaceuticals/"
                target="_blank"
                className="cursor-pointer text-gray-500 hover:text-brand-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://in.linkedin.com/company/kosher-pharmaceuticals"
                target="_blank"
                className="cursor-pointer text-gray-500 hover:text-brand-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="mailto: info@kosherpharmaceuticals.com"
                target="_blank"
                className="cursor-pointer text-gray-500 hover:text-brand-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="pt-6 grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-2">
            <div className="">
              <p className=" text-sm text-gray-400">
                Kosher Pharmaceuticals © {new Date().getFullYear()}
              </p>
            </div>
            <div className="md:col-span-3 text-sm">
              <div className='flex space-x-3'>
                <Link href="/term-condition">
                  <span className='font-medium text-gray-400 hover:text-gray-700'>Terms of Use</span>
                </Link>
                <span className='text-gray-400'>{" | "}</span>
                <Link href="/about">
                  <span className='font-medium text-gray-400 hover:text-gray-700'>About Us</span>
                </Link>
                <span className='text-gray-400'>{" | "}</span>
                <Link href="/faq">
                  <span className='font-medium text-gray-400 hover:text-gray-700'>FAQ's</span>
                </Link>
              </div>
            </div>
          </div>
          {/* 
          <p className="pt-2 text-sm text-center text-gray-400">
            Kosher Pharmaceuticals G-6, Thomas Compound, Holy Cross Road, I. C.
            Colony, Borivali West Mumbai 400103
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
{
  /*  */
}
