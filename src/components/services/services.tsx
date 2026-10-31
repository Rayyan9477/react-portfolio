import { BsCheck2All } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>Enterprise AI Capabilities</h5>
      <h2>Services & Solutions</h2>
      <div className="services__container container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Service 1 */}
        <article className="service group rounded-2xl border border-white/10 bg-surface/85 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1">
          <div className="service__head">
            <h3>AI Agents & Orchestration</h3>
          </div>
          <ul className="service__list p-6 space-y-3">
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Multi-agent architectures with LangGraph state machines & routing</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Autonomous browser agents (Browser Use + Playwright automation)</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Custom Model Context Protocol (MCP) server development</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Human-in-the-loop review, retry logic & escalation gates</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>End-to-end task automation across complex enterprise portals</p>
            </li>
          </ul>
        </article>

        {/* Service 2 */}
        <article className="service group rounded-2xl border border-white/10 bg-surface/85 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1">
          <div className="service__head">
            <h3>Enterprise RAG & Fine-Tuning</h3>
          </div>
          <ul className="service__list p-6 space-y-3">
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Hybrid retrieval pipelines (FAISS vector + BM25 keyword matching)</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Single-GPU LoRA/QLoRA and PEFT model fine-tuning (Qwen, Phi-3)</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>3-layer anti-hallucination validation & grounding pipelines</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Local on-premise inference deployments (vLLM, CUDA, GGUF)</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Provider-agnostic routing via LiteLLM & AWS Bedrock</p>
            </li>
          </ul>
        </article>

        {/* Service 3 */}
        <article className="service group rounded-2xl border border-white/10 bg-surface/85 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1">
          <div className="service__head">
            <h3>LLMOps & Observability</h3>
          </div>
          <ul className="service__list p-6 space-y-3">
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Production ML/LLM pipelines with automated data flows</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Real-time model serving with drift detection & monitoring</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>AI Observability with Langfuse, PostHog, Prometheus & Grafana</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Containerized deployments with Docker, Kubernetes & CI/CD</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Strict PHI & enterprise security compliance controls</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
