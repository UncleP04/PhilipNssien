import React from "react";
import Footer from "@/components/footer";
import MenuIconBar from "@/components/menubar";
import AboutMeHeader from "@/components/aboutmeheader";
import AboutBody from "@/components/aboutbody";

const About: React.FC = () => {
  return (
    <div className="w-[100%] h-auto relative">
      <div className="top-[1%] l-[5%] w-[100%]">
        <MenuIconBar />
      </div>
      <div>
        <AboutMeHeader />
        <AboutBody />
        <Footer />
      </div>
    </div>
  );
};

export default About;
