import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import TiltCard from "../components/TiltCard";
import { FaArrowLeft, FaBrain, FaCode, FaCubes, FaDatabase, FaMobileAlt, FaShieldAlt } from "react-icons/fa";
import { animate, stagger } from "animejs";

const engineeringPillars = [
  {
    icon: FaCode,
    title: "Core Java Development",
    tag: "SOFTWARE",
    desc: "Building modular desktop and application software with clean logic, reusable classes, and object-oriented design principles."
  },
  {
    icon: FaMobileAlt,
    title: "Android Development",
    tag: "MOBILE",
    desc: "Creating practical Android experiences with intuitive interfaces, reliable state handling, and user-focused application flows."
  },
  {
    icon: FaCubes,
    title: "Flutter Applications",
    tag: "CROSS-PLATFORM",
    desc: "Engineering cross-platform mobile interfaces with Dart, BLoC/Cubit state management, Dio networking, and local caching."
  },
  {
    icon: FaDatabase,
    title: "Application Architecture",
    tag: "FOUNDATIONS",
    desc: "Structuring software around maintainable modules, efficient data handling, and clear separation between interface and logic."
  },
  {
    icon: FaBrain,
    title: "Core CS Foundations",
    tag: "COMPUTING",
    desc: "Applying data structures, algorithms, OOP, DBMS, operating systems, and computer networking fundamentals to real software."
  },
  {
    icon: FaShieldAlt,
    title: "UI & Problem Solving",
    tag: "CRAFT",
    desc: "Combining thoughtful user interfaces with efficient problem-solving for applications that feel clear, responsive, and dependable."
  }
];

const OverviewPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    animate(".pillar-card", {
      opacity: [0, 1],
      translateY: [25, 0],
      delay: stagger(70, { start: 100 }),
      ease: "outExpo",
      duration: 700,
    });
  }, []);

  return (
    <PageTransition>
      <div className="pt-28 pb-24 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen text-white">
        
        {/* Top Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl brutalist-panel text-white font-mono text-[13px] hover:border-white/40 transition-colors w-fit">
            <FaArrowLeft className="w-3.5 h-3.5" /> BACK TO HOME
          </Link>
          <div className="flex items-center gap-2 text-[12px] font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            SOFTWARE DEVELOPMENT PROFILE
          </div>
        </div>

        {/* Page Title */}
        <div className="mb-10">
          <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-zinc-400 font-bold">
            ABOUT MOHAMMAD SAAD
          </p>
          <h1 className="text-[36px] sm:text-[52px] font-extrabold font-poppins text-white tracking-tight mt-1">
            Software Overview.
          </h1>
          <p className="text-zinc-400 text-[15px] sm:text-[17px] mt-3 max-w-3xl leading-relaxed">
            B.Tech Computer Science student focused on Java, Android Development, Flutter, and software development. I enjoy turning ideas into efficient applications with intuitive interfaces and maintainable code.
          </p>
        </div>

        
        {/* Core engineering pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {engineeringPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="pillar-card opacity-100">
                <TiltCard className="brutalist-panel rounded-3xl p-7 border border-white/10 hover:border-white/40 flex flex-col justify-between h-full transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-white border border-white/20 font-bold">
                        {pillar.tag}
                      </span>
                    </div>

                    <h3 className="text-white text-[20px] font-bold font-poppins tracking-tight mb-2">
                      {pillar.title}
                    </h3>

                    <p className="text-zinc-300 text-[13.5px] font-poppins leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[12px] font-mono text-zinc-400">
                    <span>STATUS: ACTIVE</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  </div>
                </TiltCard>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
          <div className="brutalist-panel rounded-3xl p-6 border border-white/10">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#05d9e8] font-bold">EDUCATION</p>
            <h2 className="text-white text-[20px] font-bold font-poppins mt-3">B.Tech in CSE</h2>
            <p className="text-zinc-300 text-[13px] mt-2 leading-relaxed">United Institute of Technology, Prayagraj</p>
            <p className="text-zinc-500 text-[12px] font-mono mt-3">2023 - 2027</p>
          </div>
          <div className="brutalist-panel rounded-3xl p-6 border border-white/10">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#ff2a6d] font-bold">CERTIFICATIONS</p>
            <h2 className="text-white text-[20px] font-bold font-poppins mt-3">Technical Training</h2>
            <p className="text-zinc-300 text-[13px] mt-2 leading-relaxed">Core Java with Collections and Android Application Development Internship.</p>
            <p className="text-zinc-500 text-[12px] font-mono mt-3">TRAINING VERIFIED</p>
          </div>
          <div className="brutalist-panel rounded-3xl p-6 border border-white/10">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#00ff9f] font-bold">ACHIEVEMENTS</p>
            <h2 className="text-white text-[20px] font-bold font-poppins mt-3">Competitive Builder</h2>
            <p className="text-zinc-300 text-[13px] mt-2 leading-relaxed">6th Place Bharat@100 Hackathon and 7th Position Code Aarambh.</p>
            <p className="text-zinc-500 text-[12px] font-mono mt-3">HACKATHONS / CODING</p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default OverviewPage;
