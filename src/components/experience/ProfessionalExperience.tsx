import { BsPatchCheckFill } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import { MdOutlineWork } from "react-icons/md";

const ProfessionalExperience = () => {
  return (
    <section id="professional-experience">
      <h5>What I Have Built in Production</h5>
      <h2>Professional Experience</h2>

      <div className="container space-y-6">
        {/* Competition Spotlight Banner */}
        <div className="relative overflow-hidden rounded-2xl border border-violet-500/30 bg-gradient-to-r from-violet-950/40 via-surface to-cyan-950/30 p-5 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start gap-3.5">
              <div className="rounded-xl bg-violet-500/20 p-2.5 text-violet-400 mt-0.5">
                <HiSparkles className="text-xl" />
              </div>
              <div>
                <span className="inline-block font-mono text-[11px] uppercase tracking-wider text-violet-300 font-semibold">
                  Featured Competition Win
                </span>
                <h3 className="text-lg font-bold text-white">
                  Third Prize &bull; Qwen-Image LoRA Training Competition
                </h3>
                <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  Trained and published a 1.7 GB LoRA on 12,000+ multimodal images across 40 categories on a single consumer GPU, optimizing PEFT/QLoRA hyperparameters and loss convergence.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 self-start sm:self-center">
              <span className="font-mono text-xs rounded-full border border-violet-400/40 bg-violet-500/10 px-3 py-1.5 text-violet-300">
                Single-GPU PEFT
              </span>
            </div>
          </div>
        </div>

        {/* Experience Items */}
        <div className="space-y-5">
          {/* Nobility RCM */}
          <div className="rounded-2xl border border-white/10 bg-surface/80 p-6 md:p-8 backdrop-blur-xl transition-all hover:border-cyan-500/40">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/5 pb-4 mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <MdOutlineWork className="text-cyan-400 text-lg" />
                  <h3 className="text-xl font-bold text-cyan-400">AI Engineer</h3>
                </div>
                <h4 className="text-slate-200 font-medium mt-1">Nobility RCM &bull; Healthcare & Revenue Cycle Management</h4>
              </div>
              <div className="text-left md:text-right">
                <span className="inline-block rounded-full bg-cyan-950/60 border border-cyan-800/50 px-3 py-1 font-mono text-xs text-cyan-300">
                  Mar 2025 – Present
                </span>
                <p className="text-xs text-slate-400 mt-1">Islamabad, Pakistan</p>
              </div>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300 leading-relaxed">
              <li>
                <strong className="text-white">Healthcare & RCM GenAI Systems:</strong> Design and deliver production Generative AI systems for healthcare and RCM, including agentic financial analytics (<span className="text-cyan-300">Prism</span>), clinical medical coding (<span className="text-cyan-300">MedCodex</span>), grounded question answering, document intelligence, and browser automation.
              </li>
              <li>
                <strong className="text-white">Multi-Agent LangGraph & MCP:</strong> Architect LangGraph and MCP workflows with agent state, tool calling, structured outputs, hybrid retrieval (BM25 + FAISS), retry logic, evaluation gates, and human review; connect them to governed billing and financial data through FastAPI.
              </li>
              <li>
                <strong className="text-white">Cloud & Local Inference:</strong> Engineer cloud (AWS Bedrock) and local (vLLM / CUDA) inference paths with prompt/context engineering, provider-aware routing, PHI-aware controls, provenance, and deterministic calculations for reliable, auditable financial outputs.
              </li>
            </ul>
          </div>

          {/* OZIBOOK */}
          <div className="rounded-2xl border border-white/10 bg-surface/80 p-6 md:p-8 backdrop-blur-xl transition-all hover:border-cyan-500/40">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/5 pb-4 mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <BsPatchCheckFill className="text-cyan-400 text-base" />
                  <h3 className="text-xl font-bold text-cyan-400">Data Analyst</h3>
                </div>
                <h4 className="text-slate-200 font-medium mt-1">OZIBOOK Tech Solutions</h4>
              </div>
              <div className="text-left md:text-right">
                <span className="inline-block rounded-full bg-slate-900 border border-white/10 px-3 py-1 font-mono text-xs text-slate-300">
                  Oct 2024 – Jan 2025
                </span>
                <p className="text-xs text-slate-400 mt-1">Remote &bull; India</p>
              </div>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300 leading-relaxed">
              <li>
                Built preprocessing, schema-validation, class-balancing, and feature-engineering pipelines for claim-anomaly modeling.
              </li>
              <li>
                Benchmarked Random Forest, XGBoost, and Logistic Regression to support production model selection, optimizing tabular classification accuracy.
              </li>
            </ul>
          </div>

          {/* Digital Empowerment Networks */}
          <div className="rounded-2xl border border-white/10 bg-surface/80 p-6 md:p-8 backdrop-blur-xl transition-all hover:border-cyan-500/40">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/5 pb-4 mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <BsPatchCheckFill className="text-cyan-400 text-base" />
                  <h3 className="text-xl font-bold text-cyan-400">Data Scientist (Machine Learning)</h3>
                </div>
                <h4 className="text-slate-200 font-medium mt-1">Digital Empowerment Networks</h4>
              </div>
              <div className="text-left md:text-right">
                <span className="inline-block rounded-full bg-slate-900 border border-white/10 px-3 py-1 font-mono text-xs text-slate-300">
                  Jul – Sep 2024
                </span>
                <p className="text-xs text-slate-400 mt-1">Islamabad, Pakistan</p>
              </div>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300 leading-relaxed">
              <li>
                Developed and tuned business-KPI forecasting models with Pandas, NumPy, and scikit-learn, improving repeatability through structured feature pipelines, model evaluation, and hyperparameter tuning.
              </li>
              <li>
                Implemented clustering and NLP tokenization pipelines, reducing false positives by 99.05% on anomaly detection benchmarks.
              </li>
            </ul>
          </div>

          {/* GSoC & FAST NUCES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-surface/80 p-5 backdrop-blur-xl">
              <h4 className="font-bold text-white text-base">Open Source Contributor</h4>
              <p className="text-xs font-mono text-cyan-400 mt-0.5">Google Summer of Code (GSOC) &bull; Apr – Aug 2024</p>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Contributed bug fixes and performance enhancements (+25% execution speed) across open-source repositories using distributed Git workflows.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-surface/80 p-5 backdrop-blur-xl">
              <h4 className="font-bold text-white text-base">Lab Demonstrator & BS Software Engineering</h4>
              <p className="text-xs font-mono text-cyan-400 mt-0.5">FAST NUCES Islamabad &bull; 2022 – 2026</p>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Facilitated hands-on programming labs for 50+ undergraduate students across data structures, OOP, and machine learning fundamentals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;
