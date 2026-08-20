import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { personalInfo } from "../../data/resumeData";
import SectionHeading from "../shared/SectionHeading";
import Button from "../shared/Button";

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
 * Contact section with direct communication links and pre-filled mail composer.
 */
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    const subject = encodeURIComponent(
      form.subject || "Portfolio Inquiry - Moneswar Sundareswaran"
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
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
          {/* Left: Contact Info Cards & Socials */}
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
                <p className="hover:text-white transition-colors">{personalInfo.githubHandle}</p>
                <p className="hover:text-white transition-colors">{personalInfo.linkedinHandle}</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Message Composer Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="glass-panel flex flex-col justify-between gap-5 p-6 sm:p-8 lg:p-9"
          >
            <div className="flex flex-col gap-4.5">
              <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                  Your Name
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all focus:border-cyan-400 focus:bg-white/[0.07] focus:ring-2 focus:ring-cyan-500/20"
                  />
                </label>

                <label className="flex flex-col gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                  Your Email
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all focus:border-cyan-400 focus:bg-white/[0.07] focus:ring-2 focus:ring-cyan-500/20"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                Subject
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Opportunity / Project Collaboration"
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all focus:border-cyan-400 focus:bg-white/[0.07] focus:ring-2 focus:ring-cyan-500/20"
                />
              </label>

              <label className="flex flex-col gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                Message
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hello Moneswar, I saw your portfolio and would like to discuss..."
                  className="resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all focus:border-cyan-400 focus:bg-white/[0.07] focus:ring-2 focus:ring-cyan-500/20"
                />
              </label>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 pt-2 border-t border-white/10">
              <Button type="submit" variant="primary" icon={FiSend}>
                Send Message
              </Button>
              <span className="text-xs text-slate-400">
                (Composes email to {personalInfo.email})
              </span>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
