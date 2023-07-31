'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import Rectangle from "../../public/Images/reg.png";
import "../styles/menu.css";
import 'aos/dist/aos.css';
import AOS from 'aos';

const Introduction: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    })
  });

  return (
    <div className="w-fit h-full overflow-hidden flex flex-col justify-center align-middle md:pl-[15%]">
      <div className="talentBox" data-aos="zoom-in">
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
