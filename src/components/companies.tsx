'use client'
import React, {useEffect} from "react";
import Link from "next/link";
import "../styles/menu.css";
import One from '../../public/Images/cash.png'
import Two from '../../public/Images/jo.png'
import Image from "next/image";
import 'aos/dist/aos.css';
import AOS from 'aos';

const Companies: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: 'ease-in-out',
    })
  });
  return (
    <div className="w-[100%] h-auto bg-white p-2">
      <div className="flex flex-col justify-start align-middle md:p-[8%] p-4">
        <div className="" data-aos="zoom-in-up">
          <h1 className="text-[2em]">
            Companies, Communities and <br /> Groups I have worked with.
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-center align-middle gap-[5px] mt-[5%]">
            <Image 
                src={One}
                alt="industried.png"
                width={300}
                height={200}
                className="w-[80px] h-[100px] self-center"
                data-aos="zoom-in"
            />
             <Image 
                src={Two}
                alt="industried.png"
                width={300}
                height={200}
                className="w-[50px] h-[80px] self-center"
                data-aos="zoom-in-up"
            />
             <Image 
                src={One}
                alt="industried.png"
                width={300}
                height={200}
                className="w-[80px] h-[100px] self-center"
                data-aos="zoom-out"
            />
             <Image 
                src={Two}
                alt="industried.png"
                width={300}
                height={200}
                className="w-[50px] h-[80px] self-center"
                data-aos="zoom-out-up"
            />
        </div>
      </div>
    </div>
  );
};

export default Companies;
