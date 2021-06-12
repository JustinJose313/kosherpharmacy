import Head from "next/head";
import Image from "next/image";
import Categories from "../components/IndexComponents/IndexCategories/Categories";
import IndexHero from "../components/IndexComponents/IndexHero";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <IndexHero />
      <Categories />
    </MainLayout>
  );
}
