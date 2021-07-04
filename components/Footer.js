import React from "react";
import Link from "next/link";

const Footer = () => {
  const contactInfo = [
    "022 - 28907869",
    "+91 - 9769768968",
    "+91 - 9998484145",
  ];
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
      h: "Terms & Conditions",
      url: "/term-condition",
    },
  ];
  return (
    <footer>
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 lg:gap-6">
            <div>
              <img className="h-24" src="/logo.svg" alt="" />
              <p className="text-gray-800 mt-2">
                We believe in PURE, GENUINE & AUTHENTIC Products.
              </p>
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
                      d="M14 19h5V5H5v14h7v-5h-2v-2h2v-1.654c0-1.337.14-1.822.4-2.311A2.726 2.726 0 0 1 13.536 6.9c.382-.205.857-.328 1.687-.381.329-.021.755.005 1.278.08v1.9H16c-.917 0-1.296.043-1.522.164a.727.727 0 0 0-.314.314c-.12.226-.164.45-.164 1.368V12h2.5l-.5 2h-2v5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
                      fill="currentCOlor"
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
                      d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm2.5 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-1 1h2v7.5h-2V10zm5.5.43c.584-.565 1.266-.93 2-.93 2.071 0 3.5 1.679 3.5 3.75v4.25h-2v-4.25a1.75 1.75 0 0 0-3.5 0v4.25h-2V10h2v.43z"
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
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <h5 className="font-bold mb-2 md:mb-4 text-gray-900">Contact</h5>
              {contactInfo.map((each, i) => {
                return (
                  <div key={i} className="flex items-center py-1">
                    <svg
                      className="text-brand-100 h-5 w-5 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"
                        fill="currentColor"
                      />
                    </svg>
                    <p className="text-gray-700">{each}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col">
              <h5 className="font-bold mb-2 md:mb-4 text-gray-900">
                Useful links
              </h5>
              {links.map((each, i) => {
                return (
                  <Link key={i} href={each.url}>
                    <p className="text-gray-700 py-1 cursor-pointer hover:text-gray-900 hover:underline">
                      {each.h}
                    </p>
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-col">
              <h5 className="font-bold mb-2 md:mb-4 text-gray-900">Address</h5>
              <p className="text-gray-700">
                Kosher Pharmaceuticals G-6, Thomas Compound, Holy Cross Road, I.
                C. Colony, Borivali West Mumbai 400103
              </p>
              <div className="my-4">
                <div className="flex items-center">
                  <p className="text-sm text-gray-700 flex-1">
                    info@kosherpharmaceuticals.com
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-gray-700">
                    kosherpharmaceuticals@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="pt-4 text-center text-gray-500">
            Kosher Pharmaceuticals © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
