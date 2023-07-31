import React, { useState } from "react";
import Link from "next/link";

interface FormData {
  dropdown: string;
}

const ContactComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    dropdown: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <section className="w-[100%] bg-black flex flex-col md:flex-row justify-center align-middle md:px-[1%] py-8 p-4">
        <div className="mb-10 md:mb-0">
          <div className="md:w-[50%]">
            <h1 className="text-white text-[3em] font-bold">
              Drop a mail, Let's build together
            </h1>
            <h3 className=" text-primary px-8 py-1 border-4 border-l-primary border-t-0 border-b-0 border-r-0 tracking-[4px] my-[10px]">
              Contact Me.
            </h3>
            <p className="text-white text-[20px] my-7">
              Ready to kickstart your project? <br /> You have two convenient
              options to get started. <br /> Simply fill out the form, and I'll
              be in touch <br />
              promptly, or mail out.
            </p>
            <Link
              href="/"
              className="py-2 px-10 text-white border-2 border-temp hover:bg-temp cursor-pointer"
            >
              philipnssien@gmail.com
            </Link>
          </div>
        </div>
        <div>
          <form action="" className="w-[100%] flex flex-col justify-start align-middle gap-x-10">
            <div className="w-[100%] md:w-[400px] py-4">
              <label htmlFor="name" className="text-white font-header pb-2">Name</label>
              <input type="text" id="name" placeholder="Enter Your Name" className="w-[100%] p-2 rounded-md focus:outline-none text-black" />
            </div>
            <div className="w-[100%] md:w-[400px] py-4">
              <label htmlFor="email" className="text-white font-header pb-2">Email</label>
              <input type="email" id="email" placeholder="Enter Your Email" className="w-[100%] p-2 rounded-md focus:outline-none text-black" />
            </div>
            <div className="w-[100%] md:w-[400px] py-4">
              <label htmlFor="dropdown" className="text-white font-header pb-2">
                What can I do for you?
              </label>
              <select
                id="dropdown"
                name="dropdown"
                value={formData.dropdown}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg focus:outline-none"
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="option1">FrontEnd Development</option>
                <option value="option2">BackEnd Development</option>
                <option value="option3">FullStack Development</option>
              </select>
            </div>
            <div>
              <label htmlFor="dropdown" className="text-white font-header pb-2">
                Any TimeFrame?
              </label>
              <select
                id="dropdown"
                name="dropdown"
                value={formData.dropdown}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg focus:outline-none"
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="option1">1 - 3 Weeks</option>
                <option value="option2">Less than a Month</option>
                <option value="option3">1 - 2 Month</option>
                <option value="option3">3 Month and more..</option>
              </select>
            </div>
            <div className="w-[100%] md:w-[400px] py-4">
              <label htmlFor="text" className="text-white font-header pb-2">Love to hear more!</label>
              <textarea name="text" id="text" placeholder="Message here" className="w-[100%] focus:outline-none p-2 rounded-md" />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactComponent;
