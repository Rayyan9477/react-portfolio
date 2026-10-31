import { useState } from "react";
import { FaGithub, FaLock } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { IoFlame } from "react-icons/io5";
import { portData } from "../../index";
import { ProjectItem } from "./data/data";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "agentic" | "healthcare" | "mlops">("all");

  const filteredProjects = portData.filter((item: ProjectItem) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  return (
    <section id="portfolio">
      <h5>Production AI & Agentic Systems</h5>
      <h2>Featured Projects</h2>

      {/* Filter Tabs */}
      <div className="container mb-8 flex flex-wrap items-center justify-center gap-2">
        {[
          { key: "all", label: "All Systems" },
          { key: "agentic", label: "Agentic AI & RAG" },
          { key: "healthcare", label: "Healthcare & RCM" },
          { key: "mlops", label: "MLOps & MCP" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveFilter(tab.key as any)}
            className={`rounded-full px-4 py-1.5 text-xs font-mono transition-all ${
              activeFilter === tab.key
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                : "bg-surface/60 text-slate-400 border border-white/5 hover:text-slate-200 hover:border-white/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="portfolio__container container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((item: ProjectItem) => (
          <article
            key={item.id}
            className="portfolio__item group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-surface/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
          >
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                {item.badge && (
                  <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-950/40 px-2.5 py-0.5 font-mono text-[11px] font-medium text-cyan-300">
                    {item.badge}
                  </span>
                )}
                {item.isPrivate && (
                  <span className="flex items-center gap-1 font-mono text-[10px] text-amber-400/80 bg-amber-950/30 px-2 py-0.5 rounded border border-amber-800/40">
                    <FaLock className="text-[9px]" /> Enterprise NDA
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 my-3">
                {item.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="rounded-md bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-slate-400 border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-xs leading-relaxed text-slate-300 line-clamp-5 mb-5">
                {item.subtitle}
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
              {item.isPrivate ? (
                <span className="text-[11px] font-mono text-slate-400 italic">
                  Proprietary Nobility RCM Architecture
                </span>
              ) : (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <FaGithub className="text-sm" /> Source Code
                </a>
              )}

              {item.liveUrl && item.liveUrl !== "#" ? (
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-slate-300 hover:text-white transition-colors"
                >
                  Live Demo <FiExternalLink />
                </a>
              ) : (
                <span className="text-[10px] font-mono text-slate-500 uppercase">
                  {item.isPrivate ? "In Production" : "Open Source"}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* GitHub Streak & Profile Strip */}
      <div className="container mt-12">
        <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-gradient-to-r from-surface-elevated via-surface to-surface-elevated p-6 text-center backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-amber-400 font-bold font-mono text-base">
              <IoFlame className="text-2xl animate-bounce" />
              <span>460+ Days GitHub Streak</span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-white/10"></div>
            <p className="text-xs text-slate-300">
              53+ open-source repositories & active daily contributions.
            </p>
            <a
              href="https://github.com/Rayyan9477"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-cyan-950/30 px-4 py-1.5 font-mono text-xs font-medium text-cyan-300 hover:bg-cyan-500/20 transition-all"
            >
              <FaGithub /> Visit GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
