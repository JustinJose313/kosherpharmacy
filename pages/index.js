import Head from "next/head";
import Image from "next/image";
import Faq from "../components/IndexComponents/FaqSection/Faq";
import Categories from "../components/IndexComponents/IndexCategories/Categories";
import IndexHero from "../components/IndexComponents/IndexHero";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <IndexHero />
      <Categories />
      <Faq/>
    </MainLayout>
  );
}
