import React, { useEffect, useState } from "react";
import Link from "next/link";
import { productData, productHeadings } from "../../../public/data/productData";
import { useCart } from "react-use-cart";
import AutoComplete from "./AutoComplete";

const Categories = ({
  group,
  setGroup,
  category,
  setCategory,
  search,
  setSearch,
}) => {
  const { pharmacy, surgical, veterinary } = productData;
  const spreadData = [...pharmacy, ...surgical, ...veterinary];
  const { addItem } = useCart();
  const [toggle, setToggle] = useState(true);
  const [product, setProduct] = useState()

  useEffect(() => {
    const w = window.innerWidth;
    if (w <= 768) {
      setToggle(false);
    }
  }, []);

  return (
    <section id="categories">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-4 mb-6">
            <h2 className="text-2xl font-bold">Categories</h2>
            <AutoComplete
              data={spreadData}
              group={group}
              setGroup={setGroup}
              category={category}
              setCategory={setCategory}
              search={search}
              setSearch={setSearch}
              onSelect={product => setProduct(product)}
            />
            <div className="mt-6">
              <div
                onClick={() => {
                  setGroup("pharmacy");
                  setToggle((prev) => !prev);
                }}
                className={`${
                  group === "pharmacy" ? "bg-brand-200" : "bg-brand-100"
                } cursor-pointer capitalize font-bold flex items-center justify-between hover:bg-brand-200 text-white p-4 w-full`}
              >
                Pharmaceuticals
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
                        onClick={() => {
                          setCategory(each);
                          setSearch("");
                        }}
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

              <Link href="#categoryContainer">
                <div
                  onClick={() => {
                    setGroup("surgical");
                    setSearch("");
                    setToggle(false);
                  }}
                  className={`${
                    group === "surgical" ? "bg-brand-200" : "bg-brand-100"
                  } mt-2 capitalize cursor-pointer font-bold flex items-center justify-between hover:bg-brand-200 text-white p-4 w-full`}
                >
                  Surgical
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
                </div>
              </Link>
             
              <Link href="#categoryContainer">
                <div
                  onClick={() => {
                    setGroup("veterinary");
                    setSearch("");
                    setToggle(false);
                  }}
                  className={`${
                    group === "veterinary" ? "bg-brand-200" : "bg-brand-100"
                  } mt-2 capitalize cursor-pointer font-bold flex items-center justify-between hover:bg-brand-200 text-white p-4 w-full`}
                >
                  Veterinary
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
                </div>
              </Link>
            </div>
          </div>
          <div className="md:col-span-8 space-y-4" id="categoryContainer">
            {group === "pharmacy" && (
              <>
                <h2 className="text-2xl font-bold text-brand-100 mb-4">
                  {category}
                </h2>
                {productData.pharmacy
                  .filter((each) => {
                    if (each.n.toLowerCase().includes(search.toLowerCase())) {
                      return each;
                    }
                  })
                  .map((each, i) => {
                    if (category === each.c) {
                      return (
                        <div
                          key={i}
                          className="bg-white border-2 border-dashed flex flex-col md:flex-row md:items-start w-full"
                        >
                          <img
                            className="w-full md:w-4/12 p-4"
                            src={
                              each.img
                                ? each.img
                                : "https://pharmacare.qodeinteractive.com/wp-content/uploads/2021/03/Product-featured-img-21.jpg"
                            }
                            alt={
                              each.img
                                ? each.n
                                : "Kosher Pharaceutical Product"
                            }
                          />
                          <div className="flex-1 p-4">
                            <h2 className="uppercase font-semibold">
                              {each.n}
                            </h2>
                            {each.d.map((e, i) => {
                              return (
                                <p className="text-gray-500 my-2" key={i}>
                                  {e}
                                </p>
                              );
                            })}
                            {each.ul && (
                              <div>
                                <p className="text-gray-500 mt-4 mb-2">
                                  {each.ul.h}
                                </p>

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
                            {each.pid && (
                              <p className="font-semibold text-xl mt-6 text-brand-200">
                                {each.pid}
                              </p>
                            )}
                            <Link href="/cart">
                              <button
                                onClick={() => addItem(each)}
                                className="text-white focus:outline-none focus:ring-2 ring-brand-200 flex items-center font-bold shadow-xl bg-brand-100 hover:bg-brand-200 px-8 py-3 mt-4 transition"
                              >
                                Add to Cart
                                <svg
                                  className="ml-2 h-4 w-4"
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
                              </button>
                            </Link>
                          </div>
                        </div>
                      );
                    }
                  })}
              </>
            )}
            {group === "surgical" && (
              <>
                <h2 className="text-2xl font-bold text-brand-100 mb-4 capitalize">
                  {group}
                </h2>
                {productData.surgical
                  .filter((each) => {
                    if (search == "") {
                      return each;
                    } else if (
                      each.n.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return each;
                    }
                  })
                  .map((each, i) => {
                    return (
                      <div
                        key={i}
                        className="bg-white border-2 border-dashed flex flex-col md:flex-row md:items-start w-full"
                      >
                        <img
                          className="w-full md:w-4/12 p-4"
                          src={
                            each.img
                              ? each.img
                              : "https://pharmacare.qodeinteractive.com/wp-content/uploads/2021/03/Product-featured-img-21.jpg"
                          }
                          alt={
                            each.img ? each.n : "Kosher Pharaceutical Product"
                          }
                        />
                        <div className="flex-1 p-4">
                          <h2 className="uppercase font-semibold">{each.n}</h2>
                          {each.d &&
                            each.d.map((e, i) => {
                              return (
                                <p className="text-gray-500 my-2" key={i}>
                                  {e}
                                </p>
                              );
                            })}

                          {each.s && (
                            <div>
                              <p className="mt-2 mb-1 font-medium">
                                Available variations:{" "}
                              </p>
                              {each.s.map((e, i) => {
                                return (
                                  <p className="text-gray-500 my-1" key={i}>
                                    {e}
                                  </p>
                                );
                              })}
                            </div>
                          )}
                          {each.ul && (
                            <div>
                              <p className="text-gray-500 mt-4 mb-2">
                                {each.ul.h}
                              </p>

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
                          {each.pid && (
                            <p className="font-semibold text-xl mt-6 text-brand-200">
                              {each.pid}
                            </p>
                          )}
                          <Link href="/cart">
                            <button
                              onClick={() => addItem(each)}
                              className="text-white focus:outline-none focus:ring-2 ring-brand-200 flex items-center font-bold shadow-xl bg-brand-100 hover:bg-brand-200 px-8 py-3 mt-4 transition"
                            >
                              Add to Cart
                              <svg
                                className="ml-2 h-4 w-4"
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
                            </button>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
              </>
            )}
            {group === "veterinary" && (
              <>
                <h2 className="text-2xl font-bold text-brand-100 mb-4 capitalize">
                  {group}
                </h2>
                {productData.veterinary
                  .filter((each) => {
                    if (search == "") {
                      return each;
                    } else if (
                      each.n.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return each;
                    }
                  })
                  .map((each, i) => {
                    return (
                      <div
                        key={i}
                        className="bg-white border-2 border-dashed flex flex-col md:flex-row md:items-start w-full"
                      >
                        <img
                          className="w-full md:w-4/12 p-4"
                          src={
                            each.img
                              ? each.img
                              : "https://pharmacare.qodeinteractive.com/wp-content/uploads/2021/03/Product-featured-img-21.jpg"
                          }
                          alt={
                            each.img ? each.n : "Kosher Pharaceutical Product"
                          }
                        />
                        <div className="flex-1 p-4">
                          <h2 className="uppercase font-semibold">{each.n}</h2>
                          {each.d &&
                            each.d.map((e, i) => {
                              return (
                                <p className="text-gray-500 my-2" key={i}>
                                  {e}
                                </p>
                              );
                            })}
                          {each.s &&
                            each.s.map((e, i) => {
                              return (
                                <p className="text-gray-500 my-2" key={i}>
                                  {e}
                                </p>
                              );
                            })}
                          {each.ul && (
                            <div>
                              <p className="text-gray-500 mt-4 mb-2">
                                {each.ul.h}
                              </p>

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
                          {each.pid && (
                            <p className="font-semibold text-xl mt-6 text-brand-200">
                              {each.pid}
                            </p>
                          )}
                          <Link href="/cart">
                            <button
                              onClick={() => addItem(each)}
                              className="text-white focus:outline-none focus:ring-2 ring-brand-200 flex items-center font-bold shadow-xl bg-brand-100 hover:bg-brand-200 px-8 py-3 mt-4 transition"
                            >
                              Add to Cart
                              <svg
                                className="ml-2 h-4 w-4"
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
                            </button>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
