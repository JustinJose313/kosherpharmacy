import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="text-center ">
      <img
        className="w-full md:w-1/2 lg:w-1/2 text-center mx-auto mt-16"
        src="/assets/404.png"
        alt=""
      />
      <h5 className="text-gray-900 font-extrabold">Ooops!!</h5>
      <p className="text-gray-400 font-bold my-2">
        THAT PAGE DOESN'T EXISTS OR IS UNAVAILABLE.
      </p>
      <Link href="/">
        <button className="bg-brand-100 hover:bg-brand-200 text-white font-bold  px-6 py-3 my-8 focus:outline-none ">
          {" "}
          Go Back to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
