import React, { useState } from "react";
import { useCart } from "react-use-cart";
import CartCard from "./CartCard";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const normalizePhoneNum = (value) => {
  return (
    value
      .replace(/\s/g, "")
      .match(/.{1,4}/g)
      .join(" ")
      .substr(0, 17) || ""
  );
};

const CartPage = () => {
  const { isEmpty, items } = useCart();
  const [variation, setVariation] = useState([]);
  console.log(variation);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3).max(50).required("Your Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    email: Yup.string().required("Phone number is required"),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onBlur",
  });

  const notify = () => toast("Cart sent for enquiry!");
  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/cart`,
        { ...values, items: items ? items : null }
      );
      response.status === 200 && setSuccess(true);
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
      notify();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className="bg-white">
      <ToastContainer autoClose={2000} />
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {isEmpty ? (
            <div className="lg:col-span-8 flex items-center justify-center">
              <p className="text-3xl sm:text-4xl font-bold text-brand-100">
                Cart is Empty
              </p>
            </div>
          ) : (
            <div className="space-y-4 lg:col-span-8">
              {items.map((each, i) => {
                return (
                  <CartCard
                    key={i}
                    data={each}
                    setVariation={setVariation}
                    variation={variation}
                  />
                );
              })}
            </div>
          )}
          <form onSubmit={handleSubmit(onSubmit)} className="p-4 lg:col-span-4">
            <div className="p-4 md:p-8 bg-white shadow-xl border border-brand-100">
              <div className="flex flex-col space-y-2">
                <label className="text-sm" htmlFor="name">
                  Your Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-4 w-4 text-brand-100"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M2 22a8 8 0 1 1 16 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm10 4h4v2h-4v-2zm-3-5h7v2h-7v-2zm2-5h5v2h-5V7z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    {...register("name")}
                    name="name"
                    id="name"
                    className={`${
                      errors.name
                        ? "focus:border-red-500"
                        : "focus:border-brand-100"
                    } bg-gray-100 pl-10 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white`}
                    placeholder="eg: John Doe"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500">{errors.name?.message}</p>
                )}
              </div>
              <div className="flex flex-col space-y-2 mt-6">
                <label className="text-sm" htmlFor="email">
                  Your Email
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-4 w-4 text-brand-100"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M2 5.5V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2-10-9zM0 10h5v2H0v-2zm0 5h8v2H0v-2z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    {...register("email")}
                    name="email"
                    id="email"
                    className={`${
                      errors.email
                        ? "focus:border-red-500"
                        : "focus:border-brand-100"
                    } bg-gray-100 pl-10 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white`}
                    placeholder="eg: user@user.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500">{errors.email?.message}</p>
                )}
              </div>
              <div className="flex flex-col space-y-2 mt-6">
                <label className="text-sm" htmlFor="phone">
                  Your Mobile Number
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-4 w-4 text-brand-100"
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
                  </div>
                  <input
                    type="tel"
                    {...register("phone")}
                    name="phone"
                    id="phone"
                    onChange={(e) => {
                      const { value } = e.target;
                      e.target.value = normalizePhoneNum(value);
                    }}
                    className={`${
                      errors.phone
                        ? "focus:border-red-500"
                        : "focus:border-brand-100"
                    } bg-gray-100 pl-10 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white`}
                    placeholder="eg: 0091 9987 9939 51"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500">{errors.phone?.message}</p>
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
