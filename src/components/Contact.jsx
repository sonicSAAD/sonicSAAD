import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";
import { FaPaperPlane, FaCopy, FaCheck } from "react-icons/fa";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const CONTACT_TO_EMAIL =
  import.meta.env.VITE_CONTACT_TO_EMAIL || "mohammadsaad65283@gmail.com";
const CONTACT_PHONE = "+918840207058";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const copyValue = async (value, setCopied, label) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setFeedback({ type: "success", message: `${label} copied to clipboard.` });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setFeedback({ type: "error", message: "Clipboard access is unavailable. Please copy it manually." });
    }
  };

  const copyEmail = () => copyValue(CONTACT_TO_EMAIL, setCopiedEmail, "Email");
  const copyPhone = () => copyValue(CONTACT_PHONE, setCopiedPhone, "Phone number");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setFeedback({ type: "error", message: "The contact form is not configured yet. Please use the email link instead." });
      return;
    }

    setLoading(true);
    setFeedback(null);

    const templateParams = {
      name: form.name,
      email: form.email,
      message: form.message,
      time: new Date().toLocaleString(),
      from_name: form.name,
      from_email: form.email,
      to_name: "Mohammad Saad",
      to_email: CONTACT_TO_EMAIL,
      reply_to: form.email,
    };

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setFeedback({ type: "success", message: "Message sent. Mohammad will get back to you soon." });
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setFeedback({ type: "error", message: "Something went wrong. Please try again or use the email link." });
        }
      );
  };

  return (
    <div className="-mt-[2rem] sm:-mt-[4rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Direct Channels &amp; Inquiries</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
      </motion.div>

      <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        {/* Left Col: Direct Channels */}
        <motion.div
          variants={slideIn("left", "tween", 0.1, 0.8)}
          className="lg:col-span-5 flex flex-col gap-4">
          
          <div className="brutalist-panel rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-white/10">
            <h3 className="text-white text-[19px] sm:text-[22px] font-bold font-poppins tracking-tight mb-2">
              Let&apos;s Build Together
            </h3>
            <p className="text-zinc-300 text-[13px] sm:text-[14px] leading-relaxed font-poppins mb-5 sm:mb-6">
              I am open to software development opportunities across Java, Android, Flutter, and cross-platform application development.
            </p>

            {/* Email Action */}
            <button
              type="button"
              onClick={copyEmail}
              className="w-full text-left p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/40 transition-all duration-200 cursor-pointer flex items-center justify-between group mb-3">
              <div className="overflow-hidden mr-2">
                <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest block">
                  EMAIL ADDRESS
                </span>
                <span className="text-white text-[13px] sm:text-[14px] font-mono font-bold mt-0.5 block truncate">
                  mohammadsaad65283@gmail.com
                </span>
              </div>
              <span className="w-8 h-8 rounded-lg bg-white/10 shrink-0 flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors">
                {copiedEmail ? <FaCheck className="w-3.5 h-3.5 text-white" /> : <FaCopy className="w-3.5 h-3.5" />}
              </span>
            </button>

            <button
              type="button"
              onClick={copyPhone}
              className="w-full text-left p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/40 transition-all duration-200 cursor-pointer flex items-center justify-between group mb-3">
              <div>
                <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest block">
                  PHONE / WHATSAPP
                </span>
                <span className="text-white text-[13px] sm:text-[14px] font-mono font-bold mt-0.5 block">
                  +91 8840207058
                </span>
              </div>
              <span className="w-8 h-8 rounded-lg bg-white/10 shrink-0 flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors">
                {copiedPhone ? <FaCheck className="w-3.5 h-3.5 text-white" /> : <FaCopy className="w-3.5 h-3.5" />}
              </span>
            </button>

            {/* Location */}
            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest block">
                LOCATION
              </span>
              <span className="text-white text-[13px] sm:text-[14px] font-poppins font-medium mt-0.5 block">
                Prayagraj, Uttar Pradesh, India
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Col: Message Form */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 0.8)}
          className="lg:col-span-7 brutalist-panel rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-white/10">
          
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 sm:gap-5 font-poppins">
            
            <div>
              <label htmlFor="contact-name" className="text-white text-[12px] sm:text-[13px] font-mono font-bold block mb-1.5 sm:mb-2">
                YOUR NAME
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="What is your name?"
                className="w-full bg-black border border-white/10 focus:border-white rounded-xl px-4 py-3 sm:py-3.5 text-white text-[14px] outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="text-white text-[12px] sm:text-[13px] font-mono font-bold block mb-1.5 sm:mb-2">
                YOUR EMAIL
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Where can I reach you?"
                className="w-full bg-black border border-white/10 focus:border-white rounded-xl px-4 py-3 sm:py-3.5 text-white text-[14px] outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="text-white text-[12px] sm:text-[13px] font-mono font-bold block mb-1.5 sm:mb-2">
                YOUR MESSAGE
              </label>
              <textarea
                rows="5"
                id="contact-message"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project, team, or opportunity..."
                className="w-full bg-black border border-white/10 focus:border-white rounded-xl px-4 py-3 sm:py-3.5 text-white text-[14px] outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              aria-busy={loading}
              className="mt-1 sm:mt-2 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-white text-black hover:bg-zinc-200 font-mono font-bold text-[13px] sm:text-[14px] transition-all duration-200 shadow-md w-full sm:w-auto">
              <FaPaperPlane className="w-3.5 h-3.5" />
              {loading ? "SENDING MESSAGE..." : "SEND MESSAGE"}
            </button>
            {feedback && (
              <p
                role="status"
                aria-live="polite"
                className={`text-[12px] font-mono ${feedback.type === "error" ? "text-[#ff6b8a]" : "text-[#00ff9f]"}`}>
                {feedback.message}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
