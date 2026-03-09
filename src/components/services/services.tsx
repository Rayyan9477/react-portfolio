import { BsCheck2All } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="services_container container grid grid-cols-3 gap-[3rem] max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-[1.5rem]">
        <article className="service hover:cursor-default hover:border-[#2f2f69] hover:bg-transparent max-md:h-auto">
          <div className="service__head">
            <h3>AI Agents & Automation</h3>
          </div>
          <ul className="service__list p-[1.8rem] pl-[1.6rem]">
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Multi-agent systems with LangGraph orchestration</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>LLM-powered browser automation (Playwright + Browser Use)</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>MCP server development and integrations</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Document extraction with Vision Language Models</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>End-to-end workflow automation pipelines</p>
            </li>
          </ul>
        </article>
        <article className="service hover:cursor-default hover:border-[#2f2f69] hover:bg-transparent max-md:h-auto">
          <div className="service__head">
            <h3>LLMs & RAG Pipelines</h3>
          </div>
          <ul className="service__list p-[1.8rem] pl-[1.6rem]">
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>RAG with hybrid retrieval (FAISS + BM25)</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>LLM fine-tuning and deployment (Phi-3, Qwen, Llama)</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Anti-hallucination validation systems</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Local/on-premise AI deployment (CUDA, GGUF)</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Multi-provider LLM routing and orchestration</p>
            </li>
          </ul>
        </article>
        <article className="service hover:cursor-default  hover:border-[#2f2f69] hover:bg-transparent max-md:h-auto">
          <div className="service__head">
            <h3>MLOps & Production ML</h3>
          </div>
          <ul className="service__list p-[1.8rem] pl-[1.6rem]">
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>End-to-end ML pipelines with automated retraining</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Model serving with drift detection and monitoring</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Observability (Prometheus, Grafana, MLflow)</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Containerized deployments (Docker, CI/CD)</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>NLP, Computer Vision, and deep learning solutions</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
