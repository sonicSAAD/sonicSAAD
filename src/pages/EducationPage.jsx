import { Link } from "react-router-dom";
import { FaArrowLeft, FaGraduationCap } from "react-icons/fa";
import PageTransition from "../components/PageTransition";

const education = [
  {
    period: "2023 - 2027",
    institution: "United Institute of Technology, Prayagraj",
    program: "B.Tech in Computer Science and Engineering",
    result: "Currently pursuing",
  },
  {
    period: "2022",
    institution: "Bishop Johnson School & College",
    program: "Intermediate (Class XII)",
    result: "Score: 60%",
  },
  {
    period: "2020",
    institution: "Bishop Johnson School & College",
    program: "High School (Class X)",
    result: "Score: 80%",
  },
];

const EducationPage = () => (
  <PageTransition>
    <div className="min-h-screen py-28 pb-24 px-4 sm:px-8 max-w-5xl mx-auto stripe-grid text-white">
      <div className="mb-10 border-b border-white/10 pb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white font-mono text-[12px] uppercase tracking-wider mb-4 transition-colors">
          <FaArrowLeft className="w-3 h-3" /> BACK TO HOME
        </Link>
        <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-[#05d9e8] font-bold">ACADEMIC RECORD</p>
        <h1 className="text-[36px] sm:text-[52px] font-extrabold font-poppins tracking-tight mt-1">Education.</h1>
      </div>

      <div className="space-y-5">
        {education.map((entry, index) => (
          <article key={entry.program} className="brutalist-panel rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col sm:flex-row gap-5 sm:gap-8">
            <div className="flex items-center gap-3 sm:w-36 shrink-0">
              <FaGraduationCap className="text-[#ff2a6d] w-5 h-5" />
              <span className="font-mono text-[#05d9e8] text-[12px]">0{index + 1} / {entry.period}</span>
            </div>
            <div>
              <h2 className="text-white text-[20px] sm:text-[23px] font-bold font-poppins">{entry.program}</h2>
              <p className="text-zinc-300 text-[14px] mt-2">{entry.institution}</p>
              <p className="text-[#00ff9f] text-[12px] font-mono mt-3 uppercase tracking-wider">{entry.result}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </PageTransition>
);

export default EducationPage;
