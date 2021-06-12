import Head from "next/head";
import Image from "next/image";
import IndexHero from "../components/IndexComponents/IndexHero";
import MainLayout from "../layouts/MainLayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <MainLayout>
      <IndexHero />
    </MainLayout>
  );
} 
