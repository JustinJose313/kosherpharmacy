import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const IndexContact = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Name is too short").max(50, "Name is too long").required("Name is required"),
    email: Yup.string().email("Invalid Email").required("Subject is required"),
    message: Yup.string().max(100),
  });
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onBlur",
  });

  const notify = () => toast("Enquiry sent successfully!");
  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(`/api/contact`, values);
      response.status === 200 && setSuccess(true);
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
      notify();
      reset()
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <section className="">
      <Toaster />
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <h2 className="text-xl sm:text-3xl font-bold mb-6 text-center mx-auto">
          See What Kosher Pharmaceuticals Can Do For You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 shadow-lg">
          <div className="relative bg-brand-100">
            <div className="w-full h-full opacity-80">
              <img
                className="w-full h-full object-cover bg-center"
                src="/assets/contacthero.jpg"
                alt=""
              />
            </div>
            {/* <div className='absolute top-0 left-0 w-full h-full bg-gray-700 bg-opacity-30'>Hello</div> */}
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-4 md:p-8 bg-white flex flex-col justify-center"
          >
            <div className="flex flex-col space-y-2">
              <label className="text-sm" htmlFor="name">
                Name <span className='text-red-500'>*</span>
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
                Email <span className='text-red-500'>*</span>
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
            <div className="flex flex-col space-y-2 mt-6">
              <label className="text-sm" htmlFor="message">
                Message
              </label>
              <textarea
                {...register("message")}
                rows="4"
                className={`${
                  errors.message
                    ? "focus:border-red-500"
                    : "focus:border-brand-100"
                } bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white`}
                id="message"
                type="text"
                placeholder=""
              />
              {errors.message && (
                <p className="text-red-500">{errors.message?.message}</p>
              )}
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                disabled={loading}
                className="px-5 py-3 disabled:opacity-50 w-full md:w-auto text-white bg-brand-100 hover:bg-brand-200 transition shadow-md"
              >
                {success ? "Submit" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default IndexContact;
