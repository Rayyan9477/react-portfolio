export interface ProjectItem {
  id: string;
  title: string;
  badge?: string;
  category: "all" | "agentic" | "healthcare" | "mlops";
  tags: string[];
  subtitle: string;
  github?: string;
  liveUrl?: string;
  isPrivate?: boolean;
}

export const data: ProjectItem[] = [
  {
    id: "medcodex-rcm",
    title: "MedCodex: Multi-Agent Clinical Coding",
    badge: "40% Efficiency Boost",
    category: "healthcare",
    tags: ["LangGraph", "Multi-Agent", "ICD-10/CPT", "AI Observability", "vLLM"],
    subtitle:
      "Enterprise LangGraph multi-agent workflow extracting clinical context, proposing ICD-10-CM/CPT/HCPCS codes, and validating through a 3-layer anti-hallucination pipeline. Shifted medical coding teams from manual drafting to reviewing AI outputs with PHI masking and full audit trails.",
    isPrivate: true,
    github: "https://github.com/Rayyan9477",
    liveUrl: "#",
  },
  {
    id: "prism-finance",
    title: "Prism: Financial Intelligence Platform",
    badge: "Enterprise Production",
    category: "agentic",
    tags: ["Agentic RAG", "MCP", "SQL-Grounded LLMs", "Evaluation & Guardrails"],
    subtitle:
      "Agentic GenAI platform for Finance using Text-to-SQL grounded RAG and tool calling, reducing recurring team analysis from hours to minutes. Separated deterministic calculations from LLM reasoning, adding capability-aware routing, provenance, and evaluation gates.",
    isPrivate: true,
    github: "https://github.com/Rayyan9477",
    liveUrl: "#",
  },
  {
    id: "auto-apply-ai",
    title: "Auto Apply AI: Computer-Use Agent",
    badge: "Open Source",
    category: "agentic",
    tags: ["Computer-Use Agents", "Browser Use", "Playwright", "LiteLLM", "Redis"],
    subtitle:
      "Autonomous browser-use agent platform for job discovery, semantic resume-job matching, ATS scoring, and human-approved application workflows. Orchestrates Browser Use & Playwright with LiteLLM/Bedrock routing, FAISS retrieval, Redis queues, and human 2FA handoff.",
    isPrivate: false,
    github:
      "https://github.com/Rayyan9477/AutoApply-AI-Agentic-Browser-Automation-for-Job-Search",
    liveUrl: "#",
  },
  {
    id: "agentic-doc-extraction",
    title: "Agentic Document Extraction Engine",
    badge: "Multimodal VLM",
    category: "agentic",
    tags: ["Qwen2.5-VL", "Multimodal", "Adaptive Schema", "Mem0 Memory"],
    subtitle:
      "Zero-shot extraction engine utilizing Qwen-VL that auto-detects complex document structures, generates adaptive schemas, handles multi-record pages with cross-page deduplication, and learns from corrections via Mem0 persistent memory with 4x parallel speedup.",
    isPrivate: false,
    github: "https://github.com/Rayyan9477/Agentic-Document-Extraction-PDF",
    liveUrl: "#",
  },
  {
    id: "linkedin-mcp-server",
    title: "LinkedIn MCP Server",
    badge: "Model Context Protocol",
    category: "mlops",
    tags: ["MCP Protocol", "Claude Desktop", "FastAPI", "Tool Calling"],
    subtitle:
      "Production Model Context Protocol (MCP) server enabling frontier LLM assistants to programmatically inspect job postings, analyze professional profiles, and execute contextual agentic tasks.",
    isPrivate: false,
    github: "https://github.com/Rayyan9477/linkedin_mcp",
    liveUrl: "#",
  },
  {
    id: "mlops-usd-pipeline",
    title: "MLOps Pipeline — USD Volatility",
    badge: "Production MLOps",
    category: "mlops",
    tags: ["Airflow", "FastAPI", "Prometheus", "Grafana", "MLflow", "Docker"],
    subtitle:
      "Production ML system with Airflow auto-retraining every 2 hours, FastAPI inference with real-time drift detection, Prometheus/Grafana observability (13 alert rules), MLflow registry, 8-service Docker Compose stack, and 37 automated tests.",
    isPrivate: false,
    github: "https://github.com/Rayyan9477/MLOps-Pipeline-for-USD-Forecasting",
    liveUrl: "#",
  },
];
