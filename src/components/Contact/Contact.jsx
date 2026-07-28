import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { personalInfo } from "../../data/resumeData";
import SectionHeading from "../shared/SectionHeading";
import Button from "../shared/Button";

const contactCards = [
  { icon: HiOutlineMail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: HiOutlinePhone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, "")}` },
  { icon: HiOutlineLocationMarker, label: "Location", value: personalInfo.location, href: null },
];

/**
 * Contact
 * Info cards (email/phone/location), social links, and a lightweight
 * message form. The form composes a mailto: link with the filled-in
 * details rather than depending on a third-party email API key that
 * isn't available in this build — keeping it fully functional out of
 * the box. Swap the `handleSubmit` body for an EmailJS call once you
 * have your own service/template/public keys.
 */
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    const subject = encodeURIComponent(form.subject || "Portfolio Contact");
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          highlight="together"
          subtitle="Have a role, project, or idea in mind? I'd love to hear about it."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left: info cards + socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {contactCards.map(({ icon: Icon, label, value, href }) => {
              const Wrapper = href ? "a" : "div";
              return (
                <Wrapper
                  key={label}
                  {...(href ? { href } : {})}
                  className="glass-panel flex items-center gap-4 p-5 transition-colors duration-300 hover:border-(--color-cyan)/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-(--color-cyan)/20 to-(--color-purple)/20 text-lg text-(--color-cyan)">
                    <Icon />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-(--color-text-muted)">{label}</p>
                    <p className="font-medium text-(--color-text)">{value}</p>
                  </div>
                </Wrapper>
              );
            })}

            <div className="glass-panel flex items-center gap-4 p-5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-lg text-(--color-text-muted) transition-colors hover:text-(--color-cyan)"
              >
                <FaGithub />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-lg text-(--color-text-muted) transition-colors hover:text-(--color-cyan)"
              >
                <FaLinkedin />
              </a>
              <div className="text-sm text-(--color-text-muted)">
                <p>{personalInfo.githubHandle}</p>
                <p>{personalInfo.linkedinHandle}</p>
              </div>
            </div>
          </motion.div>

          {/* Right: message form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-panel flex flex-col gap-5 p-7 sm:p-9"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-(--color-text-muted)">
                Name
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="rounded-xl border border-(--color-border) bg-white/5 px-4 py-3 text-(--color-text) outline-none transition-colors placeholder:text-(--color-text-muted)/60 focus:border-(--color-cyan)"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-(--color-text-muted)">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="rounded-xl border border-(--color-border) bg-white/5 px-4 py-3 text-(--color-text) outline-none transition-colors placeholder:text-(--color-text-muted)/60 focus:border-(--color-cyan)"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm text-(--color-text-muted)">
              Subject
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="rounded-xl border border-(--color-border) bg-white/5 px-4 py-3 text-(--color-text) outline-none transition-colors placeholder:text-(--color-text-muted)/60 focus:border-(--color-cyan)"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm text-(--color-text-muted)">
              Message
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me a bit about your project or opportunity..."
                className="resize-none rounded-xl border border-(--color-border) bg-white/5 px-4 py-3 text-(--color-text) outline-none transition-colors placeholder:text-(--color-text-muted)/60 focus:border-(--color-cyan)"
              />
            </label>

            <Button type="submit" icon={FiSend} className="self-start">
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
