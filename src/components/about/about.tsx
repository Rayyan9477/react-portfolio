import { useContext } from "react";
import { FaAward } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { IoFlame } from "react-icons/io5";
import { AppContext } from "../../App";
import aboutImage from "../../assets/about-image.webp";

const About = () => {
  const context = useContext(AppContext);

  const { setActiveNav } = context as {
    setActiveNav: React.Dispatch<React.SetStateAction<string>>;
  };

  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="about__container grid-cols-35-50 container grid gap-[8%] max-md:grid-cols-1 max-md:place-items-center max-md:gap-8">
        {/* Profile visual */}
        <div className="about__myself relative grid aspect-square w-full place-items-center rounded-3xl p-1 bg-gradient-to-tr from-cyan-500/30 via-violet-500/20 to-transparent max-md:w-[50%] max-sm:w-[70%]">
          <div className="about__image w-full h-full overflow-hidden rounded-3xl bg-surface/90">
            <img
              src={aboutImage}
              alt="Rayyan Ahmed"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Content */}
        <div className="about__content max-sm:text-center">
          {/* 3 Metric Cards */}
          <div className="about__cards grid grid-cols-1 gap-3 sm:grid-cols-3">
            <article className="about__card">
              <FaAward className="about__icon text-cyan-400" />
              <h5>Experience</h5>
              <small>2+ Years GenAI Systems</small>
            </article>
            <article className="about__card border-amber-500/20 hover:border-amber-400/50">
              <IoFlame className="about__icon text-amber-400" />
              <h5>GitHub Streak</h5>
              <small>460+ Days Consecutive</small>
            </article>
            <article className="about__card border-violet-500/20 hover:border-violet-400/50">
              <HiSparkles className="about__icon text-violet-400" />
              <h5>Competition</h5>
              <small>3rd Prize Qwen LoRA</small>
            </article>
          </div>

          <div className="my-6 space-y-3.5 text-[0.95rem] leading-relaxed text-slate-300">
            <p>
              I am a <strong className="text-cyan-300 font-semibold">Generative AI Engineer</strong> who turns complex operational problems into reliable, end-to-end agentic AI solutions. I design retrieval and data flows, orchestrate agents and tools, integrate cloud and local models, and implement strict APIs, evaluation guardrails, and human review gates.
            </p>
            <p>
              At <strong className="text-white font-semibold">Nobility RCM</strong>, I architect production GenAI systems across healthcare and revenue cycle management:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300 text-sm text-left">
              <li>
                <strong className="text-cyan-400">MedCodex</strong>: A 4-agent LangGraph workflow that extracts clinical context, proposes ICD-10-CM/CPT/HCPCS codes, and applies 3-layer anti-hallucination validation with escalation paths — boosting coding efficiency by <span className="font-mono text-emerald-400 font-bold">40%</span>.
              </li>
              <li>
                <strong className="text-cyan-400">Prism</strong>: An agentic financial analytics platform using Text-to-SQL grounded RAG with deterministic calculations isolated from LLM reasoning, producing auditable reports in minutes.
              </li>
              <li>
                <strong className="text-cyan-400">Autonomous Browser Agents</strong>: Browser-use and Playwright agents navigating complex billing portals, claim extraction, and form submission.
              </li>
            </ul>
            <p>
              Beyond production deployments, I placed <strong className="text-violet-400 font-semibold">3rd Prize in the global Qwen-Image LoRA Training Competition</strong> (training a 1.7 GB LoRA on 12,000+ multimodal images across 40 categories on a single consumer GPU). I hold a BS in Software Engineering from <strong className="text-white">FAST NUCES Islamabad</strong> (Class of 2026).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 max-sm:justify-center">
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={() => {
                setActiveNav("#contact");
              }}
            >
              Let's Discuss AI
            </a>
            <a
              href="#portfolio"
              className="btn"
              onClick={() => {
                setActiveNav("#portfolio");
              }}
            >
              View Featured Systems
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
