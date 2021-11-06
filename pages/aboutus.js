import React from "react";
import MainLayout from "../layouts/MainLayout";
import About from "../components/About";

const about = () => {
  const SEOData = {
    title: "Kosher Pharmaceuticals - PURE ∙ GENUINE ∙ AUTHENTIC - About Us",
    desc: "Buy Pharmacy Online - Cheap Medication - Kosher Pharmaceuticals. We export prescription and over-the-counter (OTC) pharmaceuticals, nutritional products, active pharmaceutical ingredients (API) and veterinary medicines. Our product list constitutes a huge product assortment to suit every customer in major therapeutic categories or targeted segments enabling customers to return fully satisfied and contended.",
    author: "Kosher Pharmaceuticals",
    ogImg: `${process.env.NEXT_PUBLIC_URL}/logo.png`,
    ogImgAlt: "Kosher Pharmaceuticals",
    page: "aboutus",
  };
  return (
    <MainLayout data={SEOData}>
      <About />
    </MainLayout>
  );
};

export default about;
