import Introduction from "../components/introduction";
import MenuIconBar from "@/components/menubar";
import Content from "@/components/content";
import React from "react";
import Languges from "@/components/languages";
import Companies from "@/components/companies";
import Footer from "@/components/footer";

const HomePage: React.FC = () => {
  return (
    <div className="w-[100%] relative">
      <div className="top-[1%] l-[5%] w-[100%]">
        <MenuIconBar />
      </div>
      <div className="overflow-x-hidden">
        <Introduction />
        <Content />
        <Languges />
        <Companies />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
