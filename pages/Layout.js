import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderTwo from "@/components/HeaderTwo";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="bg-black text-light">
      {/* <Header /> */}
      <HeaderTwo />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
