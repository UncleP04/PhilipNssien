'use client'
import React, {useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import 'aos/dist/aos.css';
import AOS from 'aos';
import "../styles/menu.css";
import HoverImage from "./imageHover";

const AboutMeHeader: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: 'ease-in-out',
    })
  });
  return (
    <div>
      <section className="px-4 md:px-[8%] grid justify-center align-middle gap-10 grid-cols-1 md:grid-cols-2 mt-[10%] md:mt-0 py-[5%]">
        <div className="" data-aos="zoom-in-up">
          <h1 className="text-white text-[3em] font-bold">
            A Developer, <br />a gamer in Peace.
          </h1>
          <h3 className=" text-primary px-8 py-1 border-4 border-l-primary border-t-0 border-b-0 border-r-0 tracking-[4px] my-[10px]">
            About Me
          </h3>
          <p className="text-white text-[20px] my-7">
            My name is <span className="text-temp font-bold uppercase font-header">Philip Nssien</span> <br />
            Experienced Full Stack Developer <br /> with a strong track record
            in <br /> high-quality web applications
          </p>
          <Link
            href="/contact"
            className="py-2 px-10 text-white border-2 border-temp hover:bg-temp cursor-pointer"
          >
            Lets Chat
          </Link>
        </div>
        <div className="md:h-[400px] md:w-[500px] w-[100%]" data-aos="zoom-out-up">
            <HoverImage src1="/Images/games.jpg" src2="/Images/dev.jpg" alt="source.jpg" />
        </div>
      </section>
    </div>
  );
};

export default AboutMeHeader;
