import React from "react";
import Link from "next/link";

const Top5 = ({ setGroup, setCategory, setSearch }) => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <h2 className="lg:text-center font-bold text-3xl sm:text-4xl mt-4 mb-6">
          Our Top 5 Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="#products">
            <div
              onClick={() => {
                setCategory("Anticancer Medicines");
                setSearch('')
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
                  <h3 className="text-white text-base lg:text-5xl font-semibold tracking-wider">
                    Anticancer
                  </h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="#products">
            <div
              onClick={() => {
                setCategory("Antibiotic Medicines");
                setSearch('')
                setGroup("pharmacy");
              }}
              className="overflow-hidden cursor-pointer select-none"
            >
              <div
                style={{
                  backgroundImage: "url(/assets/top5/antibiotics.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                className="w-full h-full transform hover:scale-125 transition"
              >
                <div className="bg-black px-4 py-28 bg-opacity-50 hover:bg-opacity-20 transition w-full h-full flex items-center justify-center">
                  <h3 className="text-white text-base lg:text-xl font-semibold tracking-wider">
                    Antibiotics
                  </h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="#products">
            <div
              onClick={() => {
                setCategory("Cardiovascular Drugs");
                setSearch('')
                setGroup("pharmacy");
              }}
              className="overflow-hidden cursor-pointer select-none"
            >
              <div
                style={{
                  backgroundImage: "url(/assets/top5/antihypertensive.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                className="w-full h-full transform hover:scale-125 transition"
              >
                <div className="bg-black px-4 py-28 bg-opacity-50 hover:bg-opacity-20 transition w-full h-full flex items-center justify-center">
                  <h3 className="text-white text-base lg:text-xl font-semibold tracking-wider">
                    Cardiovascular
                  </h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="#products">
            <div
              onClick={() => {
                setCategory("Antacids");
                setSearch('')
                setGroup("pharmacy");
              }}
              className="overflow-hidden cursor-pointer select-none"
            >
              <div
                style={{
                  backgroundImage: "url(/assets/top5/antacid.png)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                className="w-full h-full transform hover:scale-125 transition"
              >
                <div className="bg-black px-4 py-28 bg-opacity-50 hover:bg-opacity-20 transition w-full h-full flex items-center justify-center">
                  <h3 className="text-white text-base lg:text-xl font-semibold tracking-wider">
                    Antacid
                  </h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="#products">
            <div
              onClick={() => {
                setCategory("Steroids");
                setSearch('')
                setGroup("pharmacy");
              }}
              className="overflow-hidden cursor-pointer select-none"
            >
              <div
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                className="w-full h-full transform hover:scale-125 transition"
              >
                <div className="bg-black px-4 py-28 bg-opacity-50 hover:bg-opacity-20 transition w-full h-full flex items-center justify-center">
                  <h3 className="text-white text-center text-base lg:text-xl font-semibold tracking-wider">
                    Steroids
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Top5;
