import Faq from "../components/IndexComponents/FaqSection/Faq";
import Categories from "../components/IndexComponents/IndexCategories/Categories";
import IndexContact from "../components/IndexComponents/IndexContact";
import IndexHero from "../components/IndexComponents/IndexHero";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <IndexHero />
      <Categories />
      <IndexContact />
      <Faq />
    </MainLayout>
  );
}
