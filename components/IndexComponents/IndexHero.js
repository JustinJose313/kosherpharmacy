import React, { useState, useRef, useEffect } from "react";
import { sliderData } from "../../public/data/sliderData";
import { AnimatePresence, motion } from "framer-motion";

const IndexHero = () => {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };
    timeout.current = setTimeout(nextSlide, 4000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }
  return (
    <section className="overflow-hidden relative heroHeight">
      <div className="w-full h-full flex justify-center items-center overflow-hidden relative">
        <div className="w-full h-full">
          <AnimatePresence initial={true}>
            {current === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
              >
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="/assets/slider/pure.jpg"
                  alt="pure pharmaceutical products"
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <h1 className="font-fancy uppercase tracking-widest text-brand-400 text-4xl md:text-6xl lg:text-9xl font-semibold">
                    PURE
                  </h1>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="w-full h-full">
          <AnimatePresence initial={true}>
            {current === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
              >
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="/assets/slider/test2.jpg"
                  alt="Genuine pharmaceutical products"
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <h1 className="font-fancy softTextShadow uppercase text-yellow-400 text-4xl md:text-6xl lg:text-9xl font-semibold">
                    genuine
                  </h1>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="w-full h-full">
          <AnimatePresence initial={true}>
            {current === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
              >
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="/assets/slider/authentic.jpg"
                  alt="Authentic pharmaceutical products"
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <h1 className="font-fancy uppercase text-white text-4xl md:text-6xl lg:text-large font-semibold">
                    Authentic
                  </h1>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex absolute bottom-10 right-10 z-10 ">
          <button
            onClick={prevSlide}
            className="focus:outline-none mr-4 p-4 bg-black rounded-full text-white select-none cursor-pointer hover:bg-brand-100 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="focus:outline-none mr-4 p-4 bg-black rounded-full text-white select-none cursor-pointer hover:bg-brand-100 transition"
          >
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
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndexHero;
