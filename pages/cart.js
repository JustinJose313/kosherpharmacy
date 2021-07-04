import React from "react";
import dynamic from "next/dynamic";

export const CartPage = dynamic(
  () => import("../components/CartComponents/CartPage"),
  {
    ssr: false,
  }
);
import MainLayout from "../layouts/MainLayout";

const cart = () => {
  const SEOData = {
    title: "Kosher Pharmaceuticals - PURE, GENUINE & AUTHENTIC - Cart Page",
    desc: "We export prescription and over-the-counter (OTC) pharmaceuticals, nutritional products, active pharmaceutical ingredients (API) and veterinary medicines. Our product list constitutes a huge product assortment to suit every customer in major therapeutic categories or targeted segments enabling customers to return fully satisfied and contended.",
    author: "Kosher Pharmaceuticals",
    ogImg: `${process.env.NEXT_PUBLIC_URL}/logo.png`,
    ogImgAlt: "Kosher Pharmaceuticals",
  };
  return (
    <MainLayout data={SEOData}>
      <CartPage />
    </MainLayout>
  );
};

export default cart;
