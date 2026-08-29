import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaShieldAlt } from "react-icons/fa";
import { animate } from "animejs";
import PageTransition from "../components/PageTransition";

const ProjectsPage = () => {
  useEffect(() => {
    animate(".project-card", {
      opacity: [0, 1],
      translateY: [24, 0],
      ease: "outExpo",
      duration: 700,
    });
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen py-28 pb-24 px-4 sm:px-8 max-w-7xl mx-auto stripe-grid text-white">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-5 border-b border-white/10 pb-8">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-white font-mono text-[12px] uppercase tracking-wider mb-4 transition-colors">
              <FaArrowLeft className="w-3 h-3" /> BACK TO HOME
            </Link>
            <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-[#05d9e8] font-bold">
              VERIFIED PROJECT
            </p>
            <h1 className="text-[36px] sm:text-[52px] font-extrabold font-poppins tracking-tight mt-1">
              KavachG.
            </h1>
            <p className="text-zinc-400 text-[15px] sm:text-[17px] mt-3 max-w-2xl leading-relaxed">
              One focused case study for an edge-AI safety monitoring system.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 text-[11px] font-mono text-[#00ff9f] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#00ff9f] animate-pulse" /> ACTIVE DOSSIER
          </span>
        </div>

        <article className="project-card opacity-0 brutalist-panel rounded-3xl overflow-hidden border border-white/10 grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[280px] lg:min-h-[460px] p-7 sm:p-10 flex flex-col justify-between overflow-hidden bg-[radial-gradient(circle_at_25%_20%,rgba(255,42,109,0.32),transparent_28%),linear-gradient(135deg,#120b2b,#061b2b)]">
            <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(5,217,232,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(5,217,232,0.2)_1px,transparent_1px)] bg-[size:34px_34px]" />
            <div className="relative flex items-center justify-between font-mono text-[11px] text-[#05d9e8] tracking-widest">
              <span>PROJECT_01</span>
              <FaShieldAlt className="w-5 h-5 text-[#ff2a6d]" />
            </div>
            <div className="relative">
              <p className="font-mono text-[11px] text-[#00ff9f] tracking-widest mb-3">EDGE-AI / SAFETY GRID</p>
              <h2 className="text-[clamp(38px,6vw,72px)] font-extrabold font-poppins tracking-tight leading-none text-white [text-shadow:0_0_18px_rgba(5,217,232,0.55)]">
                KAVACH<span className="text-[#ff2a6d]">G</span>
              </h2>
            </div>
          </div>

          <div className="p-7 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Computer Vision', 'FastAPI', 'OpenCV', 'Real-time feeds'].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-md bg-[#05d9e8]/10 border border-[#05d9e8]/30 text-[#05d9e8] text-[11px] font-mono">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-[25px] sm:text-[32px] font-bold font-poppins tracking-tight mb-4">
                Autonomous Edge Industrial Safety CV
              </h3>
              <p className="text-zinc-300 text-[15px] leading-relaxed max-w-2xl">
                KavachG is an AI-based safety KPI and monitoring dashboard designed to replace manual compliance checks with real-time computer vision analysis of live camera feeds.
              </p>
            </div>

            <div className="mt-10 pt-5 border-t border-white/10 flex flex-wrap items-center gap-3">
              <a
                href="https://kavach-g.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black font-mono font-bold text-[12px] hover:bg-[#f9f002] transition-colors">
                LIVE DEMO <FaExternalLinkAlt className="w-3 h-3" />
              </a>
              <a
                href="https://github.com/sonicSAAD/KavachG"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl brutalist-panel text-white font-mono font-bold text-[12px] hover:border-[#ff2a6d] transition-colors">
                SOURCE CODE <FaGithub className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </article>
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;
