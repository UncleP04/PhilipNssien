import React from "react";
import Image from "next/image";
import { url } from "inspector";

interface ImageList {
  url: string;
  header: string;
  text: string;
}

const WorkArray: ImageList[] = [
  {
    url: "/../public/Images/Pro1.png",
    header: "Wecruitme Website",
    text: "A global Human Resource and Job agency",
  },
  {
    url: "/../public/Images/Pro2.png",
    header: "officialURepobliuc",
    text: "A web3 Marketing agency",
  },
  {
    url: "/../public/Images/Pro3.png",
    header: "BartCash",
    text: "Online trade nd bater platform",
  },
  {
    url: "/../public/Images/Pro4.png",
    header: "La-Boutique",
    text: "Your renowned e-commerce site",
  },
  {
    url: "/../public/Images/Pro5.png",
    header: "airbnb",
    text: "A demo design or Airbnb",
  },
  {
    url: "/../public/Images/Pro6.png",
    header: "CreedNft Website",
    text: "Clean and simple NFT design website",
  },
];

const WorkList = () => {
  return (
    <div>
      <section className="grid grid-cols-1 justify-center align-middle gap-10 md:px-[8%] px-4 bg-white py-[50px]">
        {WorkArray.map((work, index) => (
          <div
            key={index}
            className="w-[100%] md:px-[10%] flex flex-col justify-start align-middle my-[20px]"
          >
            <div className="w-full h-[350px] border relative overflow-hidden">
              <Image
                src={work.url}
                alt="websitedesings.png"
                width={300}
                height={200}
                className="w-[100%] h-[100%] grayscale hover:grayscale-0 transition duration-300 hover:scale-150"
              />
            </div>
            <div className="mt-6">
              <h1 className="text-temp text-[2em] capitalize">{work.header}</h1>
              <h3 className="text-[1.2em]">{work.text}</h3>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default WorkList;
