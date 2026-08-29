import { useEffect, useState, lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { Hero, Navbar, Footer } from "./components";
import PageLoader from "./components/PageLoader";
import SkeletonLoader from "./components/SkeletonLoader";
import PageTransition from "./components/PageTransition";
import CommandPalette from "./components/CommandPalette";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import AmbientGlow from "./components/AmbientGlow";
import TiltCard from "./components/TiltCard";
import { FaBrain, FaFolderOpen, FaPaperPlane, FaArrowRight } from "react-icons/fa";
import { animate, stagger } from "animejs";

// Lazy-loaded dedicated standalone pages
const OverviewPage = lazy(() => import("./pages/OverviewPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

const hubCards = [
  {
    title: "System Overview",
    path: "/overview",
    icon: FaBrain,
    desc: "Java, Android, Flutter, software architecture, and application development profile.",
    tag: "ARCHITECTURE",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: FaPaperPlane,
    desc: "Direct communication channels, email copy action, and message form.",
    tag: "CONNECT",
  },
  {
    title: "KavachG",
    path: "/projects",
    icon: FaFolderOpen,
    desc: "KavachG, Any Weather, and Scientific Calculator application case studies.",
    tag: "PROJECT",
  },
];

const HomePage = () => {
  useEffect(() => {
    animate(".hub-card", {
      opacity: [0, 1],
      translateY: [20, 0],
      delay: stagger(50, { start: 100 }),
      ease: "outExpo",
      duration: 600,
    });
  }, []);

  return (
    <PageTransition>
      <Hero />

      {/* Interactive Monolith Hub (Gateway to All Dedicated Standalone Pages) */}
      <section className="relative z-10 py-16 sm:py-24 border-t border-white/[0.08] stripe-grid px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-zinc-400 font-bold">
            NEON INTERFACE INDEX
          </p>
          <h2 className="text-[32px] sm:text-[46px] font-extrabold font-poppins text-white tracking-tight mt-1">
            Explore the Interface.
          </h2>
          <p className="text-zinc-400 text-[15px] sm:text-[17px] mt-3 leading-relaxed">
            Explore the engineering profile or open a direct communication channel.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {hubCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link key={card.path} to={card.path} className="hub-card opacity-100 group">
                <TiltCard className="brutalist-panel rounded-3xl p-6 border border-white/10 group-hover:border-white/40 flex flex-col justify-between h-full transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                        <Icon className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white border border-white/20 font-bold">
                        {card.tag}
                      </span>
                    </div>

                    <h3 className="text-white text-[19px] font-bold font-poppins tracking-tight mb-2 group-hover:text-white">
                      {card.title}
                    </h3>

                    <p className="text-zinc-400 text-[13px] font-poppins leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[12px] font-mono text-zinc-400 group-hover:text-white">
                    <span>ENTER MODULE</span>
                    <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </TiltCard>
              </Link>
            );
          })}
        </div>
      </section>
    </PageTransition>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<SkeletonLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/about" element={<OverviewPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#000000] text-[#ffffff] min-h-screen overflow-x-hidden flex flex-col justify-between">
        <ScrollProgress />
        <AmbientGlow />

        <AnimatePresence mode="wait">
          {isLoading && <PageLoader />}
        </AnimatePresence>

        <Navbar />
        <CommandPalette />
        <ScrollToTop />

        <main className="flex-grow relative z-10">
          <AnimatedRoutes />
        </main>

        <Footer />
      </div>

      
    </BrowserRouter>
  );
};

export default App;
