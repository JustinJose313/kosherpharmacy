import React, { useState } from "react";

const Categories = () => {
  const data = [...Array(5)];
  const catData = [...Array(11)];
  const [toggle, setToggle] = useState(true);
  return (
    <div id='categories'>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-4 mb-6">
            <h2 className="text-2xl font-bold">Categories</h2>
            <p className="text-gray-500 max-w-md mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              ducimus consequuntur corporis dolorem excepturi
            </p>
            <div className="mt-6">
              <div
                onClick={() => setToggle((prev) => !prev)}
                className="bg-brand-100 cursor-pointer hover:bg-brand-200 text-white p-4 w-full"
              >
                Show Categories
              </div>
              {toggle && (
                <div>
                  {catData.map((each, i) => {
                    return (
                      <div
                        key={i}
                        className="bg-white cursor-pointer hover:bg-gray-50 font-semibold hover:text-brand-200 p-4 w-full"
                      >
                        Allergies
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <div className="md:col-span-8 space-y-4">
            {data.map((each, i) => {
              return (
                <div
                  key={i}
                  className="bg-whiite border-2 border-dashed flex flex-col md:flex-row w-full"
                >
                  <img
                    className="w-full md:w-4/12"
                    src="https://pharmacare.qodeinteractive.com/wp-content/uploads/2021/03/Product-featured-img-21.jpg"
                    alt=""
                  />
                  <div className="flex-1 p-4">
                    <h2 className="uppercase font-semibold">
                      Vicky liftactive supreme serum
                    </h2>
                    <p className="text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid quam at natus saepe sequi id nobis mollitia quasi
                      ducimus labore!
                    </p>
                    <p className="font-semibold text-xl mt-6 text-brand-200">
                      Rs.499 /-
                    </p>
                    <button className="text-white shadow-md bg-brand-100 hover:bg-brand-200 px-5 py-2 mt-4 transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
