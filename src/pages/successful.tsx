import React from "react";
import Image from "next/image";
import SuccessImage from "../../public/Images/success.png";
import Checked from "../../public/Images/check.png";
import Link from "next/link";

const Success: React.FC = () => {
  return (
    <div>
      <section className="w-[100%] flex flex-col md:flex-row justify-center align-middle items-center h-[100vh] bg-white">
        <div className="w-[100%] md:w-[50%] flex justify-center align-middle items-center flex-col p-4 md:p-0">
          <div className="w-[100%] md:w-[50%]">
            <Image
              src={SuccessImage}
              alt="success.png"
              width={700}
              height={300}
              className="w-[100%] h-[100%]"
            />
          </div>
          <div className="text-center">
            <span className="text-green-800 font-semibold font-header text-[2em] md:text-[3em] flex justify-center align-middle">
                <Image 
                    src={Checked}
                    alt="check.png"
                    width={700}
                    height={300}
                    className="w-[70px] h-[70px]"
                />
              Sent Successfully
            </span>
            <Link
              href="/"
              className="text-blue-500 text-[20px] hover:text-blue-300"
            >
              Return to Home.
            </Link>
          </div>
        </div>
        <div className="w-[100%] md:w-[50%] h-[100%] code hidden md:block"></div>
      </section>
    </div>
  );
};

export default Success;
