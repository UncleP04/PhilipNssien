"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import "aos/dist/aos.css";
import AOS from "aos";
import emailjs from "emailjs-com";

interface FormData {
  tool: string;
}

interface FormDataTwo {
  time: string;
}

const ContactComponent: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: "ease-in-out",
    });
  });
  const [formData, setFormData] = useState<FormData>({
    tool: "",
  });

  const [formDataTwo, setFormDataTwo] = useState<FormDataTwo>({
    time: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleInputChangeTwo = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormDataTwo({
      ...formDataTwo,
      [name]: value,
    });
  };

  const form = useRef<HTMLFormElement>(null);

  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const SERVICE_ID = process.env.SERVICE_ID;
    const TEMPLAE_ID = process.env.TEMPLAE_ID;
    const USER_ID = process.env.USER_ID;
    event.preventDefault();
    if (form.current) {
      // Collect form data
      const formData = new FormData(form.current);
      const formDataObject = Object.fromEntries(formData.entries());

      // Prepare email parameters
      const serviceID = "service_xb81q0h"; // Replace with your actual service ID
      const templateID = "template_ej91shi"; // Replace with your actual template ID
      const publicKey = "7WPbRbAyPjso50nSN"; // Replace with your actual user ID
      const recipientEmail = "philipnssien@gmail.com";

      // Prepare the email content
      const emailParams = {
        from_name: formDataObject.name,
        from_email: formDataObject.email,
        message: formDataObject.message,
        tool: formDataObject.tool,
        time: formDataObject.time,
        to_email: recipientEmail,
      };
      // Send the email
      emailjs.send(serviceID, templateID, emailParams, publicKey).then(
        (result) => {
          alert("Message Sent Successfully");
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };

  return (
    <div>
      <section className="w-[100%] bg-black flex flex-col md:flex-row justify-center align-middle md:px-[1%] py-8 p-4">
        <div className="mb-10 md:mb-0">
          <div className="md:w-[50%]" data-aos="zoom-in-up">
            <h1 className="text-white text-[3em] font-bold">
              Drop a mail, Lets build together
            </h1>
            <h3 className=" text-primary px-8 py-1 border-4 border-l-primary border-t-0 border-b-0 border-r-0 tracking-[4px] my-[10px]">
              Contact Me.
            </h3>
            <p className="text-white text-[20px] my-7">
              Ready to kickstart your project? <br /> You have two convenient
              options to get started. <br /> Simply fill out the form, and Ill
              be in touch promptly, or mail out.
            </p>
            <p className="py-2 px-10 text-white border-2 border-primary">
              philipnssien@gmail.com
            </p>
          </div>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            ref={form}
            className="w-[100%] flex flex-col justify-start align-middle gap-x-10"
          >
            <div className="w-[100%] md:w-[400px] py-4" data-aos="zoom-in">
              <label htmlFor="name" className="text-white font-header pb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                pattern="[A-Za-z ]+"
                title="Please enter a valid name (letters and spaces only)"
                id="name"
                placeholder="Enter Your Name"
                className="w-[100%] p-2 rounded-md focus:outline-none text-black"
                required
              />
            </div>
            <div className="w-[100%] md:w-[400px] py-4" data-aos="zoom-in-up">
              <label htmlFor="email" className="text-white font-header pb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className="w-[100%] p-2 rounded-md focus:outline-none text-black"
                required
              />
            </div>
            <div className="w-[100%] md:w-[400px] py-4" data-aos="zoom-out">
              <label htmlFor="tool" className="text-white font-header pb-2">
                What can I do for you?
              </label>
              <select
                id="tool"
                name="tool"
                value={formData.tool}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg focus:outline-none"
                required
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="option1">FrontEnd Development</option>
                <option value="option2">BackEnd Development</option>
                <option value="option3">FullStack Development</option>
              </select>
            </div>
            <div data-aos="zoom-out-up">
              <label htmlFor="time" className="text-white font-header pb-2">
                Any TimeFrame?
              </label>
              <select
                id="time"
                name="time"
                value={formDataTwo.time}
                onChange={handleInputChangeTwo}
                className="w-full p-2 border rounded-lg focus:outline-none"
                required
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
            <div className="w-[100%] md:w-[400px] py-4" data-aos="zoom-in-up">
              <label htmlFor="text" className="text-white font-header pb-2">
                Love to hear more!
              </label>
              <textarea
                name="message"
                id="text"
                placeholder="Message here"
                className="w-[100%] focus:outline-none p-2 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="py-2 px-10 text-white border-2 border-temp hover:bg-temp w-[150px]"
              data-aos="zoom-in-up"
            >
              <Link href="/contact">Submit</Link>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactComponent;
