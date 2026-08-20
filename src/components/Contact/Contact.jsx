import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiSend, FiCheckCircle, FiAlertCircle, FiLoader } from "react-icons/fi";
import { personalInfo } from "../../data/resumeData";
import SectionHeading from "../shared/SectionHeading";

const contactCards = [
  {
    icon: HiOutlineMail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: HiOutlinePhone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
  },
  {
    icon: HiOutlineLocationMarker,
    label: "Location",
    value: personalInfo.location,
    href: null,
  },
];

/**
 * Contact
 * Professional recruiter-facing contact section powered by EmailJS.
 * Features full client-side validation, direct reply-to headers, loading states, and robust error recovery.
 */
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear validation error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Please enter your message.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setErrorMessage(
        "Email service is currently being configured. Please contact me directly at " +
          personalInfo.email
      );
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    const templateParams = {
      from_name: form.name.trim(),
      from_email: form.email.trim(),
      reply_to: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
      to_email: personalInfo.email,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error("EmailJS submission error:", err);
      setStatus("error");
      setErrorMessage(
        "Unable to send your message. Please try again or contact me directly by email at " +
          personalInfo.email
      );
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 lg:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Connect"
          title="Get In Touch"
          highlight="Touch"
          subtitle="Have an opportunity, project collaboration, or technical question? Let's connect."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 items-stretch">
          {/* Left: Contact Information Cards & Social Profiles */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="flex flex-col justify-between gap-4"
          >
            <div className="flex flex-col gap-4">
              {contactCards.map(({ icon: Icon, label, value, href }) => {
                const Wrapper = href ? "a" : "div";
                return (
                  <Wrapper
                    key={label}
                    {...(href ? { href } : {})}
                    className="glass-panel flex items-center gap-4 p-5 transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-0.5"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-xl text-cyan-400 shadow-inner">
                      <Icon />
                    </span>
                    <div>
                      <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                        {label}
                      </p>
                      <p className="font-semibold text-sm sm:text-base text-white mt-0.5">
                        {value}
                      </p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>

            {/* Social handles card */}
            <div className="glass-panel flex flex-col sm:flex-row items-center justify-between gap-4 p-5">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xl text-slate-300 transition-all duration-300 hover:border-cyan-500/50 hover:bg-white/[0.08] hover:text-cyan-400"
                >
                  <FaGithub />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xl text-slate-300 transition-all duration-300 hover:border-cyan-500/50 hover:bg-white/[0.08] hover:text-cyan-400"
                >
                  <FaLinkedin />
                </a>
              </div>
              <div className="text-xs font-medium text-slate-400 text-center sm:text-right">
                <p className="hover:text-white transition-colors">
                  {personalInfo.githubHandle}
                </p>
                <p className="hover:text-white transition-colors">
                  {personalInfo.linkedinHandle}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Functional Message Form */}
          <motion.form
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="glass-panel flex flex-col justify-between gap-5 p-6 sm:p-8 lg:p-9"
          >
            <div className="flex flex-col gap-4.5">
              {/* Notification Banner */}
              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-xs sm:text-sm font-medium text-emerald-300 backdrop-blur-md"
                  >
                    <FiCheckCircle className="text-lg shrink-0 text-emerald-400" />
                    <span>
                      Message sent successfully! Thank you for reaching out, I
                      will respond promptly.
                    </span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-start gap-3 rounded-xl border border-rose-500/40 bg-rose-500/10 p-4 text-xs sm:text-sm font-medium text-rose-300 backdrop-blur-md"
                  >
                    <FiAlertCircle className="text-lg shrink-0 text-rose-400 mt-0.5" />
                    <div className="flex flex-col gap-1">
                      <span>{errorMessage}</span>
                      <a
                        href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(
                          form.subject || "Portfolio Inquiry"
                        )}&body=${encodeURIComponent(form.message)}`}
                        className="underline text-rose-200 hover:text-white transition-colors"
                      >
                        Click here to send directly via mail client
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2">
                {/* Name Field */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300"
                  >
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className={`rounded-xl border px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all ${
                      errors.name
                        ? "border-rose-500/60 bg-rose-500/[0.04] focus:border-rose-400 focus:ring-2 focus:ring-rose-500/20"
                        : "border-white/10 bg-white/[0.04] focus:border-cyan-400 focus:bg-white/[0.07] focus:ring-2 focus:ring-cyan-500/20"
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[11px] font-medium text-rose-400">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300"
                  >
                    Your Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className={`rounded-xl border px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all ${
                      errors.email
                        ? "border-rose-500/60 bg-rose-500/[0.04] focus:border-rose-400 focus:ring-2 focus:ring-rose-500/20"
                        : "border-white/10 bg-white/[0.04] focus:border-cyan-400 focus:bg-white/[0.07] focus:ring-2 focus:ring-cyan-500/20"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] font-medium text-rose-400">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject Field */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-subject"
                  className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300"
                >
                  Subject <span className="text-cyan-400">*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Opportunity / Project Collaboration"
                  className={`rounded-xl border px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all ${
                    errors.subject
                      ? "border-rose-500/60 bg-rose-500/[0.04] focus:border-rose-400 focus:ring-2 focus:ring-rose-500/20"
                      : "border-white/10 bg-white/[0.04] focus:border-cyan-400 focus:bg-white/[0.07] focus:ring-2 focus:ring-cyan-500/20"
                  }`}
                />
                {errors.subject && (
                  <span className="text-[11px] font-medium text-rose-400">
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300"
                >
                  Message <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hello Moneswar, I reviewed your portfolio and would like to discuss..."
                  className={`resize-none rounded-xl border px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all ${
                    errors.message
                      ? "border-rose-500/60 bg-rose-500/[0.04] focus:border-rose-400 focus:ring-2 focus:ring-rose-500/20"
                      : "border-white/10 bg-white/[0.04] focus:border-cyan-400 focus:bg-white/[0.07] focus:ring-2 focus:ring-cyan-500/20"
                  }`}
                />
                {errors.message && (
                  <span className="text-[11px] font-medium text-rose-400">
                    {errors.message}
                  </span>
                )}
              </div>
            </div>

            {/* Submission Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 border-t border-white/10">
              <button
                type="submit"
                disabled={status === "sending"}
                className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-cyan-400 ${
                  status === "sending"
                    ? "bg-cyan-500/40 text-slate-900 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#06b6d4] via-[#0284c7] to-[#8b5cf6] text-slate-950 font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/45 hover:-translate-y-0.5"
                }`}
              >
                {status === "sending" ? (
                  <>
                    <FiLoader className="text-base animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="text-base" />
                    Send Message
                  </>
                )}
              </button>

              <span className="text-xs text-slate-400">
                Directly sent to {personalInfo.email}
              </span>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
