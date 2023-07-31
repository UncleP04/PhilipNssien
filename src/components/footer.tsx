'use client'
import React, {useEffect} from "react";
import Link from "next/link";
import 'aos/dist/aos.css';
import AOS from 'aos';
import "../styles/menu.css";

const Footer: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: 'ease-in-out',
    })
  });
  return (
    <div className="w-[100%] h-auto bg-black p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-start align-middle md:p-[8%] p-4">
        <div className="my-[40px] md:my-auto" data-aos="zoom-in">
          <h1 className="text-[2em] text-white">
            lets connect an <br /> build together.
          </h1>
          <button>
            <Link href="/about" className="footer font-header">
              More About Me
            </Link>
          </button>
        </div>
        <div className="my-[40px] md:my-auto">
          <div className="">
            <h1 className="text-[2em] text-white" data-aos="zoom-in">
              <span className="text-primary">Need me?</span> You can fine me in
              any of these <span className="text-temp">medias</span>.
            </h1>
            <ul data-aos="zoom-out-up">
              <li className="my-4">
                <Link href="https://www.linkedin.com/in/philipnssien/" className="text-white hover:text-primary">
                  LinkedIn
                </Link>
              </li>
              <li className="my-4">
                <Link href="https://twitter.com/Nssienphilip" className="text-white hover:text-primary">
                  Twitter
                </Link>
              </li>
              <li className="my-4">
                <Link href="https://github.com/UncleP04" className="text-white hover:text-primary">
                  Github
                </Link>
              </li>
              <li className="my-4">
                <Link href="https://www.youtube.com/channel/UCpgX6btxQ5GWMVxQhaa9KYA" className="text-white hover:text-primary">
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
