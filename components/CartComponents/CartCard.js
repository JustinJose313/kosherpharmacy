import React, { useState } from "react";
import { useCart } from "react-use-cart";

const CartCard = ({ data = {}, setVariation, variation }) => {
  const { updateItemQuantity, removeItem } = useCart();
  const [R, setR] = useState(data.s ? data.s[0] : "");
  return (
    <div className="p-4 bg-white border-2 border-dashed flex flex-col md:flex-row md:items-start w-full">
      <div className="flex w-full flex-col md:flex-row md:items-center lg:justify-between">
        <div className="flex items-center flex-1">
          <div
            onClick={() => removeItem(data.id)}
            className="p-4 text-red-500 transition rounded-lg hover:bg-red-500 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="w-16 lg:w-28 mr-4">
            <img
              className="object-contain"
              width="100"
              height="100"
              src={
                data.img
                  ? data.img
                  : "https://pharmacare.qodeinteractive.com/wp-content/uploads/2021/03/Product-featured-img-21.jpg"
              }
              alt={data.img ? data.n : "kosher product image"}
            />
          </div>
          <div className="flex flex-col ">
            <p className="font-bold">{data.n}</p>
            <p className="text-sm font-medium text-brand-100">{data.c}</p>
          </div>
        </div>
        <div className="flex items-center mt-6 lg:mt-0">
          <div className="flex-1 flex text-gray-500">
            <div
              onClick={() => updateItemQuantity(data.id, data.quantity - 1)}
              className="p-4 cursor-pointer rounded-lg hover:bg-brand-100 hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M5 11h14v2H5z" fill="currentColor" />
              </svg>
            </div>
            <div className="py-4 px-6 font-bold ">{data.quantity}</div>
            <div
              onClick={() => updateItemQuantity(data.id, data.quantity + 1)}
              className="p-4 cursor-pointer rounded-lg hover:bg-brand-100 hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
