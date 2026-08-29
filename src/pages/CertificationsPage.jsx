import { Link } from "react-router-dom";
import { FaArrowLeft, FaCertificate } from "react-icons/fa";
import PageTransition from "../components/PageTransition";

const certifications = [
  {
    title: "Core Java with Collections Summer Training",
    detail: "Collections framework and object-oriented programming implementation.",
    type: "TECHNICAL TRAINING",
  },
  {
    title: "Android Application Development Internship",
    detail: "Hands-on Android application development training via EngineerCore.",
    type: "INTERNSHIP",
  },
  {
    title: "HackQuest'25 Participation Certificate",
    detail: "Recognized for rapid development and collaborative problem-solving.",
    type: "HACKATHON",
  },
];

const CertificationsPage = () => (
  <PageTransition>
    <div className="min-h-screen py-28 pb-24 px-4 sm:px-8 max-w-5xl mx-auto stripe-grid text-white">
      <div className="mb-10 border-b border-white/10 pb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white font-mono text-[12px] uppercase tracking-wider mb-4 transition-colors">
          <FaArrowLeft className="w-3 h-3" /> BACK TO HOME
        </Link>
        <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-[#05d9e8] font-bold">VERIFIED DEVELOPMENT PATH</p>
        <h1 className="text-[36px] sm:text-[52px] font-extrabold font-poppins tracking-tight mt-1">Certificates.</h1>
      </div>

      <div className="grid grid-cols-1 gap-5">
        {certifications.map((certificate) => (
          <article key={certificate.title} className="brutalist-panel rounded-3xl p-6 sm:p-8 border border-white/10 flex gap-5 items-start">
            <div className="w-12 h-12 rounded-2xl bg-[#ff2a6d]/10 border border-[#ff2a6d]/30 flex items-center justify-center shrink-0">
              <FaCertificate className="w-5 h-5 text-[#ff2a6d]" />
            </div>
            <div>
              <p className="text-[#00ff9f] text-[10px] font-mono uppercase tracking-[0.2em]">{certificate.type}</p>
              <h2 className="text-white text-[19px] sm:text-[23px] font-bold font-poppins mt-2">{certificate.title}</h2>
              <p className="text-zinc-300 text-[14px] mt-2 leading-relaxed">{certificate.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </PageTransition>
);

export default CertificationsPage;
