import Faq from "../components/IndexComponents/FaqSection/Faq";
import Categories from "../components/IndexComponents/IndexCategories/Categories";
import IndexContact from "../components/IndexComponents/IndexContact";
import IndexHero from "../components/IndexComponents/IndexHero";
import Top5 from "../components/IndexComponents/Top5";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <IndexHero />
      <Top5 />
      <Categories />
      <IndexContact />
      <Faq />
    </MainLayout>
  );
}
