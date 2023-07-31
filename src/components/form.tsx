import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { useRouter } from "next/router";

const ContactForm: React.FC = () => {
  useEffect(() => {
    // Replace 'YOUR_USER_ID' with your actual EmailJS user ID
    emailjs.init("7WPbRbAyPjso50nSN");
  }, []);

  const router = useRouter();
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    tool: "",
    time: "",
    message: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const serviceID = "service_xb81q0h";
    const templateID = "template_ej91shi";

    emailjs.sendForm(serviceID, templateID, event.currentTarget).then(
      () => {
        // Display the success popup
        setShowSuccess(true);
        // Reset the form
        if (event.currentTarget instanceof HTMLFormElement) {
          event.currentTarget.reset();
        }
        // Hide the success popup after 3 seconds (3000 ms)
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      },
      (error) => {
        alert(JSON.stringify(error));
      }
    );
  };

  useEffect(() => {
    if (showSuccess) {
      setTimeout(() => {
        router.push("/successful");
      }, 3000);
    }
  }, [showSuccess, router]);

  return (
    <section className="w-[100%] bg-black flex flex-col md:flex-row justify-center items-center relative align-middle md:px-[1%] py-8 p-4">
      {showSuccess && (
        <div className="success-popup text-white py-2 px-4 rounded-md fixed inset-0 top-5 flex items-center justify-center bg-green-700 w-[250px] text-center h-[50px] z-20 left-5">
          Email sent successfully.
        </div>
      )}
      <div className="mb-10 md:mb-0 p-4">
        <div className="md:w-[70%]" data-aos="zoom-in-up">
          <h1 className="text-white text-[3em] font-bold">
            Drop a mail, Lets build together
          </h1>
          <h3 className=" text-primary px-8 py-1 border-4 border-l-primary border-t-0 border-b-0 border-r-0 tracking-[4px] my-[10px]">
            Contact Me.
          </h3>
          <p className="text-white text-[20px] my-7">
            Ready to kickstart your project? <br /> You have two convenient
            options to get started. <br /> Simply fill out the form, and Ill be
            in touch promptly, or mail out.
          </p>
          <p className="py-2 px-10 text-white border-2 border-primary">
            philipnssien@gmail.com
          </p>
        </div>
      </div>
      <form
        id="form"
        onSubmit={handleSubmit}
        className="p-4 flex flex-col justify-start align-middle gap-x-10"
      >
        <div className="w-[100%] md:w-[400px] py-4">
          <label htmlFor="from_name" className="text-white font-header pb-2">
            Your Name
          </label>
          <input
            type="text"
            name="from_name"
            id="from_name"
            className="w-[100%] p-2 rounded-md focus:outline-none text-black"
            required
          />
        </div>
        <div className="w-[100%] md:w-[400px] py-4">
          <label htmlFor="from_email" className="text-white font-header pb-2">
            Your Email
          </label>
          <input
            type="email"
            name="from_email"
            id="from_email"
            className="w-[100%] p-2 rounded-md focus:outline-none text-black"
            required
          />
        </div>
        <div className="w-[100%] md:w-[400px] py-4">
          <label htmlFor="tool" className="text-white font-header pb-2">
            What aspect do you want?
          </label>
          <select
            id="tool"
            name="tool"
            className="w-[100%] p-2 rounded-md focus:outline-none text-black"
            onChange={handleInputChange}
            value={formData.tool}
            required
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="FrontEnd Development">FrontEnd Development</option>
            <option value="BackEnd Development">BackEnd Development</option>
            <option value="FullStack Development">FullStack Development</option>
          </select>
        </div>
        <div className="w-[100%] md:w-[400px] py-4">
          <label htmlFor="time" className="text-white font-header pb-2">
            Expected TimeFrame
          </label>
          <select
            id="time"
            name="time"
            className="w-[100%] p-2 rounded-md focus:outline-none text-black"
            onChange={handleInputChange}
            value={formData.time}
            required
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="1 - 3 Weeks">1 - 3 Weeks</option>
            <option value="Less than a Month">Less than a Month</option>
            <option value="1 - 2 Month">1 - 2 Month</option>
            <option value="3 Month and more..">3 Month and more..</option>
          </select>
        </div>
        <div className="w-[100%] md:w-[400px] py-4">
          <label htmlFor="message" className="text-white font-header pb-2">
            More Details || Message
          </label>
          <input
            type="text"
            name="message"
            id="message"
            className="w-[100%] p-2 rounded-md focus:outline-none text-black"
            required
          />
        </div>
        <button
          type="submit"
          id="button"
          value="Send Email"
          className="py-2 px-10 text-white border-2 border-temp hover:bg-temp w-[150px]"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
