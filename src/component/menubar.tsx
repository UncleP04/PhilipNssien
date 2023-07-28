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
      <nav className="flex w-[100%] bg-transparent justify-between align-middle py-[3%] px-[6%]">
        <h1 className="text-white font-semibold text-[20px] font-header">P/'N/.</h1>
        <button
          type="button"
          onClick={toggleMenu}
          className="flex flex-col justify-between align-middle w-20 z-50 fixed top-[5%] right-[5%]"
        >
          <div className="w-7 h-[5px] hover:mb-2 bg-white self-end m-1 border border-black"></div>
          <div className="w-4 h-[5px] bg-white self-end m-1 border border-black"></div>
          <div className="w-7 h-[5px] hover:mt-2 bg-white self-end m-1 border border-black"></div>
        </button>
        <div className={`${isOpen ? 'h-[100vh] navbar' : 'h-0 navbar'} absolute w-[100%] left-0 -top-2 list-none bg-primary navbar`}>
            <div className="w-[100%] h-screen grid md:grid-cols-2 justify-center align-middle">
                <li className={`${isOpen ? 'scale-100' : 'scale-0'}list-none flex flex-col justify-center align-middle gap-[50px] font-header`}>
                    <Link href='' className={`${isOpen ? 'scale-100 duration-500' : 'scale-0'} text-[2em] font-semibold text-black text-center self-center hover:border-b-4 border-b-black`}>Home</Link>
                    <Link href='' className={`${isOpen ? 'scale-100 duration-700' : 'scale-0'} text-[2em] font-semibold text-black text-center self-center hover:border-b-4 border-b-black`}>About</Link>
                    <Link href='' className={`${isOpen ? 'scale-100 duration-700' : 'scale-0'} text-[2em] font-semibold text-black text-center self-center hover:border-b-4 border-b-black`}>Project</Link>
                    <Link href='' className={`${isOpen ? 'scale-100 duration-1000' : 'scale-0'} text-[2em] font-semibold text-black text-center self-center hover:border-b-4 border-b-black`}>Contacts</Link>
                </li>
                <div className={`${isOpen ? 'scale-100 duration-500' : 'scale-0'} h-[100%] w-[100%] flex-col justify-center align-middle hidden md:flex`}>
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
