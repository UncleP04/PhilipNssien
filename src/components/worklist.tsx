'use client'
import React, {useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import 'aos/dist/aos.css';
import AOS from 'aos';

interface ImageList {
  url: string;
  website: string;
  header: string;
  text: string;
}

const WorkArray: ImageList[] = [
  {
    url: "/../public/Images/Pro1.png",
    website: 'https://wecruitme.com/',
    header: "Wecruitme Website",
    text: "A global Human Resource and Job agency",
  },
  {
    url: "/../public/Images/Pro2.png",
    website: 'https://officialrepublic.onrender.com/',
    header: "officialURepobliuc",
    text: "A web3 Marketing agency",
  },
  {
    url: "/../public/Images/Pro3.png",
    website: 'https://bartcash.netlify.app/',
    header: "BartCash",
    text: "Online trade & bater platform",
  },
  {
    url: "/../public/Images/Pro4.png",
    website: 'https://la-boutique.vercel.app/',
    header: "La-Boutique",
    text: "Your renowned e-commerce site",
  },
  {
    url: "/../public/Images/Pro5.png",
    website: 'https://airbnbs.vercel.app/',
    header: "airbnb",
    text: "A demo design of Airbnb",
  },
  {
    url: "/../public/Images/Pro6.png",
    website: 'https://creednft.vercel.app/',
    header: "CreedNft Website",
    text: "Clean and simple NFT design website",
  },
];

const WorkList = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: 'ease-in-out',
    })
  });
  return (
    <div>
      <section className="grid grid-cols-1 justify-center align-middle gap-10 md:px-[8%] px-4 bg-white py-[50px]">
        {WorkArray.map((work, index) => (
          <div
            key={index}
            className="w-[100%] md:px-[10%] flex flex-col justify-start align-middle my-[20px]"
          >
            <div className="w-full h-[350px] border relative overflow-hidden" data-aos="zoom-in-up">
              <Image
                src={work.url}
                alt="websitedesings.png"
                width={700}
                height={200}
                className="w-[100%] h-[100%] object-cover transition duration-300 hover:scale-150"
              />
            </div>
            <div className="mt-6" data-aos="zoom-in-up">
              <Link href={work.website} className="text-temp text-[2em] capitalize font-header">{work.header}</Link>
              <h3 className="text-[1.2em]">{work.text}</h3>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default WorkList;
