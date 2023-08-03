"use client";
import Link from "next/link";
import React, { useState } from "react";
import '../styles/menu.css'

const MenuIconBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="flex w-[100%] bg-transparent justify-between align-middle py-[3%] px-[6%] relative">
        <Link href='/'>
        <h1 className="text-white font-semibold text-[20px] font-header">PN.</h1>
        </Link>
        <button
        type="button"
        onClick={toggleMenu}
        className="flex flex-col justify-between align-middle w-20 z-50 fixed top-[5%] right-[5%]"
      >
        {/* Conditional rendering based on the menu state */}
        {isOpen ? (
          // "X" icon
          <>
            <div className="w-8 h-[5px] bg-white self-end m-1 border border-black transform rotate-45 translate-x-1 absolute"></div>
            <div className="w-8 h-[5px] bg-white self-end m-1 border border-black transform -rotate-45 translate-x-1 absolute"></div>
          </>
        ) : (
          // Burger icon
          <>
            <div className="w-7 h-[5px] hover:mb-2 bg-white self-end m-1 border border-black"></div>
            <div className="w-4 h-[5px] bg-white self-end m-1 border border-black"></div>
            <div className="w-7 h-[5px] hover:mt-2 bg-white self-end m-1 border border-black"></div>
          </>
        )}
      </button>
        <div className={`${isOpen ? 'h-[110vh] top-0' : 'h-0 opacity-0 top-[-100%]'} fixed flex justify-center items-center left-0 list-none bg-primary navbar z-10`}>
            <div className="w-[100%] md:flex block md:flex-row items-center justify-center">
                <li className={`${isOpen ? 'scale-100' : 'scale-0'} w-[50%] list-none flex flex-col justify-center align-middle gap-[50px] font-header`}>
                    <Link href='/' className={`${isOpen ? 'scale-100 duration-500' : 'scale-0'} text-[2em] font-semibold text-black text-center self-center hover:border-b-4 border-b-black`}>Home</Link>
                    <Link href='/projects' className={`${isOpen ? 'scale-100 duration-700' : 'scale-0'} text-[2em] font-semibold text-black text-center self-center hover:border-b-4 border-b-black`}>ProjectS</Link>
                    <Link href='/about' className={`${isOpen ? 'scale-100 duration-700' : 'scale-0'} text-[2em] font-semibold text-black text-center self-center hover:border-b-4 border-b-black`}>About</Link>
                    <Link href='/contact' className={`${isOpen ? 'scale-100 duration-1000' : 'scale-0'} text-[2em] font-semibold text-black text-center self-center hover:border-b-4 border-b-black`}>Contacts</Link>
                </li>
                <div className={`${isOpen ? 'scale-100 duration-500' : 'scale-0'} w-[50%] flex-col justify-center align-middle hidden md:flex`}>
                    <h1 className="text-[2em] font-bold font-header">Lets find and build a solution <br /> together!</h1>
                    <p className="my-4 text-[23px]">
                        Connect with me an build. <br />
                        Need a project, website or any, Dm!
                    </p>
                    <p className="text-[22px]">philipnssien@gmail.com</p>
                </div>
            </div>
        </div>
      </nav>
      
    </div>
  );
};

export default MenuIconBar;
