import { BsPatchCheckFill } from "react-icons/bs";
import { FaBrain, FaJava, FaRobot } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";
import {
  SiAmazonaws,
  SiApacheairflow,
  SiCplusplus,
  SiDocker,
  SiFastapi,
  SiGrafana,
  SiKubernetes,
  SiPostgresql,
  SiPrometheus,
  SiPython,
  SiPytorch,
  SiR,
  SiRedis,
  SiScikitlearn,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Technical Capabilities</h5>
      <h2>Skills & Architecture</h2>

      <div className="container space-y-6">
        {/* Row 1: Generative AI & Agentic Systems */}
        <div className="rounded-2xl border border-cyan-500/30 bg-surface/85 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-3">
            <FaRobot className="text-cyan-400 text-xl" />
            <h3 className="text-lg font-bold text-white">
              Generative AI & Agentic Systems
            </h3>
            <span className="ml-auto font-mono text-[10px] uppercase text-cyan-400 bg-cyan-950/50 px-2.5 py-0.5 rounded border border-cyan-800/40">
              Core Specialty
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-xs font-mono">
            {[
              "LangGraph Multi-Agent",
              "MCP Servers & Clients",
              "Tool / Function Calling",
              "Structured Outputs (Pydantic)",
              "Deep Agents & State Machines",
              "Context Engineering",
              "Browser Use & Playwright",
              "Human-in-the-Loop Gates",
            ].map((skill, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-2.5 text-slate-200 hover:border-cyan-400/40 hover:bg-cyan-950/20 transition-all"
              >
                <BsPatchCheckFill className="text-cyan-400 flex-shrink-0 text-xs" />
                <span className="truncate">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Two Columns: RAG/Safety & Models/Fine-Tuning */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* RAG, Evaluation & Safety */}
          <div className="rounded-2xl border border-white/10 bg-surface/85 p-6 backdrop-blur-xl hover:border-cyan-500/30 transition-all">
            <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-3">
              <HiOutlineSparkles className="text-cyan-400 text-xl" />
              <h3 className="text-base font-bold text-white">
                RAG, Evaluation & Safety
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-2.5 text-xs font-mono">
              {[
                "Hybrid Search (BM25+FAISS)",
                "Semantic Rerankers",
                "Grounding & Provenance",
                "Anti-Hallucination Gates",
                "LLM Evaluation & Benchmarks",
                "PHI / Sensitive Data Masking",
                "GraphRAG & Vector DBs",
                "Guardrails & Fallback Logic",
              ].map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-2 text-slate-300"
                >
                  <BsPatchCheckFill className="text-cyan-400 flex-shrink-0 text-xs" />
                  <span className="truncate">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Models, Fine-Tuning & Inference */}
          <div className="rounded-2xl border border-white/10 bg-surface/85 p-6 backdrop-blur-xl hover:border-violet-500/30 transition-all">
            <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-3">
              <FaBrain className="text-violet-400 text-xl" />
              <h3 className="text-base font-bold text-white">
                Models, Fine-Tuning & Inference
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-2.5 text-xs font-mono">
              {[
                "LoRA / QLoRA / PEFT",
                "vLLM & CUDA Deployment",
                "Vision Language Models",
                "llama.cpp & GGUF Quant",
                "LiteLLM Provider Routing",
                "AWS Bedrock Model APIs",
                "PyTorch & Transformers",
                "Single-GPU Optimization",
              ].map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-2 text-slate-300"
                >
                  <BsPatchCheckFill className="text-violet-400 flex-shrink-0 text-xs" />
                  <span className="truncate">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 3: Two Columns: LLMOps/DevOps & Languages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LLMOps & Infrastructure */}
          <div className="rounded-2xl border border-white/10 bg-surface/85 p-6 backdrop-blur-xl hover:border-emerald-500/30 transition-all">
            <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-3">
              <SiDocker className="text-emerald-400 text-xl" />
              <h3 className="text-base font-bold text-white">
                LLMOps & Infrastructure
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-2.5 text-xs font-mono">
              {[
                "FastAPI & SSE/WebSockets",
                "Redis Queues & Celery",
                "Docker & Kubernetes",
                "Langfuse AI Observability",
                "PostHog User Analytics",
                "Airflow Scheduled Pipelines",
                "Prometheus & Grafana Alerts",
                "PostgreSQL & CI/CD",
              ].map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-2 text-slate-300"
                >
                  <BsPatchCheckFill className="text-emerald-400 flex-shrink-0 text-xs" />
                  <span className="truncate">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Core Stacks with Vector Icons */}
          <div className="rounded-2xl border border-white/10 bg-surface/85 p-6 backdrop-blur-xl hover:border-cyan-500/30 transition-all">
            <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-3">
              <SiPython className="text-amber-400 text-xl" />
              <h3 className="text-base font-bold text-white">
                Languages & Frameworks
              </h3>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 text-center">
              {[
                { name: "Python", icon: <SiPython className="text-amber-400" /> },
                { name: "TypeScript", icon: <SiTypescript className="text-sky-400" /> },
                { name: "SQL", icon: <SiPostgresql className="text-cyan-400" /> },
                { name: "PyTorch", icon: <SiPytorch className="text-orange-400" /> },
                { name: "FastAPI", icon: <SiFastapi className="text-teal-400" /> },
                { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
                { name: "Redis", icon: <SiRedis className="text-red-400" /> },
                { name: "AWS", icon: <SiAmazonaws className="text-yellow-400" /> },
                { name: "R", icon: <SiR className="text-blue-300" /> },
                { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
                { name: "Java", icon: <FaJava className="text-red-500" /> },
                { name: "Scikit", icon: <SiScikitlearn className="text-amber-500" /> },
              ].map((lang, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center rounded-xl border border-white/5 bg-white/[0.02] p-2.5 hover:border-cyan-400/40 hover:bg-cyan-950/10 transition-all"
                >
                  <span className="text-lg mb-1">{lang.icon}</span>
                  <span className="text-[11px] font-mono text-slate-200">{lang.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
