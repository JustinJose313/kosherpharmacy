import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Link href="/">
        <div className="flex w-full items-center justify-center bg-transparent">
          <img className="h-20 md:h-24 cursor-pointer" src="/Logo.png" alt="" />
        </div>
      </Link>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
