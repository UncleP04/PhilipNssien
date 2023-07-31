'use client'
import React, {useEffect} from "react";
import Image from "next/image";
import Screen from "../../public/Images/screen.jpg";
import 'aos/dist/aos.css';
import AOS from 'aos';

const AboutBody = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: 'ease-in-out',
    })
  });
  return (
    <div className="bg-white">
      <div className="p-4">
        <h1 className="text-black text-[3em] font-bold" data-aos="zoom-in-up">
          These are what Im <br />
          great at.
        </h1>
      </div>
      <section className="flex flex-row justify-between align-middle py-10">
        <div className="w-[50%] py-[15%] hidden md:block" data-aos="zoom-in-up">
          <div className="w-[400px] h-[100%]">
            <Image
              src={Screen}
              alt="screen.jpg"
              width={700}
              height={300}
              className="w-[100%] h-[100%] grayscale hover:grayscale-0 duration-1000"
            />
          </div>
        </div>
        <div className="md:w-[50%] w-[100%]">
          <ul className="md:w-[400px] flex flex-col gap-y-10 p-4">
            <li data-aos="zoom-in">
              <h3 className="font-semibold text-temp text-[1.7em] font-header">
                Front-End Development
              </h3>
              <p className="text-[20px] mt-2 leading-10">
                Proficient in HTML5, CSS3, and JavaScript (ES6+), with hands-on
                experience in building responsive and visually appealing user
                interfaces. Applied these skills to create engaging web
                applications and ensure optimal user experience
              </p>
            </li>
            <li data-aos="zoom-in-up">
              <h3 className="font-semibold text-temp text-[1.7em] font-header">
                Back-End Development
              </h3>
              <p className="text-[20px] mt-2 leading-10">
                Experienced in working with Node.js and Express.js to build
                robust and scalable server-side applications. Leveraged these
                technologies to handle server-side logic, API integrations, and
                database operations, ensuring seamless data flow and efficient
                application performance.
              </p>
            </li>
            <li data-aos="zoom-in">
              <h3 className="font-semibold text-temp text-[1.7em] font-header">
                Databases
              </h3>
              <p className="text-[20px] mt-2 leading-10">
                Proficient in working with various databases, including
                Firebase, and MongoDB. Utilized database management skills to
                design and implement efficient data models, execute complex
                queries, and ensure data integrity.
              </p>
            </li>
            <li data-aos="zoom-in-up">
              <h3 className="font-semibold text-temp text-[1.7em] font-header">
                TypeScript
              </h3>
              <p className="text-[20px] mt-2 leading-10">
                Armed with an in-depth understanding of TypeScript. Leveraging
                TypeScripts powerful features, static typing to JavaScript,
                allowing developers to declare types for variables, enabling the
                creation of reusable components or functions that can work with
                different types
              </p>
            </li>
          </ul>
        </div>
      </section>
      <div className="p-4">
        <h1 className="text-temp text-[3em] font-bold" data-aos="zoom-in-up">
          My other Tech <br />
          skills.
        </h1>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-evenly align-middle gap-10 w-[100%] p-4 lg:px-[5%] py-10">
        <div className="rounded-lg border-2 border-light hover:border-lighter hover:bg-darker p-4" data-aos="zoom-in">
          <h3 className="font-semibold text-temp text-[1.7em] font-header">
            Strong Programming Skills
          </h3>
          <p className="text-[18px] mt-2 leading-10">
            Proficiency in one or more programming tools like JavaScript,
            TypeScript, HTML5,CSS3, Tailwindcss, bootstrap, React.js,
            Next.js,Node.js,Express,etc.
          </p>
        </div>
        <div className="rounded-lg border-2 border-light hover:border-lighter hover:bg-darker p-4" data-aos="zoom-out">
          <h3 className="font-semibold text-temp text-[1.7em] font-header">
            Problem-Solving and Analytical Thinking
          </h3>
          <p className="text-[18px] mt-2 leading-10">
            strong problem-solving skills to identify and resolve issues
            efficiently, as well as the ability to analyze and understand
            complex systems.
          </p>
        </div>
        <div className="rounded-lg border-2 border-light hover:border-lighter hover:bg-darker p-4" data-aos="zoom-in-up">
          <h3 className="font-semibold text-temp text-[1.7em] font-header">
            APIs and RESTful Services
          </h3>
          <p className="text-[18px] mt-2 leading-10">
            Understanding of RESTful API design principles and experience in
            integrating APIs into applications.F
          </p>
        </div>
        <div className="rounded-lg border-2 border-light hover:border-lighter hover:bg-darker p-4" data-aos="zoom-in-up">
          <h3 className="font-semibold text-temp text-[1.7em] font-header">
            Security Awerness
          </h3>
          <p className="text-[18px] mt-2 leading-10">
            Understanding of common web application security risks and best
            practices for secure coding.
          </p>
        </div>
        <div className="rounded-lg border-2 border-light hover:border-lighter hover:bg-darker p-4" data-aos="zoom-in">
          <h3 className="font-semibold text-temp text-[1.7em] font-header">
            Database Management
          </h3>
          <p className="text-[18px] mt-2 leading-10">
            Knowledge of responsive web design principles to create applications
            that work well on various devices and screen sizes.
          </p>
        </div>
        <div className="rounded-lg border-2 border-light hover:border-lighter hover:bg-darker p-4" data-aos="zoom-out">
          <h3 className="font-semibold text-temp text-[1.7em] font-header">
            Responsive Design
          </h3>
          <p className="text-[18px] mt-2 leading-10">
            Familiarity with relational databases (MySQL) and NoSQL databases
            (MongoDB, Firebase)
          </p>
        </div>
        <div className="rounded-lg border-2 border-light hover:border-lighter hover:bg-darker p-4" data-aos="zoom-in-up">
          <h3 className="font-semibold text-temp text-[1.7em] font-header">
            Collaboration
          </h3>
          <p className="text-[18px] mt-2 leading-10">
            The ability to work effectively with others, including team members,
            stakeholders, and clients, is crucial for successful project
            outcomes. Collaboration fosters creativity, diversity of ideas, and
            collective problem-solving.
          </p>
        </div>
        <div className="rounded-lg border-2 border-light hover:border-lighter hover:bg-darker p-4" data-aos="zoom-in-up">
          <h3 className="font-semibold text-temp text-[1.7em] font-header">
            Time Management
          </h3>
          <p className="text-[18px] mt-2 leading-10">
            Being able to prioritize tasks, set deadlines, and manage time
            efficiently is vital in meeting project milestones and delivering
            quality work on schedule.
          </p>
        </div>
        <div className="rounded-lg border-2 border-light hover:border-lighter hover:bg-darker p-4" data-aos="zoom-out-up">
          <h3 className="font-semibold text-temp text-[1.7em] font-header">
            Communication
          </h3>
          <p className="text-[18px] mt-2 leading-10">
            Effective communication skills, both written and verbal, are
            essential for expressing ideas, requirements, and progress updates
            clearly to team members and stakeholders.
          </p>
        </div>
        <div className="rounded-lg border-2 border-light hover:border-lighter hover:bg-darker p-4" data-aos="zoom-in">
          <h3 className="font-semibold text-temp text-[1.7em] font-header">
            Organization
          </h3>
          <p className="text-[18px] mt-2 leading-10">
            Keeping projects, code, and documentation well-organized helps
            maintain clarity and efficiency. Being organized allows developers
            to locate resources quickly and manage complex projects effectively.
          </p>
        </div>
        <div className="rounded-lg border-2 border-light hover:border-lighter hover:bg-darker p-4" data-aos="zoom-out-up">
          <h3 className="font-semibold text-temp text-[1.7em] font-header">
            Teamwork
          </h3>
          <p className="text-[18px] mt-2 leading-10">
            Working well within a team environment involves being respectful,
            supportive, and open to othersopinions and ideas. Good teamwork
            results in increased productivity and morale.
          </p>
        </div>
        <div className="rounded-lg border-2 border-light hover:border-lighter hover:bg-darker p-4" data-aos="zoom-out-up">
          <h3 className="font-semibold text-temp text-[1.7em] font-header">
            Orderliness
          </h3>
          <p className="text-[18px] mt-2 leading-10">
            Similar to organization, maintaining orderliness in code,
            documentation, and project structure enhances readability and ease
            of maintenance.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutBody;
