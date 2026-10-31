import { motion } from "framer-motion";
import { useContext } from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { IoFlame } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";
import { AppContext } from "../../../App";
import { fadeIn } from "../../../variants";
import myImage from "../../../assets/my-logo.webp";

const HeaderBanner = () => {
  const context = useContext(AppContext);

  const { setActiveNav } = context as {
    setActiveNav: React.Dispatch<React.SetStateAction<string>>;
  };

  return (
    <div id="home" className="relative flex min-h-[90vh] items-center py-12 lg:min-h-[82vh]">
      <div className="container">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-12">
          {/* Mobile/Tablet image (hidden on desktop) */}
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView="show"
            className="mx-auto w-[240px] xsm:w-[280px] lg:hidden"
          >
            <div className="relative mx-auto rounded-3xl p-1 bg-gradient-to-tr from-cyan-500/40 via-violet-500/20 to-transparent">
              <div className="overflow-hidden rounded-3xl bg-surface/90 backdrop-blur-xl">
                <img
                  src={myImage}
                  alt="Rayyan Ahmed"
                  className="w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          <div className="flex-1 text-center font-secondary lg:text-left">
            {/* Status Pill Badge */}
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-mono text-cyan-300 backdrop-blur-md lg:mx-0"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
              </span>
              <span>Generative AI Engineer &bull; Nobility RCM</span>
            </motion.div>

            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              className="text-[48px] font-bold leading-[1.05] tracking-tight sm:text-[64px] lg:text-[84px]"
            >
              Rayyan <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">Ahmed</span>
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              className="mb-5 text-[24px] font-semibold uppercase leading-[1.15] text-slate-200 sm:text-[32px] lg:text-[42px]"
            >
              <span className="mr-3 text-slate-400">I build </span>
              <TypeAnimation
                sequence={[
                  "Agentic AI Systems",
                  2200,
                  "LangGraph Multi-Agent Workflows",
                  2200,
                  "Enterprise RAG & MCP Servers",
                  2200,
                  "Fine-Tuned LLMs (LoRA/QLoRA)",
                  2200,
                  "Autonomous Browser Agents",
                  2200,
                ]}
                speed={40}
                className="text-cyan-400 font-mono"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView="show"
              className="mx-auto mb-8 max-w-xl font-primary text-[0.95rem] leading-relaxed text-slate-300 lg:mx-0"
            >
              Generative AI Engineer with 2+ years of experience turning operational problems into
              end-to-end agentic AI solutions. I architect multi-agent workflows, fine-tune models,
              and deploy high-reliability pipelines with guardrails, hybrid retrieval, and human review
              across Healthcare (RCM), Finance, and Browser Automation.
            </motion.p>

            {/* Quick Proof-of-Work Metrics Strip */}
            <motion.div
              variants={fadeIn("up", 0.55)}
              initial="hidden"
              whileInView="show"
              className="mx-auto mb-8 grid grid-cols-2 gap-2.5 max-w-lg font-mono text-xs sm:grid-cols-4 lg:mx-0"
            >
              <div className="rounded-xl border border-white/10 bg-surface-card p-2.5 text-center">
                <div className="flex items-center justify-center gap-1 text-amber-400 font-bold">
                  <IoFlame className="text-sm" /> 460+
                </div>
                <div className="text-[10px] text-slate-400 uppercase mt-0.5">GitHub Streak</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-surface-card p-2.5 text-center">
                <div className="text-cyan-400 font-bold">40%</div>
                <div className="text-[10px] text-slate-400 uppercase mt-0.5">Coding Speedup</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-surface-card p-2.5 text-center">
                <div className="flex items-center justify-center gap-1 text-violet-400 font-bold">
                  <HiSparkles className="text-xs" /> 3rd Prize
                </div>
                <div className="text-[10px] text-slate-400 uppercase mt-0.5">Qwen LoRA Win</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-surface-card p-2.5 text-center">
                <div className="text-emerald-400 font-bold">CUDA</div>
                <div className="text-[10px] text-slate-400 uppercase mt-0.5">100% Local Inference</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              className="mx-auto mb-8 flex max-w-max flex-wrap items-center gap-3 lg:mx-0"
            >
              <a
                href="#portfolio"
                onClick={() => {
                  setActiveNav("#portfolio");
                }}
                className="btn-header h-[48px] rounded-full px-6 text-xs font-mono uppercase tracking-wider text-white flex items-center justify-center"
              >
                Explore Systems
              </a>
              <a
                href="#professional-experience"
                onClick={() => {
                  setActiveNav("#professional-experience");
                }}
                className="h-[48px] rounded-full px-6 text-xs font-mono uppercase tracking-wider text-slate-200 border border-white/15 bg-white/[0.04] hover:bg-cyan-500/10 hover:border-cyan-400/50 flex items-center justify-center transition-all"
              >
                Work History
              </a>
            </motion.div>

            {/* Socials & Profiles */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView="show"
              className="mx-auto flex max-w-max items-center gap-x-5 text-[1.25rem] text-slate-400 lg:mx-0"
            >
              <a
                href="https://github.com/Rayyan9477"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-cyan-400"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/rayyan-ahmed9477/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-cyan-400"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://x.com/Rayyan9477"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-cyan-400"
                aria-label="X (Twitter) Profile"
              >
                <FaTwitter />
              </a>
              <span className="text-xs font-mono text-slate-500 pl-2 border-l border-white/10">
                Islamabad, PK (Remote/Hybrid)
              </span>
            </motion.div>
          </div>

          {/* Desktop image container (strictly hidden on mobile/tablet to avoid double render) */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView="show"
            className="hidden lg:block w-[360px] flex-shrink-0"
          >
            <div className="relative mx-auto rounded-3xl p-1 bg-gradient-to-tr from-cyan-500/40 via-violet-500/20 to-transparent shadow-[0_0_50px_rgba(56,189,248,0.15)]">
              <div className="overflow-hidden rounded-3xl bg-surface/90 backdrop-blur-xl">
                <img
                  src={myImage}
                  alt="Rayyan Ahmed"
                  className="w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
