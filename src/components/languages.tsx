'use client'
import React, {useEffect} from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import Link from "next/link";
import "../styles/menu.css";

const Languges: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: 'ease-in-out',
    })
  });
  return (
    <div className="w-[100%] h-auto bg-white p-2">
      <div className="flex flex-col justify-start align-middle md:p-[8%] p-4">
        <div className="" data-aos="zoom-in-up">
          <h1 className="text-[2em]">
            The languages and tools <br /> I use to work and develope:
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center align-middle gap-[20px] mt-[5%]">
          <label className="lg:w-[400px] w-[100%] my-[5%] md:my-auto" data-aos="zoom-in-up">
            <h2 className="font-header text-temp text-[1.7em] mb-6">
              Front-End Development
            </h2>
            <p className="text-[20px] leading-20">
              Proficient in HTML5, CSS3, and JavaScript (ES6+), with hands-on
              experience in building responsive and visually appealing user
              interfaces.
            </p>
          </label>
          <label className="lg:w-[400px] w-[100%] my-[5%] md:my-auto" data-aos="zoom-in">
            <h2 className="font-header text-temp text-[1.7em] mb-6">
              Back-End Development
            </h2>
            <p className="text-[20px] leading-20">
              Experienced in working with Node.js and Express.js to build robust
              and scalable server-side applications. Leveraged these
              technologies to handle server-side logic etc...
            </p>
          </label>
          <label className="lg:w-[400px] w-[100%] my-[5%] md:my-auto" data-aos="zoom-out">
            <h2 className="font-header text-temp text-[1.7em] mb-6">React</h2>
            <p className="text-[20px] leading-20">
              Skilled in utilizing the React framework to develop dynamic and
              interactive front-end components, enhancing the performance and
              functionality of web applications.
            </p>
          </label>
          <label className="lg:w-[400px] w-[100%] my-[5%] md:my-auto" data-aos="zoom-out-up">
            <h2 className="font-header text-temp text-[1.7em] mb-6">Next.js</h2>
            <p className="text-[20px] leading-20">
              Armed with an in-depth understanding of Next.js. Leveraging
              Next.js powerful features, such as server-side rendering, static
              site generation, and API routes etc...
            </p>
          </label>
          <label className="lg:w-[400px] w-[100%] my-[5%] md:my-auto" data-aos="zoom-in">
            <h2 className="font-header text-temp text-[1.7em] mb-6">
              Databases
            </h2>
            <p className="text-[20px] leading-20">
              Proficient in working with various databases, including Firebase,
              and MongoDB. Utilized database management skills to design and
              implement efficient data models.
            </p>
          </label>
          <label className="lg:w-[400px] w-[100%] my-[5%] md:my-auto" data-aos="zoom-out">
            <h2 className="font-header text-temp text-[1.7em] mb-6">
              Bootstrap, Sass, Tailwind CSS
            </h2>
            <p className="text-[20px] leading-20">
              Skilled in using popular front-end frameworks and tools like
              Bootstrap, Sass, and Tailwind CSS to expedite the development
              process, ensure consistent styling.
            </p>
          </label>
          <label className="lg:w-[400px] w-[100%] my-[5%] md:my-auto" data-aos="zoom-in-up">
            <h2 className="font-header text-temp text-[1.7em] mb-6">
              Heroku, AWS
            </h2>
            <p className="text-[20px] leading-20">
              Hands-on experience in deploying web applications to cloud
              platforms like Heroku and AWS. Applied knowledge of these
              platforms to configure server environments.
            </p>
          </label>
          <label className="lg:w-[400px] w-[100%] my-[25px] md:my-auto" data-aos="zoom-in-up">
            <h2 className="font-header text-temp text-[1.7em] mb-6">JQuery</h2>
            <p className="text-[20px] leading-20">
              Proficient in utilizing jQuery to simplify DOM manipulation and
              streamline JavaScript programming.
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Languges;
