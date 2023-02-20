import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  // const navigate = useNavigate();

  const notify = () => toast("Thank you for your message, we will answer you as soon as possible!");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pviipdm",
        "template_goqdrqi",
        form.current,
        "nRh_-82QXLChx8Lnr"
      )
      .then(
        (result) => {
          console.log(result.text);
          notify();
          // navigate("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="font-poppins  p-10 flex flex-col bg-gray-900 text-white">
      <h2 className="bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
        Contact us !
      </h2>
      <p className="m-4 p-4 mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
        You have a question ? A suggestion ? A component to submit to us so that
        it appears on our site? Contact us here!
      </p>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col p-4 m-4">
        <label className="flex flex-col mb-4 mt-4">
          Name
          <input
            type="text"
            name="user_name"
            className="shadow-md rounded-md p-2 text-black w-96"
            placeholder="your name"
          />
        </label>
        <label className="flex flex-col mb-4 mt-4 ">
          Email
          <input
            type="email"
            name="user_email"
            placeholder="your email"
            className="shadow-md rounded-md p-2 text-black w-96"
          />
        </label>
        <label className="flex flex-col mb-4 mt-4">
          Message
          <textarea
            name="message"
            cols={40}
            rows={10}
            placeholder="your message"
            className="shadow-md rounded-md p-2 text-black w-96"
          />
        </label>
        <button
          type="submit"
          value="Send"
          onClick={sendEmail}
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Send
        </button>
        <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"/>
      </form>
    </div>
  );
};

export default Contact;
