import { Link } from "react-router-dom";
import { FaArrowLeft, FaDownload, FaExternalLinkAlt, FaFileAlt } from "react-icons/fa";
import PageTransition from "../components/PageTransition";

const RESUME_URL = "/Mohammad_Saad_Resume.pdf";

const ResumePage = () => (
  <PageTransition>
    <div className="min-h-screen py-28 pb-24 px-4 sm:px-8 max-w-7xl mx-auto stripe-grid text-white">
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-5 border-b border-white/10 pb-8">
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white font-mono text-[12px] uppercase tracking-wider mb-4 transition-colors">
            <FaArrowLeft className="w-3 h-3" /> BACK TO HOME
          </Link>
          <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-[#05d9e8] font-bold">PROFESSIONAL DOSSIER</p>
          <h1 className="text-[36px] sm:text-[52px] font-extrabold font-poppins tracking-tight mt-1">Resume.</h1>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={RESUME_URL} download="Mohammad_Saad_Resume.pdf" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black font-mono font-bold text-[12px] hover:bg-[#f9f002] transition-colors">
            <FaDownload className="w-3.5 h-3.5" /> DOWNLOAD PDF
          </a>
          <a href={RESUME_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl brutalist-panel text-white font-mono font-bold text-[12px] hover:border-[#ff2a6d] transition-colors">
            <FaExternalLinkAlt className="w-3.5 h-3.5" /> OPEN FULLSCREEN
          </a>
        </div>
      </div>

      <div className="brutalist-panel rounded-3xl p-3 sm:p-5 border border-white/10">
        <div className="flex items-center gap-2 px-2 pb-4 text-[11px] font-mono text-zinc-400">
          <FaFileAlt className="text-[#00ff9f]" /> MODULAR LATEX BUILD / ONE PAGE
        </div>
        <iframe
          src={`${RESUME_URL}#toolbar=0&navpanes=0`}
          title="Mohammad Saad Resume"
          className="w-full h-[720px] sm:h-[950px] rounded-2xl border border-white/10 bg-white"
        />
      </div>
    </div>
  </PageTransition>
);

export default ResumePage;
