import React from "react";
import Link from "next/link";
import "../styles/menu.css";

const Footer: React.FC = () => {
  return (
    <div className="w-[100%] h-auto bg-black p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-start align-middle md:p-[8%] p-4">
        <div className="my-[40px] md:my-auto">
          <h1 className="text-[2em] text-white">
            lets connect an <br /> build together.
          </h1>
          <button className="self-start mt-10 footerbutton">
            <Link href="/" className="text-white">
              More About Me
            </Link>
          </button>
        </div>
        <div className="my-[40px] md:my-auto">
          <div className="">
            <h1 className="text-[2em] text-white">
              <span className="text-primary">Need me?</span> You can fine me in any of these <span className="text-temp">medias</span>.
            </h1>
            <ul>
                <li className="my-4"><Link href="" className="text-white hover:text-primary">LinkedIn</Link></li>
                <li className="my-4"><Link href="" className="text-white hover:text-primary">Twitter</Link></li>
                <li className="my-4"><Link href="" className="text-white hover:text-primary">Facebook</Link></li>
                <li className="my-4"><Link href="" className="text-white hover:text-primary">Youtube</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
