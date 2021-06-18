import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
