import { useState } from "react";
import emailjs from "@emailjs/browser";

import linkedIn from "./../../assets/linkedin.webp";
import github from "./../../assets/github.webp";
import mail from "./../../assets/mail.webp";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section className="w-screen min-h-[80vh] p-5 space-y-5 flex flex-col  justify-center items-center gap-5">
      <h1 className="text-[min(10vw,70px)] leading-[0.9] font-bold tracking-tighter text-left">
        CONTACT ME
      </h1>

      <div>
        <fieldset className="fieldset bg-stone-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend font-bold text-black text-xl">
            Send me an email
          </legend>

          <label className="label">Name</label>
          <input
            type="text"
            className="input bg-white"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            id="name"
            name="name"
          />

          <label className="label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            className="input bg-white"
            placeholder="example@gmail.com"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            className="textarea bg-white"
            placeholder="Your Message..."
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          ></textarea>

          <button className="btn btn-soft mt-4 bg-yellow-600 border-yellow-900">
            Send message
          </button>
        </fieldset>
      </div>

      <h1>Connect with me</h1>

      <div className="flex gap-2 pt-2">
        <div className="tooltip tooltip-bottom" data-tip="LinkedIn">
          <a
            href="https://www.linkedin.com/in/chhay-than-chhour"
            target="_blank"
          >
            <img src={linkedIn} alt="LinkedIn Icon" className="icon" />
          </a>
        </div>

        <div className="tooltip tooltip-bottom" data-tip="Github">
          <a href="https://github.com/ChhayThan" target="_blank">
            <img src={github} alt="Github Icon" className="icon" />
          </a>
        </div>

        <div className="tooltip tooltip-bottom" data-tip="Email">
          <a
            href="mailto:chhaythan.eric@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mail} alt="Mail Icon" className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
};
