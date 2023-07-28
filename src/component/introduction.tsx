import React from "react";
import Image from "next/image";
import Rectangle from "../../public/Images/reg.png";
import "../styles/menu.css";

const Introduction: React.FC = () => {
  return (
    <div className="w-fit h-full overflow-hidden flex flex-col justify-center align-middle md:pl-[15%]">
      <div className="talentBox">
        <h1>
          Versatility: defining <br />
          trait of
          <Image
            src={Rectangle}
            alt="Rectangle.png"
            width={300}
            height={200}
            className="image"
          />
           a successful developer
        </h1>
      </div>
    </div>
  );
};

export default Introduction;
