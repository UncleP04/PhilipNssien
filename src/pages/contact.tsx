import React from "react";
import ContactComponent from "@/components/contactcomp";
import FooterContact from "@/components/contactfooter";
import MenuIconBar from "@/components/menubar";

const HomePage: React.FC = () => {
  return (
    <div className="w-[100%] relative">
      <div className="top-[1%] l-[5%] w-[100%]">
        <MenuIconBar />
      </div>
        <ContactComponent />
        <FooterContact />
    </div>
  );
};

export default HomePage;
