import Head from "next/head";
import Image from "next/image";
import IndexHero from "../components/IndexComponents/IndexHero";
import Slider from "../components/IndexComponents/Slider";
import MainLayout from "../layouts/MainLayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <MainLayout>
      <IndexHero />
      <Slider />
    </MainLayout>
  );
} 
