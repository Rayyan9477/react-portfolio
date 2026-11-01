import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { profile } from "../../data/profile";

export default function Contact() {
  const [fields, setFields] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [state, setState] = useState<
    "idle" | "sending" | "draft" | "success" | "error"
  >("idle");
  const sending = useRef(false);
  const service = import.meta.env.VITE_EMAILJS_SERVICEID;
  const template = import.meta.env.VITE_EMAILJS_TEMPLATEID;
  const key = import.meta.env.VITE_EMAILJS_PUBLICKEY;
  const configured = [service, template, key].every(
    (value) => value && !value.startsWith("your_"),
  );
  const draft = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio inquiry from ${fields.fullName}`)}&body=${encodeURIComponent(`Name: ${fields.fullName}\nEmail: ${fields.email}\n\n${fields.message}`)}`;
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    if (!configured) {
      setState("draft");
      return;
    }
    sending.current = true;
    setState("sending");
    try {
      await emailjs.send(service, template, { ...fields }, { publicKey: key });
      setFields({ fullName: "", email: "", message: "" });
      setState("success");
    } catch {
      setState("error");
    } finally {
      sending.current = false;
    }
  }
  return (
    <section
      id="contact"
      className="section shell contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-copy">
        <p className="eyebrow">05 / Get in touch</p>
        <h2 id="contact-title">
          Have a problem
          <br />
          worth solving?
        </h2>
        <p>
          Let’s talk about an AI engineering role, a system you’re building, or
          a workflow that could work better.
        </p>
        <a className="contact-email" href={`mailto:${profile.email}`}>
          {profile.email} <FiArrowUpRight aria-hidden="true" />
        </a>
        <a
          className="text-link"
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect on LinkedIn <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
      <form
        onSubmit={submit}
        aria-label="Contact Rayyan"
        aria-describedby="contact-note"
      >
        <div>
          <label htmlFor="full-name">Full name</label>
          <input
            id="full-name"
            name="fullName"
            autoComplete="name"
            required
            maxLength={120}
            value={fields.fullName}
            onChange={(e) => {
              setFields({ ...fields, fullName: e.target.value });
              setState("idle");
            }}
            disabled={state === "sending"}
          />
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            value={fields.email}
            onChange={(e) => {
              setFields({ ...fields, email: e.target.value });
              setState("idle");
            }}
            disabled={state === "sending"}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            maxLength={5000}
            value={fields.message}
            onChange={(e) => {
              setFields({ ...fields, message: e.target.value });
              setState("idle");
            }}
            disabled={state === "sending"}
          />
        </div>
        <p id="contact-note" className="form-note">
          {configured
            ? "Your message is delivered through EmailJS. Please avoid sharing sensitive information."
            : "Prepare a draft, then send it from your own email app. Your message stays here until you leave this page."}
        </p>
        <button
          className="button primary"
          type="submit"
          disabled={state === "sending"}
        >
          {state === "sending"
            ? "Sending…"
            : configured
              ? "Send message"
              : "Prepare email draft"}
          <FiArrowUpRight aria-hidden="true" />
        </button>
        {state === "error" ? (
          <p role="alert" className="form-feedback error">
            Your message could not be sent. Your text has been kept. Please
            retry or <a href={draft}>send through your email app</a>.
          </p>
        ) : (
          <p role="status" className="form-feedback">
            {state === "success" ? (
              "Message sent. Thank you for reaching out."
            ) : state === "draft" ? (
              <>
                Your message is ready. <a href={draft}>Open email draft</a> and
                send it from your email app.
              </>
            ) : state === "sending" ? (
              "Sending your message…"
            ) : (
              ""
            )}
          </p>
        )}
      </form>
    </section>
  );
}
