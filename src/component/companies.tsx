import React from "react";
import Link from "next/link";
import "../styles/menu.css";
import One from '../../public/Images/cash.png'
import Two from '../../public/Images/jo.png'
import Three from '../../public/Images/Afric.jpeg'
import Four from '../../public/Images/Uncle.jpeg'
import Image from "next/image";

const Companies: React.FC = () => {
  return (
    <div className="w-[100%] h-auto bg-white p-2">
      <div className="flex flex-col justify-start align-middle md:p-[8%] p-4">
        <div className="">
          <h1 className="text-[2em]">
            Companies, Communities and <br /> Groups i've worked with.
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-center align-middle gap-[5px] mt-[5%]">
            <Image 
                src={One}
                alt="industried.png"
                width={300}
                height={200}
                className="w-[80px] h-[100px] self-center"
            />
             <Image 
                src={Two}
                alt="industried.png"
                width={300}
                height={200}
                className="w-[50px] h-[80px] self-center"
            />
             <Image 
                src={One}
                alt="industried.png"
                width={300}
                height={200}
                className="w-[80px] h-[100px] self-center"
            />
             <Image 
                src={Two}
                alt="industried.png"
                width={300}
                height={200}
                className="w-[50px] h-[80px] self-center"
            />
        </div>
      </div>
    </div>
  );
};

export default Companies;
