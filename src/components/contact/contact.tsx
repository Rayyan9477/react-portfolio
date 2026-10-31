import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaDiscord } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { ImLinkedin2 } from "react-icons/im";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const notify = (message: string) => toast(message);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICEID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATEID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLICKEY;

    if (!serviceId || !templateId || !publicKey) {
      // Fallback for development if env vars are missing
      setTimeout(() => {
        setIsSubmitting(false);
        setFormData({ fullName: "", email: "", message: "" });
        notify("Thank you! Your message has been noted.");
      }, 600);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, e.currentTarget, publicKey)
      .then(() => {
        setIsSubmitting(false);
        setFormData({ fullName: "", email: "", message: "" });
        notify("The message was sent successfully!");
      })
      .catch(() => {
        setIsSubmitting(false);
        notify("Your message could not be sent. Please email me directly.");
      });
  }

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="contact__container container grid grid-cols-1 lg:grid-cols-[35%_60%] gap-8">
        {/* Contact Options */}
        <div className="contact__options flex flex-col gap-4">
          <article className="contact__option flex flex-col items-center">
            <HiOutlineMail className="contact__option-icon mb-2 text-2xl text-cyan-400" />
            <h4 className="text-sm font-bold text-white">Direct Email</h4>
            <h5 className="font-mono text-xs text-slate-300 select-all">rayyanahmed265@yahoo.com</h5>
            <a
              href="mailto:rayyanahmed265@yahoo.com"
              className="mt-2 text-xs font-mono text-cyan-400 hover:text-cyan-300"
            >
              Send an email &rarr;
            </a>
          </article>

          <article className="contact__option flex flex-col items-center">
            <ImLinkedin2 className="contact__option-icon mb-2 text-2xl text-sky-400" />
            <h4 className="text-sm font-bold text-white">LinkedIn</h4>
            <h5 className="font-mono text-xs text-slate-300">Rayyan Ahmed</h5>
            <a
              href="https://www.linkedin.com/in/rayyan-ahmed9477/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-xs font-mono text-cyan-400 hover:text-cyan-300"
            >
              Connect on LinkedIn &rarr;
            </a>
          </article>

          <article className="contact__option flex flex-col items-center">
            <FaDiscord className="contact__option-icon mb-2 text-2xl text-indigo-400" />
            <h4 className="text-sm font-bold text-white">Discord</h4>
            <h5 className="font-mono text-xs text-slate-300">Rayyan Ahmed</h5>
            <a
              href="https://discord.com/users/1082700727220183151"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-xs font-mono text-cyan-400 hover:text-cyan-300"
            >
              Chat on Discord &rarr;
            </a>
          </article>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="w-full rounded-xl px-5 py-3.5 text-sm autofill:bg-transparent"
            type="text"
            value={formData.fullName}
            name="fullName"
            placeholder="Your Full Name"
            onChange={handleChange}
            required
          />
          <input
            className="w-full rounded-xl px-5 py-3.5 text-sm autofill:bg-transparent"
            type="email"
            value={formData.email}
            name="email"
            placeholder="Your Email Address"
            onChange={handleChange}
            required
          />
          <textarea
            className="w-full rounded-xl px-5 py-3.5 text-sm autofill:bg-transparent"
            name="message"
            value={formData.message}
            rows={7}
            placeholder="Tell me about your AI project, architecture needs, or role..."
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary self-start disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
