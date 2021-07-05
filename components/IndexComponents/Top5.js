import React from "react";
import Link from "next/link";

const Top5 = ({ group, setGroup, category, setCategory }) => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <h2 className="lg:text-center font-bold text-3xl sm:text-4xl">
          What do you need today?
        </h2>
        <p className="lg:text-center text-gray-500 mt-2 mb-6">
          Check our featured products and deals
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="#categoryContainer">
            <div
              onClick={() => {
                setCategory("Anticancer Medicines");
                setGroup("pharmacy");
              }}
              className="lg:col-span-2 lg:row-span-2 overflow-hidden cursor-pointer select-none"
            >
              <div
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1584515933487-779824d29309?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                className="w-full h-full transform hover:scale-125 transition"
              >
                <div className="bg-black px-4 py-28 bg-opacity-50 hover:bg-opacity-20 transition w-full h-full flex items-center justify-center">
                  <h3 className="text-white text-base lg:text-5xl tracking-wider">
                    Anticancer
                  </h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="#categoryContainer">
            <div
              onClick={() => {
                setCategory("Antibiotic Medicines");
                setGroup("pharmacy");
              }}
              className="overflow-hidden cursor-pointer select-none"
            >
              <div
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1549477881-1a8180c72ac8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                className="w-full h-full transform hover:scale-125 transition"
              >
                <div className="bg-black px-4 py-28 bg-opacity-50 hover:bg-opacity-20 transition w-full h-full flex items-center justify-center">
                  <h3 className="text-white text-base lg:text-md tracking-wider">
                    Antibiotics
                  </h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="#categoryContainer">
            <div
              onClick={() => {
                setCategory("Antibiotic Medicines");
                setGroup("pharmacy");
              }}
              className="overflow-hidden cursor-pointer select-none"
            >
              <div
                style={{
                  backgroundImage:
                    "url(https://cdn.pixabay.com/photo/2020/04/08/16/46/old-5018013_960_720.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                className="w-full h-full transform hover:scale-125 transition"
              >
                <div className="bg-black px-4 py-28 bg-opacity-50 hover:bg-opacity-20 transition w-full h-full flex items-center justify-center">
                  <h3 className="text-white text-base lg:text-md tracking-wider">
                    Antihypertensive
                  </h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="#categoryContainer">
            <div
              onClick={() => {
                setCategory("Antacids");
                setGroup("pharmacy");
              }}
              className="overflow-hidden cursor-pointer select-none"
            >
              <div
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1584515933487-779824d29309?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                className="w-full h-full transform hover:scale-125 transition"
              >
                <div className="bg-black px-4 py-28 bg-opacity-50 hover:bg-opacity-20 transition w-full h-full flex items-center justify-center">
                  <h3 className="text-white text-base lg:text-md tracking-wider">
                    Antacid
                  </h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="#categoryContainer">
            <div
              onClick={() => {
                setCategory("Steroids");
                setGroup("pharmacy");
              }}
              className="overflow-hidden cursor-pointer select-none"
            >
              <div
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1584515933487-779824d29309?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                className="w-full h-full transform hover:scale-125 transition"
              >
                <div className="bg-black px-4 py-28 bg-opacity-50 hover:bg-opacity-20 transition w-full h-full flex items-center justify-center">
                  <h3 className="text-white text-base lg:text-md tracking-wider">
                    Steroids & Hormones
                  </h3>
                </div>
              </div>
            </div>
          </Link>
          {/* <div className="lg:col-span-2 lg:row-span-2 bg-white border-2 lg:border-0 border-dashed flex flex-col items-center w-full">
            <img
            className="w-full "
              src="https://pharmacare.qodeinteractive.com/wp-content/uploads/2021/03/Product-featured-img-21.jpg"
              alt=""
            />
            <h2 className="uppercase font-semibold lg:text-center mt-6 px-4">
              LANSOPRAZOLE CAPSULES
            </h2>
            <div className="flex justify-start lg:justify-center mb-4">
              <button className="text-white shadow-md bg-brand-100 hover:bg-brand-200 px-5 py-2 mt-4 transition">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-white border-2 border-dashed flex flex-col items-center w-full">
            <img
              className="w-full"
              src="https://pharmacare.qodeinteractive.com/wp-content/uploads/2021/03/Product-featured-img-21.jpg"
              alt=""
            />
            <h2 className="uppercase font-semibold lg:text-center mt-6 px-4">
              LANSOPRAZOLE CAPSULES
            </h2>
            <div className="flex justify-start lg:justify-center mb-4">
              <button className="text-white shadow-md bg-brand-100 hover:bg-brand-200 px-5 py-2 mt-4 transition">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-white border-2 border-dashed flex flex-col items-center w-full">
            <img
              className="w-full"
              src="https://pharmacare.qodeinteractive.com/wp-content/uploads/2021/03/Product-featured-img-21.jpg"
              alt=""
            />
            <h2 className="uppercase font-semibold lg:text-center mt-6 px-4">
              LANSOPRAZOLE CAPSULES
            </h2>
            <div className="flex justify-start lg:justify-center mb-4">
              <button className="text-white shadow-md bg-brand-100 hover:bg-brand-200 px-5 py-2 mt-4 transition">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-white border-2 border-dashed flex flex-col items-center w-full">
            <img
              className="w-full"
              src="https://pharmacare.qodeinteractive.com/wp-content/uploads/2021/03/Product-featured-img-21.jpg"
              alt=""
            />
            <h2 className="uppercase font-semibold lg:text-center mt-6 px-4">
              LANSOPRAZOLE CAPSULES
            </h2>
            <div className="flex justify-start lg:justify-center mb-4">
              <button className="text-white shadow-md bg-brand-100 hover:bg-brand-200 px-5 py-2 mt-4 transition">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-white border-2 border-dashed flex flex-col items-center w-full">
            <img
              className="w-full"
              src="https://pharmacare.qodeinteractive.com/wp-content/uploads/2021/03/Product-featured-img-21.jpg"
              alt=""
            />
            <h2 className="uppercase font-semibold lg:text-center mt-6 px-4">
              LANSOPRAZOLE CAPSULES
            </h2>
            <div className="flex justify-start lg:justify-center mb-4">
              <button className="text-white shadow-md bg-brand-100 hover:bg-brand-200 px-5 py-2 mt-4 transition">
                Add to Cart
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Top5;
