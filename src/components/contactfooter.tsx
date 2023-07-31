import React from "react";
import Link from "next/link";
import "../styles/menu.css";

const FooterContact: React.FC = () => {
  return (
    <div className="w-[100%] h-auto bg-temp p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-start align-middle md:p-[8%] p-4">
        <div className="my-[40px] md:my-auto">
          <h1 className="text-[2em] text-black">
            lets connect an <br /> build together.
          </h1>
          <button>
            <Link href="/" className="originalbutton mt-2">
              More About Me
            </Link>
          </button>
        </div>
        <div className="my-[40px] md:my-auto">
          <div className="">
            <h1 className="text-[2em] text-black">
              <span className="text-white">Need me?</span> You can fine me in
              any of these <span className="text-black">medias</span>.
            </h1>
            <ul>
              <li className="my-4">
                <Link href="https://www.linkedin.com/in/philipnssien/" className="text-black hover:text-white">
                  LinkedIn
                </Link>
              </li>
              <li className="my-4">
                <Link href="https://twitter.com/Nssienphilip" className="text-black hover:text-white">
                  Twitter
                </Link>
              </li>
              <li className="my-4">
                <Link href="https://github.com/UncleP04" className="text-black hover:text-white">
                  Github
                </Link>
              </li>
              <li className="my-4">
                <Link href="https://www.youtube.com/channel/UCpgX6btxQ5GWMVxQhaa9KYA" className="text-black hover:text-white">
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

export default FooterContact;
