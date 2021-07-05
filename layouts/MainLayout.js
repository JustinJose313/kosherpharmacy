import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Seo from "../components/Seo";
import Link from "next/link";
import ScrollButton from "../components/ScrollButton";

const MainLayout = ({ data, children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Seo data={data} />
      <Link href="/">
        <div className="flex w-full items-center justify-center bg-transparent">
          <img className="h-24 py-2 cursor-pointer" src="/logo.svg" alt="" />
        </div>
      </Link>
      <header className="sticky top-0 z-50">
        <Header />
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollButton />
    </div>
  );
};

export default MainLayout;
