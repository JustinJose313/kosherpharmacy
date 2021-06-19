import React, { useState } from "react";
import { useCart } from "react-use-cart";
import CartCard from "./CartCard";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";

const CartPage = () => {
  const { isEmpty, items } = useCart();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3).max(50).required("Your Name is required"),
    email: Yup.string().email("Invalid Email").required("Subject is required"),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onBlur",
  });
  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/contact`,
        values
      );
      response.status === 200 && setSuccess(true);
      setLoading(false);
      setSuccess(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {isEmpty ? (
            <div className="lg:col-span-8 flex items-center justify-center">
              <p className='text-3xl sm:text-4xl font-bold text-brand-100'>Cart is Empty</p>
            </div>
          ) : (
            <div className="space-y-4 lg:col-span-8">
              {items.map((each, i) => {
                return <CartCard key={i} data={each} />;
              })}
            </div>
          )}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-4 lg:col-span-4"
          >
            <div className="p-4 md:p-8 bg-white shadow-xl border border-brand-100">
              <div className="flex flex-col space-y-2">
                <label className="text-sm" htmlFor="name">
                  Your Name
                </label>
                <input
                  {...register("name")}
                  className={`${
                    errors.name
                      ? "focus:border-red-500"
                      : "focus:border-brand-100"
                  } bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white`}
                  id="name"
                  type="text"
                  placeholder=""
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name?.message}</p>
                )}
              </div>
              <div className="flex flex-col space-y-2 mt-6">
                <label className="text-sm" htmlFor="email">
                  Your Email
                </label>
                <input
                  {...register("email")}
                  className={`${
                    errors.email
                      ? "focus:border-red-500"
                      : "focus:border-brand-100"
                  } bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white`}
                  id="email"
                  type="email"
                  placeholder=""
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email?.message}</p>
                )}
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-5 py-3 disabled:opacity-50 w-full text-white bg-brand-100 hover:bg-brand-200 transition shadow-md"
                >
                  {success
                    ? "Products sent for Enquiry!"
                    : "Send Products for Enquiry"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
