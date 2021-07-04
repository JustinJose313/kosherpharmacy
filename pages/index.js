import Faq from "../components/IndexComponents/FaqSection/Faq";
import Categories from "../components/IndexComponents/IndexCategories/Categories";
import IndexContact from "../components/IndexComponents/IndexContact";
import IndexHero from "../components/IndexComponents/IndexHero";
import Top5 from "../components/IndexComponents/Top5";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  const SEOData = {
    title: "Kosher Pharmaceuticals - PURE, GENUINE & AUTHENTIC - Home Page",
    desc: "We export prescription and over-the-counter (OTC) pharmaceuticals, nutritional products, active pharmaceutical ingredients (API) and veterinary medicines. Our product list constitutes a huge product assortment to suit every customer in major therapeutic categories or targeted segments enabling customers to return fully satisfied and contended.",
    author: "Kosher Pharmaceuticals",
    ogImg: `${process.env.NEXT_PUBLIC_URL}/logo.png`,
    ogImgAlt: "Kosher Pharmaceuticals",
  };
  return (
    <MainLayout data={SEOData}>
      <IndexHero />
      <Top5 />
      <Categories />
      <IndexContact />
      <Faq />
    </MainLayout>
  );
}
