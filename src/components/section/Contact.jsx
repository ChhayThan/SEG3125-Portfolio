import { useState } from "react";
import emailjs from "@emailjs/browser";

import linkedIn from "./../../assets/linkedin.webp";
import github from "./../../assets/github.webp";
import mail from "./../../assets/mail.webp";

export const Contact = () => {
  const [emailStatus, setEmailStatus] = useState("NONE");
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
        setEmailStatus("SENT");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setEmailStatus("NONE");
        }, 5000);
      })

      .catch(() => {
        setEmailStatus("FAIL");
        setTimeout(() => {
          setEmailStatus("NONE");
        }, 5000);
      });
  };

  return (
    <section className="w-screen min-h-[80vh] p-5 space-y-5 flex flex-col  justify-center items-center gap-5">
      <h1 className="text-[min(10vw,70px)] leading-[0.9] font-bold tracking-tighter text-left">
        CONTACT ME
      </h1>

      <div>
        <form onSubmit={handleSubmit}>
          <fieldset className="fieldset bg-stone-200 border-base-300 rounded-box w-xs border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              className="input bg-white"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
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

            <button
              className="btn btn-outline text-white bg-stone-500 hover:bg-yellow-500 border-transparent"
              type="submit"
            >
              Send message
            </button>
          </fieldset>
        </form>
      </div>
      <div
        role="alert"
        className={`alert alert-success sticky top-0 ${
          emailStatus !== "NONE" ? "flex" : "hidden"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>
          {emailStatus === "SENT"
            ? "Message Sent!"
            : "Oops, message failed to send... Please try again"}
        </span>
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
