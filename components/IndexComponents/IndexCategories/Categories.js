import React, { useState } from "react";
import { productData, productHeadings } from "../../../public/data/productData";

const Categories = () => {
  const data = [...Array(5)];
  const [toggle, setToggle] = useState(true);
  const [category, setCategory] = useState("Antacids");

  return (
    <div id="categories">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-4 mb-6">
            <h2 className="text-2xl font-bold">Categories</h2>
            <p className="text-gray-500 max-w-md mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              ducimus consequuntur corporis dolorem excepturi
            </p>
            <div className="mt-6">
              <div
                onClick={() => setToggle((prev) => !prev)}
                className="bg-brand-100 cursor-pointer font-bold flex items-center justify-between hover:bg-brand-200 text-white p-4 w-full"
              >
                Show Categories
                {toggle ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                      fill="currentColor"
                    />
                  </svg>
                )}
              </div>
              {toggle && (
                <div className="border">
                  {productHeadings.map((each, i) => {
                    return (
                      <a
                        href="#categoryContainer"
                        onClick={() => setCategory(each)}
                        key={i}
                        className={`${
                          category === each
                            ? "bg-gray-100 text-brand-200"
                            : "bg-white"
                        } cursor-pointer flex items-center justify-between hover:bg-gray-50 font-semibold hover:text-brand-200 p-4 w-full`}
                      >
                        {each}
                        {category === each && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                              fill="currentColor"
                            />
                          </svg>
                        )}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <div className="md:col-span-8 space-y-4" id="categoryContainer">
          <h2 className="text-2xl font-bold text-brand-100 mb-4">{category}</h2>
            {productData.map((each, i) => {
              if (category === each.c) {
                return (
                  <div
                    key={i}
                    className="bg-whiite border-2 border-dashed flex flex-col md:flex-row md:items-start w-full"
                  >
                    <img
                      className="w-full md:w-4/12"
                      src="https://pharmacare.qodeinteractive.com/wp-content/uploads/2021/03/Product-featured-img-21.jpg"
                      alt=""
                    />
                    <div className="flex-1 p-4">
                      <h2 className="uppercase font-semibold">{each.n}</h2>
                      {each.d.map((e, i) => {
                        return (
                          <p className="text-gray-500 my-2" key={i}>
                            {e}
                          </p>
                        );
                      })}
                      {each.ul && (
                        <div>
                          <p className="text-gray-500 mt-4 mb-2">{each.ul.h}</p>

                          <ul className="ml-6">
                            {each.ul.list.map((l, i) => {
                              return (
                                <li key={i}>
                                  <p className="text-gray-500 capitalize">
                                    {l}
                                  </p>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                      {each.id && (

                        <p className="font-semibold text-xl mt-6 text-brand-200">
                        {each.id}
                      </p>
                        )}
                      <button className="text-white shadow-md bg-brand-100 hover:bg-brand-200 px-5 py-2 mt-4 transition">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
