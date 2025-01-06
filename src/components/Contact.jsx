import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import ContactInputs from "./ContactInputs";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  function handleContact(e) {
    e.preventDefault();
    console.log(name, email, message);
  }
  return (
    <section id="contact" className="bg-gray-950 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-300 mb-12">
          Contact Me
        </h2>
        <div className="grid lg:grid-cols-2 gap-10">
          {/* contact info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-300">
                Let's Talk
              </h1>
              <p className="text-gray-300 my-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
                ab. Iusto beatae doloribus ut sunt voluptatem fuga mollitia
                dicta illum!
              </p>
              <h3 className="text-2xl font-semibold text-gray-300">Email</h3>
              <p className="text-gray-600 mt-2">
                <a href="#" className="text-blue-500 hover:underline">
                  kprateek870@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-300">Phone</h3>
              <p className="text-gray-600 mt-2">
                <a href="#" className="text-blue-500 hover:underline">
                  +91 78270 36933
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-300">
                Follow Me
              </h3>
              <div className="flex gap-3 text-2xl transition-all mt-5">
                <FaFacebook className="text-blue-400" />
                <FaInstagram className="text-blue-400" />
                <FaLinkedin className="text-blue-400" />
                <FaSquareXTwitter className="text-blue-400" />
              </div>
            </div>
          </div>
          {/* contact form */}
          <div className="bg-gray-900 rounded-lg shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500 p-8">
            <h3 className="text-3xl font-semibold text-gray-300 mb-6">
              Get in Touch
            </h3>
            <form action="" className="space-y-6" onSubmit={handleContact}>
              <ContactInputs
                id="name"
                lableFor="name"
                lable="Name"
                type="text"
                placeholder="Your Name"
                value={name}
                setValue={setName}
              />

              <ContactInputs
                id="email"
                lableFor="email"
                lable="Email"
                type="email"
                placeholder="Your Email Address"
                value={email}
                setValue={setEmail}
              />
              <ContactInputs
                id="message"
                lableFor="message"
                lable="Message"
                placeholder="Your Message"
                rows={5}
                value={message}
                setValue={setMessage}
              />

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
