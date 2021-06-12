import React from "react";
import Link from "next/link";

const Footer = () => {
  const contactInfo = [
    "+91 - 9998484145",
    "+91 - 9998484145",
    "+91 - 9998484145",
  ];
  const links = [
    {
      h: "Home",
      url: "/",
    },
    {
      h: "Browse categories",
      url: "/",
    },
    {
      h: "Terms and Conditions",
      url: "/",
    },
    {
      h: "Privacy policy",
      url: "/",
    },
  ];
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 lg:gap-6">
          <div>
            <h1 className="text-3xl">LOGO</h1>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              delectus!
            </p>
          </div>
          <div className="flex flex-col">
            <h5 className="font-bold mb-2 md:mb-4">Contact</h5>
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
                  <p className="text-gray-500">{each}</p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col">
            <h5 className="font-bold mb-2 md:mb-4">Useful links</h5>
            {links.map((each, i) => {
              return (
                <Link href={each.url}>
                  <p className="text-gray-500 py-1 cursor-pointer hover:text-black hover:underline">{each.h}</p>
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col">
            <h5 className="font-bold mb-2 md:mb-4">Address</h5>
            <p className="text-gray-500">
              Monday to Sunday 7 am to 9 pm 45 Hudson Street Villa Rica, GA
              30180
            </p>
            <div className="flex items-center space-x-4 mt-2">
              <p>s</p>
              <p>s</p>
              <p>s</p>
              <p>s</p>
            </div>
          </div>
        </div>
      <p className='pt-4 text-center text-gray-500'>Copyright Kosher Pharmacy</p>
      </div>
    </div>
  );
};

export default Footer;
