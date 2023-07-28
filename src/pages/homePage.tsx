import Introduction from "@/component/introduction";
import MenuIconBar from "@/component/menubar";
import Content from "@/component/content";
import React from "react";
import Languges from "@/component/languages";
import Companies from "@/component/companies";
import Footer from "@/component/footer";

const HomePage: React.FC = () => {
  return (
    <div className="w-[100%] h-screen relative">
      <div className="top-[1%] l-[5%] w-[100%]">
        <MenuIconBar />
      </div>
      <div>
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
