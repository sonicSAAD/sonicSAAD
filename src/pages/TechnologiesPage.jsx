import { Link } from "react-router-dom";
import { FaArrowLeft, FaCode, FaDatabase, FaMobileAlt, FaTools } from "react-icons/fa";
import PageTransition from "../components/PageTransition";

const technologyGroups = [
  {
    title: "Programming",
    icon: FaCode,
    items: ["Java", "Dart", "C++", "Python", "SQL"],
  },
  {
    title: "Mobile Development",
    icon: FaMobileAlt,
    items: ["Flutter", "Android Development", "BLoC / Cubit", "Dio", "Swing"],
  },
  {
    title: "Core Computer Science",
    icon: FaDatabase,
    items: ["Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems", "Networks"],
  },
  {
    title: "Tools & IDEs",
    icon: FaTools,
    items: ["Git", "GitHub", "Android Studio", "VS Code", "Shared Preferences"],
  },
];

const TechnologiesPage = () => (
  <PageTransition>
    <div className="min-h-screen py-28 pb-24 px-4 sm:px-8 max-w-7xl mx-auto stripe-grid text-white">
      <div className="mb-10 border-b border-white/10 pb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white font-mono text-[12px] uppercase tracking-wider mb-4 transition-colors">
          <FaArrowLeft className="w-3 h-3" /> BACK TO HOME
        </Link>
        <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-[#05d9e8] font-bold">DEVELOPER ARSENAL</p>
        <h1 className="text-[36px] sm:text-[52px] font-extrabold font-poppins tracking-tight mt-1">Technologies.</h1>
        <p className="text-zinc-400 text-[15px] sm:text-[17px] mt-3 max-w-3xl leading-relaxed">
          The languages, frameworks, and core computer science foundations used to build Mohammad Saad&apos;s applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {technologyGroups.map(({ title, icon: Icon, items }) => (
          <section key={title} className="brutalist-panel rounded-3xl p-6 sm:p-8 border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#05d9e8]/10 border border-[#05d9e8]/30 flex items-center justify-center">
                <Icon className="w-5 h-5 text-[#05d9e8]" />
              </div>
              <h2 className="text-white text-[21px] font-bold font-poppins">{title}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span key={item} className="px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-zinc-300 text-[12px] font-mono">
                  {item}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  </PageTransition>
);

export default TechnologiesPage;
