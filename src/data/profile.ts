// Source of truth: Rayyan_Ahmed_AI_Engineer_Resume.docx, November 2026.
export const profile = {
  name: "Rayyan Ahmed",
  title: "Generative AI Engineer",
  email: "rayyanahmed265@yahoo.com",
  location: "Islamabad, Pakistan",
  site: "https://rayyan-portfolio-mu.vercel.app/",
  resume: "/Rayyan_Ahmed_AI_Engineer_Resume.pdf",
  github: "https://github.com/Rayyan9477",
  linkedin: "https://www.linkedin.com/in/rayyan-ahmed9477/",
};
export type Category = "all" | "healthcare" | "finance" | "automation";
export interface Project {
  id: string;
  name: string;
  category: Exclude<Category, "all">;
  domain: string;
  headline: string;
  summary: string;
  outcome: string;
  tags: string[];
  problem: string;
  architecture: string;
  safeguards: string;
  github?: string;
}
export const projects: Project[] = [
  {
    id: "medcodex",
    name: "MedCodex",
    category: "healthcare",
    domain: "Healthcare / private enterprise system",
    headline: "From clinical context to reviewed coding candidates.",
    summary:
      "A LangGraph multi-agent workflow that extracts clinical context, proposes ICD-10-CM, CPT, and HCPCS candidates, and validates them against available references.",
    outcome:
      "Approximately 40% improvement in medical-coding workflow efficiency.",
    tags: ["LangGraph", "Multi-agent systems", "AI observability", "LLMOps"],
    problem:
      "Move medical-coding teams from manual drafting toward reviewing and refining AI-generated outputs.",
    architecture:
      "Clinical context extraction → coding candidates → reference validation → consistency checks, with retry and escalation paths.",
    safeguards:
      "Provider-agnostic routing, PHI masking, structured outputs, and audit trails.",
  },
  {
    id: "prism",
    name: "Prism",
    category: "finance",
    domain: "Financial analytics / private enterprise system",
    headline: "Financial answers grounded in governed data.",
    summary:
      "An agentic GenAI platform using Text-to-SQL-grounded RAG and tool calling to produce decision-ready financial insights and reports.",
    outcome: "Recurring team analysis reduced from hours to minutes.",
    tags: ["Agentic RAG", "MCP", "SQL-grounded LLMs", "Evaluation"],
    problem:
      "Turn recurring financial analysis into an auditable workflow that teams can use to make decisions.",
    architecture:
      "Capability-aware routing and tool calling connect grounded retrieval to structured financial outputs. Deterministic calculations are separated from LLM reasoning.",
    safeguards:
      "Provenance, evaluation gates, structured outputs, and human review keep analysis auditable and reduce hallucination risk.",
  },
  {
    id: "auto-apply",
    name: "Auto Apply AI",
    category: "automation",
    domain: "Computer-use agents / open source",
    headline: "Job-search automation with people in control.",
    summary:
      "A browser-use agent platform for job discovery, semantic resume matching, ATS scoring, and tailored resume and cover-letter generation.",
    outcome:
      "Human-approved application workflows with observable browser automation.",
    tags: ["Browser Use", "Playwright", "LiteLLM", "AWS Bedrock"],
    problem:
      "Bring discovery, matching, document tailoring, and repetitive application steps into one coordinated workflow.",
    architecture:
      "Browser Use and Playwright agents are orchestrated with LiteLLM and Bedrock routing, FAISS retrieval, Redis queues, and WebSocket streaming.",
    safeguards:
      "Human approval for application workflows and CAPTCHA/2FA handoff keep people involved at consequential steps.",
    github:
      "https://github.com/Rayyan9477/AutoApply-AI-Agentic-Browser-Automation-for-Job-Search",
  },
];
export const roles = [
  {
    title: "AI Engineer",
    company: "Nobility RCM",
    location: "Islamabad, Pakistan",
    date: "Mar 2025 — Present",
    bullets: [
      "Design and deliver Generative AI systems for healthcare and RCM: financial analytics, medical coding, grounded question answering, document intelligence, and browser automation.",
      "Architect LangGraph and MCP workflows with agent state, tool calling, hybrid retrieval, retry logic, evaluation gates, and human review; connect them to governed billing and financial data through FastAPI.",
      "Engineer cloud and local inference paths with context engineering, provider-aware routing, PHI-aware controls, provenance, and deterministic calculations.",
    ],
  },
  {
    title: "Data Analyst",
    company: "OZIBOOK Tech Solutions",
    location: "Remote, India",
    date: "Oct 2024 — Jan 2025",
    bullets: [
      "Built preprocessing, schema-validation, class-balancing, and feature-engineering pipelines for claim-anomaly modeling; benchmarked Random Forest, XGBoost, and Logistic Regression to support model selection.",
    ],
  },
  {
    title: "Data Scientist (Machine Learning)",
    company: "Digital Empowerment Networks",
    location: "Islamabad, Pakistan",
    date: "Jul — Sep 2024",
    bullets: [
      "Developed and tuned business-KPI forecasting models with Pandas, NumPy, and scikit-learn, improving repeatability through structured feature pipelines, evaluation, and hyperparameter tuning.",
    ],
  },
];
export const skills = [
  {
    title: "Agentic systems",
    description: "From business requirements to coordinated agents and tools.",
    items: [
      "Harness Engineering",
      "LangGraph",
      "LangChain",
      "MCP servers",
      "Tool / function calling",
      "Structured outputs",
      "Deep Agents",
      "Context engineering",
    ],
  },
  {
    title: "Retrieval & evaluation",
    description: "Grounded answers with validation and human review.",
    items: [
      "RAG",
      "BM25 + FAISS",
      "Embeddings",
      "Semantic search",
      "Grounding",
      "LLM evaluation",
      "Guardrails",
      "Provenance",
      "Human-in-the-loop",
    ],
  },
  {
    title: "Models & inference",
    description: "Cloud and local model integration, training, and serving.",
    items: [
      "PyTorch",
      "Transformers",
      "Hugging Face",
      "VLMs / multimodal AI",
      "LoRA / QLoRA / PEFT",
      "Quantization",
      "llama.cpp",
      "vLLM",
      "LiteLLM",
      "AWS Bedrock",
    ],
  },
  {
    title: "Delivery & operations",
    description: "APIs, data flows, observability, and deployment.",
    items: [
      "Python",
      "SQL",
      "TypeScript",
      "FastAPI",
      "Redis / Celery",
      "SSE / WebSockets",
      "PostgreSQL",
      "Docker / Kubernetes",
      "CI/CD",
      "Langfuse",
      "PostHog",
      "Playwright / Browser Use",
    ],
  },
];
