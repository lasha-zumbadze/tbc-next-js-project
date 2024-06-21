"use client";

import Image from "next/image";
import { useState } from "react";
import contactFormImg1 from "../public/images1.jpg";
import contactFormImg2 from "../public/images2.jpg";
import HoverButton from "./HoverButton";
import Heading from "./Heading";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Contact Form Submission from ${name}`;
    const body = `Name: ${name} Email: ${email} Comment: ${comment}`;
    const mailtoLink = `mailto:lasha.zumbadze@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    setName("");
    setEmail("");
    setComment("");
  };

  return (
    <div className="bg-contactForm bg-cover bg-center grid md:grid-cols-2 justify-items-center py-28">
      <form className="grid justify-items-center" onSubmit={handleSubmit}>
        <div className="relative -top-10 w-4/5">
          <Heading minHeight={8} gap={8}>
            <h2 className="text-textGolden text-6xl tracking-widest">Form</h2>
          </Heading>
          <p className="text-white text-3xl text-center mt-8 leading-snug">
            Get in touch with us via email. Just fill the fields below to
            contact us.
          </p>
        </div>

        <div className="flex flex-col gap-12 justify-center items-center mt-8">
          <input
            type="text"
            placeholder="Your name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-[30rem] md:w-[50rem] h-24 px-8 border-none outline outline-[1px] outline-[#c8a97e] bg-[#c2a49500] text-white text-3xl placeholder:text-textGolden"
          />
          <input
            type="email"
            placeholder="Your email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-[30rem] md:w-[50rem] h-24 px-8 border-none outline outline-[1px] outline-[#c8a97e] bg-[#c2a49500] text-white text-3xl placeholder:text-textGolden"
          />
          <input
            type="text"
            placeholder="Your comment *"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            className="w-[30rem] md:w-[50rem] h-24 px-8 border-none outline outline-[1px] outline-[#c8a97e] bg-[#c2a49500] text-white text-3xl placeholder:text-textGolden"
          />
          <button
            type="submit"
            className="hover:text-white text-textGolden transition-all"
          >
            <HoverButton width={96}>Send Message</HoverButton>
          </button>
        </div>
      </form>
      <div className="relative -top-10 hidden md:block">
        <Image
          src={contactFormImg2}
          className="absolute top-28 -left-36"
          width={420}
          height={420}
        />
        <Image src={contactFormImg1} width={420} height={420} />
      </div>
    </div>
  );
}

export default ContactForm;
