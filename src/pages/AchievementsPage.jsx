import { Link } from "react-router-dom";
import { FaArrowLeft, FaTrophy } from "react-icons/fa";
import PageTransition from "../components/PageTransition";

const achievements = [
  {
    rank: "06",
    title: "Bharat@100 Hackathon",
    detail: "6th Place - competed to build innovative technical solutions under tight deadlines.",
  },
  {
    rank: "07",
    title: "Code Aarambh Coding Competition",
    detail: "7th Position - demonstrated strong algorithmic problem-solving speed.",
  },
  {
    rank: "60H",
    title: "Core Java with Collections Training",
    detail: "Completed 60 hours of structured training focused on Java paradigms and collections.",
  },
];

const AchievementsPage = () => (
  <PageTransition>
    <div className="min-h-screen py-28 pb-24 px-4 sm:px-8 max-w-5xl mx-auto stripe-grid text-white">
      <div className="mb-10 border-b border-white/10 pb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white font-mono text-[12px] uppercase tracking-wider mb-4 transition-colors">
          <FaArrowLeft className="w-3 h-3" /> BACK TO HOME
        </Link>
        <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-[#05d9e8] font-bold">MILESTONES</p>
        <h1 className="text-[36px] sm:text-[52px] font-extrabold font-poppins tracking-tight mt-1">Achievements.</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {achievements.map((achievement) => (
          <article key={achievement.title} className="brutalist-panel rounded-3xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-8">
              <FaTrophy className="w-5 h-5 text-[#f9f002]" />
              <span className="font-mono text-[#ff2a6d] text-xl font-bold">{achievement.rank}</span>
            </div>
            <h2 className="text-white text-[19px] font-bold font-poppins">{achievement.title}</h2>
            <p className="text-zinc-300 text-[13px] mt-3 leading-relaxed">{achievement.detail}</p>
          </article>
        ))}
      </div>
    </div>
  </PageTransition>
);

export default AchievementsPage;
