// Projects
export const data = [
  {
    id: Math.random(),
    title: "Medical Compliance Agent",
    subtitle:
      "4-agent LangGraph system that reads clinical notes via a local VLM, extracts ICD-10/CPT/HCPCS codes with confidence scores, and validates through a 3-layer anti-hallucination pipeline. Fine-tuned Phi-3 published on Hugging Face. Runs 100% locally on CUDA.",
    github: "https://github.com/Rayyan9477/Medical-Compliance-Agent",
    liveUrl: "#",
  },
  {
    id: Math.random(),
    title: "Agentic Document Extraction",
    subtitle:
      "Enterprise zero-shot extraction engine using Qwen3-VL 8B that auto-detects document types, generates adaptive schemas, handles multi-record pages with cross-page dedup, and learns from corrections via Mem0 persistent memory. 4x speedup with parallel processing.",
    github:
      "https://github.com/Rayyan9477/Agentic-Document-Extraction-PDF",
    liveUrl: "#",
  },
  {
    id: Math.random(),
    title: "AutoApply AI",
    subtitle:
      "Full-stack AI platform (FastAPI + React + Redis) that discovers jobs, scores resumes via FAISS vector matching, tailors documents with LLM, and submits applications through Playwright browser automation. Human-in-the-loop review, ATS scoring, multi-provider LLM routing via LiteLLM.",
    github:
      "https://github.com/Rayyan9477/AutoApply-AI-Agentic-Browser-Automation-for-Job-Search",
    liveUrl: "#",
  },
  {
    id: Math.random(),
    title: "MLOps Pipeline — USD Volatility Forecasting",
    subtitle:
      "Production ML system: Airflow auto-retraining every 2 hours, FastAPI serving with real-time drift detection, Prometheus/Grafana observability (13 alert rules), MLflow tracking, DVC versioning, 8-service Docker Compose stack, 5 CI/CD workflows, 37 unit tests.",
    github:
      "https://github.com/Rayyan9477/MLOps-Pipeline-for-USD-Forecasting",
    liveUrl: "#",
  },
];
