import TermCondition from "../components/TermsCondition/TermCondition";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  const SEOData = {
    title: "Kosher Pharmaceuticals - PURE ∙ GENUINE ∙ AUTHENTIC - Terms and Conditions",
    desc: "We export prescription and over-the-counter (OTC) pharmaceuticals, nutritional products, active pharmaceutical ingredients (API) and veterinary medicines. Our product list constitutes a huge product assortment to suit every customer in major therapeutic categories or targeted segments enabling customers to return fully satisfied and contended.",
    author: "Kosher Pharmaceuticals",
    ogImg: `${process.env.NEXT_PUBLIC_URL}/logo.png`,
    ogImgAlt: "Kosher Pharmaceuticals",
  };
  return (
    <MainLayout data={SEOData}>
      <TermCondition />
    </MainLayout>
  );
}
