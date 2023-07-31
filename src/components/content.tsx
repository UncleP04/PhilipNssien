import React from "react";
import Link from "next/link";
import "../styles/menu.css";

const Content: React.FC = () => {
  return (
    <div>
      <div className="bg-primary py-8 md:py-[4%] md:px-[8%] p-4 flex flex-col justify-center align-middle w-fit md:h-[50vh] h-[100vh]">
        <div>
          <h1 className="text-[2em] font-header font-bold leading-20">
            Experienced Full Stack Developer with a strong track record in
            high-quality web applications, skilled in user-friendly interface
            development.
          </h1> 
          <button className="mt-4">
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
