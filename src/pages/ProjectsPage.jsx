import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaCalculator,
  FaCloudSun,
  FaExternalLinkAlt,
  FaGithub,
  FaMobileAlt,
  FaShieldAlt,
} from "react-icons/fa";
import { animate } from "animejs";
import PropTypes from "prop-types";
import PageTransition from "../components/PageTransition";

const projects = [
  {
    id: "kavachg",
    number: "01",
    title: "KavachG",
    eyebrow: "EDGE-AI / SAFETY GRID",
    icon: FaShieldAlt,
    description:
      "An AI-based safety KPI and monitoring dashboard that replaces manual compliance checks with real-time computer vision analysis of live camera feeds.",
    tags: ["Computer Vision", "FastAPI", "OpenCV", "Real-time feeds"],
    demo: "https://kavach-g.vercel.app/",
    repo: "https://github.com/sonicSAAD/KavachG",
    visual: "radial-gradient(circle at 25% 20%, rgba(255,42,109,0.38), transparent 30%), linear-gradient(135deg, #120b2b, #061b2b)",
  },
  {
    id: "any-weather",
    number: "02",
    title: "Any Weather",
    eyebrow: "MOBILE / WEATHER SIGNAL",
    icon: FaCloudSun,
    description:
      "A Flutter weather application delivering live conditions and precise forecast tracking through efficient network requests and robust local caching.",
    tags: ["Flutter", "Dart", "Dio", "BLoC / Cubit", "Shared Preferences"],
    visual: "radial-gradient(circle at 75% 20%, rgba(5,217,232,0.32), transparent 32%), linear-gradient(135deg, #071d2d, #11102d)",
  },
  {
    id: "scientific-calculator",
    number: "03",
    title: "Scientific Calculator",
    eyebrow: "DESKTOP / CORE JAVA",
    icon: FaCalculator,
    description:
      "A modular desktop calculator built from the ground up with a Java Swing interface and application logic structured around core OOP principles.",
    tags: ["Core Java", "Swing", "OOP", "Desktop software"],
    visual: "radial-gradient(circle at 25% 80%, rgba(0,255,159,0.25), transparent 30%), linear-gradient(135deg, #101d2d, #21102c)",
  },
];

const ProjectCard = ({ project }) => {
  const Icon = project.icon;

  return (
    <article className="project-card opacity-0 brutalist-panel rounded-3xl overflow-hidden border border-white/10 flex flex-col">
      <div
        className="relative min-h-[230px] p-6 sm:p-8 flex flex-col justify-between overflow-hidden"
        style={{ background: project.visual }}>
        <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(0deg,rgba(5,217,232,0.18)_0,rgba(5,217,232,0.18)_1px,transparent_1px,transparent_52px)]" />
        <div className="relative flex items-center justify-between font-mono text-[11px] text-[#05d9e8] tracking-widest">
          <span>PROJECT_{project.number}</span>
          <Icon className="w-5 h-5 text-[#ff2a6d]" />
        </div>
        <div className="relative">
          <p className="font-mono text-[10px] text-[#00ff9f] tracking-widest mb-3">{project.eyebrow}</p>
          <h2 className="text-[clamp(34px,5vw,58px)] font-extrabold font-poppins tracking-tight leading-none text-white [text-shadow:0_0_18px_rgba(5,217,232,0.55)]">
            {project.title}
          </h2>
        </div>
      </div>

      <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
        <div>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-md bg-[#05d9e8]/10 border border-[#05d9e8]/30 text-[#05d9e8] text-[10px] font-mono">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-zinc-300 text-[14px] leading-relaxed">{project.description}</p>
        </div>

        <div className="mt-7 pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white text-black font-mono font-bold text-[11px] hover:bg-[#f9f002] transition-colors">
              LIVE DEMO <FaExternalLinkAlt className="w-3 h-3" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#00ff9f]/10 border border-[#00ff9f]/30 text-[#00ff9f] font-mono font-bold text-[11px]">
              CASE STUDY <FaMobileAlt className="w-3 h-3" />
            </span>
          )}
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl brutalist-panel text-white font-mono font-bold text-[11px] hover:border-[#ff2a6d] transition-colors">
              SOURCE CODE <FaGithub className="w-3.5 h-3.5" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    eyebrow: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    demo: PropTypes.string,
    repo: PropTypes.string,
    visual: PropTypes.string.isRequired,
  }).isRequired,
};

const ProjectsPage = () => {
  useEffect(() => {
    animate(".project-card", {
      opacity: [0, 1],
      translateY: [24, 0],
      delay: (element, index) => index * 100,
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
              APPLICATION DOSSIER
            </p>
            <h1 className="text-[36px] sm:text-[52px] font-extrabold font-poppins tracking-tight mt-1">
              Technical Projects.
            </h1>
            <p className="text-zinc-400 text-[15px] sm:text-[17px] mt-3 max-w-2xl leading-relaxed">
              Mobile, desktop, and edge-AI applications built around practical software engineering.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 text-[11px] font-mono text-[#00ff9f] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#00ff9f] animate-pulse" /> 3 SYSTEMS INDEXED
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;
