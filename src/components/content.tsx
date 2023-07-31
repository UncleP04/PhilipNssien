'use client'
import React, { useEffect } from "react";
import Link from "next/link";
import "../styles/menu.css";
import 'aos/dist/aos.css';
import AOS from 'aos';

const Content: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: 'ease-in-out',
    })
  });
  return (
    <div>
      <div className="bg-primary py-8 md:py-[4%] md:px-[8%] p-4 flex flex-col justify-center align-middle w-fit md:h-[50vh] h-[100vh]">
        <div>
          <h1 className="text-[2em] font-header font-bold leading-20"  data-aos="zoom-in-up">
            Experienced Full Stack Developer with a strong track record in
            high-quality web applications, skilled in user-friendly interface
            development.
          </h1> 
          <button className="mt-4"  data-aos="zoom-in-up">
            <Link href="/about" className="originalbutton font-header">
              More Me
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
