import React from "react";
import Footer from "@/components/footer";
import MenuIconBar from "@/components/menubar";
import Myworks from "../components/myworks";
import WorkList from "../components/worklist";

const HomePage: React.FC = () => {
  return (
    <div className="w-[100%] h-screen relative">
      <div className="top-[1%] l-[5%] w-[100%]">
        <MenuIconBar />
      </div>
      <div>
        <Myworks />
        <WorkList />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
