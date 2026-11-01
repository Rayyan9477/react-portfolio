# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: portfolio.spec.ts >> unconfigured contact prepares a draft without losing input
- Location: tests\e2e\portfolio.spec.ts:50:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByLabel('Full name')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e6]:
      - link [ref=e7] [cursor=pointer]:
        - /url: "#"
        - paragraph [ref=e9]: Rayyan.ai
      - generic [ref=e10]:
        - link "Download Resume" [ref=e11] [cursor=pointer]:
          - /url: /Rayyan_Ahmed_AI_Engineer_Resume.pdf
        - link "Contact Me" [ref=e12] [cursor=pointer]:
          - /url: "#contact"
  - generic [ref=e15]:
    - generic [ref=e16]:
      - generic [ref=e17]: Generative AI Engineer • Nobility RCM
      - heading "Rayyan Ahmed" [level=1] [ref=e22]
      - generic [ref=e23]: I build Agentic AI Systems|
      - paragraph [ref=e24]: Generative AI Engineer with 2+ years of experience turning operational problems into end-to-end agentic AI solutions. I architect multi-agent workflows, fine-tune models, and deploy high-reliability pipelines with guardrails, hybrid retrieval, and human review across Healthcare (RCM), Finance, and Browser Automation.
      - generic [ref=e25]:
        - generic [ref=e26]:
          - generic [ref=e27]: 460+
          - generic [ref=e30]: GitHub Streak
        - generic [ref=e31]:
          - generic [ref=e32]: 40%
          - generic [ref=e33]: Coding Speedup
        - generic [ref=e34]:
          - generic [ref=e35]: 3rd Prize
          - generic [ref=e38]: Qwen LoRA Win
        - generic [ref=e39]:
          - generic [ref=e40]: CUDA
          - generic [ref=e41]: 100% Local Inference
      - generic [ref=e42]:
        - link "Explore Systems" [ref=e43] [cursor=pointer]:
          - /url: "#portfolio"
        - link "Work History" [ref=e44] [cursor=pointer]:
          - /url: "#professional-experience"
      - generic [ref=e45]:
        - link "GitHub Profile" [ref=e46] [cursor=pointer]:
          - /url: https://github.com/Rayyan9477
        - link "LinkedIn Profile" [ref=e49] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/rayyan-ahmed9477/
        - link "X (Twitter) Profile" [ref=e52] [cursor=pointer]:
          - /url: https://x.com/Rayyan9477
        - generic [ref=e55]: Islamabad, PK (Remote/Hybrid)
    - img "Rayyan Ahmed" [ref=e59]
  - navigation "Quick Navigation" [ref=e60]:
    - link "Home" [ref=e61] [cursor=pointer]:
      - /url: "#"
    - link "About Me" [ref=e64] [cursor=pointer]:
      - /url: "#about"
    - link "Work Experience" [ref=e67] [cursor=pointer]:
      - /url: "#professional-experience"
    - link "Projects & Systems" [ref=e71] [cursor=pointer]:
      - /url: "#portfolio"
    - link "Skills & Stack" [ref=e75] [cursor=pointer]:
      - /url: "#experience"
    - link "Services" [ref=e78] [cursor=pointer]:
      - /url: "#services"
    - link "Contact" [ref=e81] [cursor=pointer]:
      - /url: "#contact"
  - generic [ref=e84]:
    - heading "Get to know" [level=5] [ref=e85]
    - heading "About Me" [level=2] [ref=e86]
    - generic [ref=e87]:
      - img "Rayyan Ahmed" [ref=e90]
      - generic [ref=e91]:
        - generic [ref=e92]:
          - article [ref=e93]:
            - heading "Experience" [level=5] [ref=e96]
            - generic [ref=e97]: 2+ Years GenAI Systems
          - article [ref=e98]:
            - heading "GitHub Streak" [level=5] [ref=e101]
            - generic [ref=e102]: 460+ Days Consecutive
          - article [ref=e103]:
            - heading "Competition" [level=5] [ref=e106]
            - generic [ref=e107]: 3rd Prize Qwen LoRA
        - generic [ref=e108]:
          - paragraph [ref=e109]:
            - text: I am a
            - strong [ref=e110]: Generative AI Engineer
            - text: who turns complex operational problems into reliable, end-to-end agentic AI solutions. I design retrieval and data flows, orchestrate agents and tools, integrate cloud and local models, and implement strict APIs, evaluation guardrails, and human review gates.
          - paragraph [ref=e111]:
            - text: At
            - strong [ref=e112]: Nobility RCM
            - text: ", I architect production GenAI systems across healthcare and revenue cycle management:"
          - list [ref=e113]:
            - listitem [ref=e114]:
              - strong [ref=e115]: MedCodex
              - text: ": A 4-agent LangGraph workflow that extracts clinical context, proposes ICD-10-CM/CPT/HCPCS codes, and applies 3-layer anti-hallucination validation with escalation paths — boosting coding efficiency by 40%."
            - listitem [ref=e116]:
              - strong [ref=e117]: Prism
              - text: ": An agentic financial analytics platform using Text-to-SQL grounded RAG with deterministic calculations isolated from LLM reasoning, producing auditable reports in minutes."
            - listitem [ref=e118]:
              - strong [ref=e119]: Autonomous Browser Agents
              - text: ": Browser-use and Playwright agents navigating complex billing portals, claim extraction, and form submission."
          - paragraph [ref=e120]:
            - text: Beyond production deployments, I placed
            - strong [ref=e121]: 3rd Prize in the global Qwen-Image LoRA Training Competition
            - text: (training a 1.7 GB LoRA on 12,000+ multimodal images across 40 categories on a single consumer GPU). I hold a BS in Software Engineering from
            - strong [ref=e122]: FAST NUCES Islamabad
            - text: (Class of 2026).
        - generic [ref=e123]:
          - link "Let's Discuss AI" [ref=e124] [cursor=pointer]:
            - /url: "#contact"
          - link "View Featured Systems" [ref=e125] [cursor=pointer]:
            - /url: "#portfolio"
  - generic [ref=e126]:
    - heading "What I Have Built in Production" [level=5] [ref=e127]
    - heading "Professional Experience" [level=2] [ref=e128]
    - generic [ref=e129]:
      - generic [ref=e131]:
        - generic [ref=e136]:
          - generic [ref=e137]: Featured Competition Win
          - heading "Third Prize • Qwen-Image LoRA Training Competition" [level=3] [ref=e138]
          - paragraph [ref=e139]: Trained and published a 1.7 GB LoRA on 12,000+ multimodal images across 40 categories on a single consumer GPU, optimizing PEFT/QLoRA hyperparameters and loss convergence.
        - generic [ref=e140]: Single-GPU PEFT
      - generic [ref=e141]:
        - generic [ref=e142]:
          - generic [ref=e143]:
            - generic [ref=e144]:
              - heading "AI Engineer" [level=3] [ref=e149]
              - heading "Nobility RCM • Healthcare & Revenue Cycle Management" [level=4] [ref=e150]
            - generic [ref=e151]:
              - generic [ref=e152]: Mar 2025 – Present
              - paragraph [ref=e153]: Islamabad, Pakistan
          - list [ref=e154]:
            - listitem [ref=e155]:
              - strong [ref=e156]: "Healthcare & RCM GenAI Systems:"
              - text: Design and deliver production Generative AI systems for healthcare and RCM, including agentic financial analytics (Prism), clinical medical coding (MedCodex), grounded question answering, document intelligence, and browser automation.
            - listitem [ref=e157]:
              - strong [ref=e158]: "Multi-Agent LangGraph & MCP:"
              - text: Architect LangGraph and MCP workflows with agent state, tool calling, structured outputs, hybrid retrieval (BM25 + FAISS), retry logic, evaluation gates, and human review; connect them to governed billing and financial data through FastAPI.
            - listitem [ref=e159]:
              - strong [ref=e160]: "Cloud & Local Inference:"
              - text: Engineer cloud (AWS Bedrock) and local (vLLM / CUDA) inference paths with prompt/context engineering, provider-aware routing, PHI-aware controls, provenance, and deterministic calculations for reliable, auditable financial outputs.
        - generic [ref=e161]:
          - generic [ref=e162]:
            - generic [ref=e163]:
              - heading "Data Analyst" [level=3] [ref=e167]
              - heading "OZIBOOK Tech Solutions" [level=4] [ref=e168]
            - generic [ref=e169]:
              - generic [ref=e170]: Oct 2024 – Jan 2025
              - paragraph [ref=e171]: Remote • India
          - list [ref=e172]:
            - listitem [ref=e173]: Built preprocessing, schema-validation, class-balancing, and feature-engineering pipelines for claim-anomaly modeling.
            - listitem [ref=e174]: Benchmarked Random Forest, XGBoost, and Logistic Regression to support production model selection, optimizing tabular classification accuracy.
        - generic [ref=e175]:
          - generic [ref=e176]:
            - generic [ref=e177]:
              - heading "Data Scientist (Machine Learning)" [level=3] [ref=e181]
              - heading "Digital Empowerment Networks" [level=4] [ref=e182]
            - generic [ref=e183]:
              - generic [ref=e184]: Jul – Sep 2024
              - paragraph [ref=e185]: Islamabad, Pakistan
          - list [ref=e186]:
            - listitem [ref=e187]: Developed and tuned business-KPI forecasting models with Pandas, NumPy, and scikit-learn, improving repeatability through structured feature pipelines, model evaluation, and hyperparameter tuning.
            - listitem [ref=e188]: Implemented clustering and NLP tokenization pipelines, reducing false positives by 99.05% on anomaly detection benchmarks.
        - generic [ref=e189]:
          - generic [ref=e190]:
            - heading "Open Source Contributor" [level=4] [ref=e191]
            - paragraph [ref=e192]: Google Summer of Code (GSOC) • Apr – Aug 2024
            - paragraph [ref=e193]: Contributed bug fixes and performance enhancements (+25% execution speed) across open-source repositories using distributed Git workflows.
          - generic [ref=e194]:
            - heading "Lab Demonstrator & BS Software Engineering" [level=4] [ref=e195]
            - paragraph [ref=e196]: FAST NUCES Islamabad • 2022 – 2026
            - paragraph [ref=e197]: Facilitated hands-on programming labs for 50+ undergraduate students across data structures, OOP, and machine learning fundamentals.
  - generic [ref=e198]:
    - heading "Production AI & Agentic Systems" [level=5] [ref=e199]
    - heading "Featured Projects" [level=2] [ref=e200]
    - generic [ref=e201]:
      - button "All Systems" [ref=e202] [cursor=pointer]
      - button "Agentic AI & RAG" [ref=e203] [cursor=pointer]
      - button "Healthcare & RCM" [ref=e204] [cursor=pointer]
      - button "MLOps & MCP" [ref=e205] [cursor=pointer]
    - generic [ref=e206]:
      - article [ref=e207]:
        - generic [ref=e208]:
          - generic [ref=e209]:
            - generic [ref=e210]: 40% Efficiency Boost
            - generic [ref=e211]: Enterprise NDA
          - 'heading "MedCodex: Multi-Agent Clinical Coding" [level=3] [ref=e214]'
          - generic [ref=e215]:
            - generic [ref=e216]: LangGraph
            - generic [ref=e217]: Multi-Agent
            - generic [ref=e218]: ICD-10/CPT
            - generic [ref=e219]: AI Observability
            - generic [ref=e220]: vLLM
          - paragraph [ref=e221]: Enterprise LangGraph multi-agent workflow extracting clinical context, proposing ICD-10-CM/CPT/HCPCS codes, and validating through a 3-layer anti-hallucination pipeline with human-in-the-loop escalation. Shifted medical coding teams from manual drafting to reviewing AI outputs with PHI masking and full audit trails.
        - generic [ref=e222]:
          - generic [ref=e223]: Proprietary Nobility RCM Architecture
          - generic [ref=e224]: In Production
      - article [ref=e225]:
        - generic [ref=e226]:
          - generic [ref=e227]:
            - generic [ref=e228]: Enterprise Production
            - generic [ref=e229]: Enterprise NDA
          - 'heading "Prism: Financial Intelligence Platform" [level=3] [ref=e232]'
          - generic [ref=e233]:
            - generic [ref=e234]: Agentic RAG
            - generic [ref=e235]: MCP
            - generic [ref=e236]: SQL-Grounded LLMs
            - generic [ref=e237]: Evaluation & Guardrails
          - paragraph [ref=e238]: Agentic GenAI platform for Finance using Text-to-SQL grounded RAG and tool calling, reducing recurring team analysis from hours to minutes. Separated deterministic calculations from LLM reasoning, adding capability-aware routing, provenance, and evaluation gates to eliminate mathematical hallucinations.
        - generic [ref=e239]:
          - generic [ref=e240]: Proprietary Nobility RCM Architecture
          - generic [ref=e241]: In Production
      - article [ref=e242]:
        - generic [ref=e243]:
          - generic [ref=e244]: Open Source
          - 'heading "Auto Apply AI: Computer-Use Agent" [level=3] [ref=e246]'
          - generic [ref=e247]:
            - generic [ref=e248]: Computer-Use Agents
            - generic [ref=e249]: Browser Use
            - generic [ref=e250]: Playwright
            - generic [ref=e251]: LiteLLM
            - generic [ref=e252]: Redis
          - paragraph [ref=e253]: Autonomous browser-use agent platform for job discovery, semantic resume-job matching, ATS scoring, and human-approved application workflows. Orchestrates Browser Use & Playwright with LiteLLM/Bedrock routing, FAISS retrieval, Redis queues, and human 2FA handoff.
        - generic [ref=e254]:
          - link "Source Code" [ref=e255] [cursor=pointer]:
            - /url: https://github.com/Rayyan9477/AutoApply-AI-Agentic-Browser-Automation-for-Job-Search
          - generic [ref=e258]: Open Source
      - article [ref=e259]:
        - generic [ref=e260]:
          - generic [ref=e261]: Multimodal VLM
          - heading "Agentic Document Extraction Engine" [level=3] [ref=e263]
          - generic [ref=e264]:
            - generic [ref=e265]: Qwen2.5-VL
            - generic [ref=e266]: Multimodal
            - generic [ref=e267]: Adaptive Schema
            - generic [ref=e268]: Mem0 Memory
          - paragraph [ref=e269]: Zero-shot extraction engine utilizing Qwen-VL that auto-detects complex document structures, generates adaptive schemas, handles multi-record pages with cross-page deduplication, and learns from corrections via Mem0 persistent memory with 4x parallel speedup.
        - generic [ref=e270]:
          - link "Source Code" [ref=e271] [cursor=pointer]:
            - /url: https://github.com/Rayyan9477/Agentic-Document-Extraction-PDF
          - link "HF Models" [ref=e274] [cursor=pointer]:
            - /url: https://huggingface.co/Rayyan9477
          - generic [ref=e279]: Open Source
      - article [ref=e280]:
        - generic [ref=e281]:
          - generic [ref=e282]: Model Context Protocol
          - heading "LinkedIn MCP Server" [level=3] [ref=e284]
          - generic [ref=e285]:
            - generic [ref=e286]: MCP Protocol
            - generic [ref=e287]: Claude Desktop
            - generic [ref=e288]: FastAPI
            - generic [ref=e289]: Tool Calling
          - paragraph [ref=e290]: Production Model Context Protocol (MCP) server enabling frontier LLM assistants to programmatically inspect job postings, analyze professional profiles, and execute contextual agentic tasks.
        - generic [ref=e291]:
          - link "Source Code" [ref=e292] [cursor=pointer]:
            - /url: https://github.com/Rayyan9477/linkedin_mcp
          - generic [ref=e295]: Open Source
      - article [ref=e296]:
        - generic [ref=e297]:
          - generic [ref=e298]: Production MLOps
          - heading "MLOps Pipeline — USD Volatility" [level=3] [ref=e300]
          - generic [ref=e301]:
            - generic [ref=e302]: Airflow
            - generic [ref=e303]: FastAPI
            - generic [ref=e304]: Prometheus
            - generic [ref=e305]: Grafana
            - generic [ref=e306]: MLflow
            - generic [ref=e307]: Docker
          - paragraph [ref=e308]: Production ML system with Airflow auto-retraining every 2 hours, FastAPI inference with real-time drift detection, Prometheus/Grafana observability (13 alert rules), MLflow registry, 8-service Docker Compose stack, and 37 automated tests.
        - generic [ref=e309]:
          - link "Source Code" [ref=e310] [cursor=pointer]:
            - /url: https://github.com/Rayyan9477/MLOps-Pipeline-for-USD-Forecasting
          - generic [ref=e313]: Open Source
    - generic [ref=e316]:
      - generic [ref=e317]: 460+ Days GitHub Streak
      - paragraph [ref=e322]: 53+ open-source repositories & active daily contributions.
      - link "Visit GitHub Profile" [ref=e323] [cursor=pointer]:
        - /url: https://github.com/Rayyan9477
  - generic [ref=e326]:
    - heading "Technical Capabilities" [level=5] [ref=e327]
    - heading "Skills & Architecture" [level=2] [ref=e328]
    - generic [ref=e329]:
      - generic [ref=e330]:
        - generic [ref=e331]:
          - heading "Generative AI & Agentic Systems" [level=3] [ref=e334]
          - generic [ref=e335]: Core Specialty
        - generic [ref=e336]:
          - generic [ref=e337]: LangGraph Multi-Agent
          - generic [ref=e341]: MCP Servers & Clients
          - generic [ref=e345]: Tool / Function Calling
          - generic [ref=e349]: Structured Outputs (Pydantic)
          - generic [ref=e353]: Deep Agents & State Machines
          - generic [ref=e357]: Context Engineering
          - generic [ref=e361]: Browser Use & Playwright
          - generic [ref=e365]: Human-in-the-Loop Gates
      - generic [ref=e369]:
        - generic [ref=e370]:
          - heading "RAG, Evaluation & Safety" [level=3] [ref=e374]
          - generic [ref=e375]:
            - generic [ref=e376]: Hybrid Search (BM25+FAISS)
            - generic [ref=e380]: Semantic Rerankers
            - generic [ref=e384]: Grounding & Provenance
            - generic [ref=e388]: Anti-Hallucination Gates
            - generic [ref=e392]: LLM Evaluation & Benchmarks
            - generic [ref=e396]: PHI / Sensitive Data Masking
            - generic [ref=e400]: GraphRAG & Vector DBs
            - generic [ref=e404]: Guardrails & Fallback Logic
        - generic [ref=e408]:
          - heading "Models, Fine-Tuning & Inference" [level=3] [ref=e412]
          - generic [ref=e413]:
            - generic [ref=e414]: LoRA / QLoRA / PEFT
            - generic [ref=e418]: vLLM & CUDA Deployment
            - generic [ref=e422]: Vision Language Models
            - generic [ref=e426]: llama.cpp & GGUF Quant
            - generic [ref=e430]: LiteLLM Provider Routing
            - generic [ref=e434]: AWS Bedrock Model APIs
            - generic [ref=e438]: PyTorch & Transformers
            - generic [ref=e442]: Single-GPU Optimization
      - generic [ref=e446]:
        - generic [ref=e447]:
          - heading "LLMOps & Infrastructure" [level=3] [ref=e451]
          - generic [ref=e452]:
            - generic [ref=e453]: FastAPI & SSE/WebSockets
            - generic [ref=e457]: Redis Queues & Celery
            - generic [ref=e461]: Docker & Kubernetes
            - generic [ref=e465]: Langfuse AI Observability
            - generic [ref=e469]: PostHog User Analytics
            - generic [ref=e473]: Airflow Scheduled Pipelines
            - generic [ref=e477]: Prometheus & Grafana Alerts
            - generic [ref=e481]: PostgreSQL & CI/CD
        - generic [ref=e485]:
          - heading "Languages & Frameworks" [level=3] [ref=e489]
          - generic [ref=e490]:
            - generic [ref=e491]: Python
            - generic [ref=e496]: TypeScript
            - generic [ref=e501]: SQL
            - generic [ref=e506]: PyTorch
            - generic [ref=e511]: FastAPI
            - generic [ref=e516]: Docker
            - generic [ref=e521]: Redis
            - generic [ref=e526]: AWS
            - generic [ref=e531]: R
            - generic [ref=e536]: C++
            - generic [ref=e541]: Java
            - generic [ref=e546]: Scikit
  - generic [ref=e551]:
    - heading "Enterprise AI Capabilities" [level=5] [ref=e552]
    - heading "Services & Solutions" [level=2] [ref=e553]
    - generic [ref=e554]:
      - article [ref=e555]:
        - heading "AI Agents & Orchestration" [level=3] [ref=e557]
        - list [ref=e558]:
          - listitem [ref=e559]:
            - paragraph [ref=e563]: Multi-agent architectures with LangGraph state machines & routing
          - listitem [ref=e564]:
            - paragraph [ref=e568]: Autonomous browser agents (Browser Use + Playwright automation)
          - listitem [ref=e569]:
            - paragraph [ref=e573]: Custom Model Context Protocol (MCP) server development
          - listitem [ref=e574]:
            - paragraph [ref=e578]: Human-in-the-loop review, retry logic & escalation gates
          - listitem [ref=e579]:
            - paragraph [ref=e583]: End-to-end task automation across complex enterprise portals
      - article [ref=e584]:
        - heading "Enterprise RAG & Fine-Tuning" [level=3] [ref=e586]
        - list [ref=e587]:
          - listitem [ref=e588]:
            - paragraph [ref=e592]: Hybrid retrieval pipelines (FAISS vector + BM25 keyword matching)
          - listitem [ref=e593]:
            - paragraph [ref=e597]: Single-GPU LoRA/QLoRA and PEFT model fine-tuning (Qwen, Phi-3)
          - listitem [ref=e598]:
            - paragraph [ref=e602]: 3-layer anti-hallucination validation & grounding pipelines
          - listitem [ref=e603]:
            - paragraph [ref=e607]: Local on-premise inference deployments (vLLM, CUDA, GGUF)
          - listitem [ref=e608]:
            - paragraph [ref=e612]: Provider-agnostic routing via LiteLLM & AWS Bedrock
      - article [ref=e613]:
        - heading "LLMOps & Observability" [level=3] [ref=e615]
        - list [ref=e616]:
          - listitem [ref=e617]:
            - paragraph [ref=e621]: Production ML/LLM pipelines with automated data flows
          - listitem [ref=e622]:
            - paragraph [ref=e626]: Real-time model serving with drift detection & monitoring
          - listitem [ref=e627]:
            - paragraph [ref=e631]: AI Observability with Langfuse, PostHog, Prometheus & Grafana
          - listitem [ref=e632]:
            - paragraph [ref=e636]: Containerized deployments with Docker, Kubernetes & CI/CD
          - listitem [ref=e637]:
            - paragraph [ref=e641]: Strict PHI & enterprise security compliance controls
  - generic [ref=e642]:
    - heading "Get In Touch" [level=5] [ref=e643]
    - heading "Contact Me" [level=2] [ref=e644]
    - generic [ref=e645]:
      - generic [ref=e646]:
        - article [ref=e647]:
          - heading "Direct Email" [level=4] [ref=e650]
          - heading "rayyanahmed265@yahoo.com" [level=5] [ref=e651]
          - link "Send an email →" [ref=e652] [cursor=pointer]:
            - /url: mailto:rayyanahmed265@yahoo.com
        - article [ref=e653]:
          - heading "LinkedIn" [level=4] [ref=e658]
          - heading "Rayyan Ahmed" [level=5] [ref=e659]
          - link "Connect on LinkedIn →" [ref=e660] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/rayyan-ahmed9477/
        - article [ref=e661]:
          - heading "Discord" [level=4] [ref=e664]
          - heading "Rayyan Ahmed" [level=5] [ref=e665]
          - link "Chat on Discord →" [ref=e666] [cursor=pointer]:
            - /url: https://discord.com/users/1082700727220183151
      - generic [ref=e667]:
        - textbox "Your Full Name" [ref=e668]
        - textbox "Your Email Address" [ref=e669]
        - textbox "Tell me about your AI project, architecture needs, or role..." [ref=e670]
        - button "Send Message" [ref=e671] [cursor=pointer]
  - contentinfo [ref=e672]:
    - link "Rayyan.ai" [ref=e673] [cursor=pointer]:
      - /url: "#"
    - generic [ref=e674]: 460+ Days GitHub Streak • 53+ Open Source Repositories
    - list [ref=e678]:
      - listitem [ref=e679]:
        - link "Home" [ref=e680] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e681]:
        - link "About" [ref=e682] [cursor=pointer]:
          - /url: "#about"
      - listitem [ref=e683]:
        - link "Experience" [ref=e684] [cursor=pointer]:
          - /url: "#professional-experience"
      - listitem [ref=e685]:
        - link "Systems" [ref=e686] [cursor=pointer]:
          - /url: "#portfolio"
      - listitem [ref=e687]:
        - link "Skills" [ref=e688] [cursor=pointer]:
          - /url: "#experience"
      - listitem [ref=e689]:
        - link "Services" [ref=e690] [cursor=pointer]:
          - /url: "#services"
      - listitem [ref=e691]:
        - link "Contact" [ref=e692] [cursor=pointer]:
          - /url: "#contact"
    - generic [ref=e693]:
      - link "X (Twitter)" [ref=e694] [cursor=pointer]:
        - /url: https://x.com/Rayyan9477
      - link "LinkedIn" [ref=e697] [cursor=pointer]:
        - /url: https://www.linkedin.com/in/rayyan-ahmed9477/
      - link "GitHub" [ref=e700] [cursor=pointer]:
        - /url: https://github.com/Rayyan9477
    - generic [ref=e703]: © 2026 Rayyan Ahmed. All rights reserved. Deployed with production AI standards.
  - button "Open Portfolio Q&A Guide" [ref=e706] [cursor=pointer]:
    - generic [ref=e712]: Portfolio Q&A Guide
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('resume-led content, working navigation and no removed widgets', async ({ page, request }) => {
  4  |   const errors: string[] = [];
  5  |   page.on('pageerror', error => errors.push(error.message));
  6  |   await page.goto('/');
  7  |   await expect(page.getByRole('heading', { name: 'Rayyan Ahmed', exact: true })).toBeVisible();
  8  |   await expect(page.getByRole('button', { name: /Q&A|assistant/i })).toHaveCount(0);
  9  |   await expect(page.getByText(/testimonials|99\.05%|460\+|GSOC|eliminate mathematical/i)).toHaveCount(0);
  10 |   await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'Work', exact: true }).click();
  11 |   await expect(page).toHaveURL(/#portfolio$/);
  12 |   await expect(page.getByRole('heading', { name: 'Selected work' })).toBeInViewport();
  13 |   const resume = await request.get('/Rayyan_Ahmed_AI_Engineer_Resume.pdf');
  14 |   expect(resume.ok()).toBeTruthy();
  15 |   expect((await resume.body()).subarray(0, 4).toString()).toBe('%PDF');
  16 |   expect(errors).toEqual([]);
  17 | });
  18 | 
  19 | test('project filters and accessible case study disclosure', async ({ page }) => {
  20 |   await page.goto('/#portfolio');
  21 |   await expect(page.locator('[data-project]')).toHaveCount(3);
  22 |   await page.getByRole('button', { name: 'Healthcare', exact: true }).click();
  23 |   await expect(page.locator('[data-project]')).toHaveCount(1);
  24 |   await expect(page.getByRole('button', { name: 'Healthcare', exact: true })).toHaveAttribute('aria-pressed', 'true');
  25 |   await page.getByText('Read MedCodex case study', { exact: true }).click();
  26 |   await expect(page.getByText('Provider-agnostic routing, PHI masking, structured outputs, and audit trails.', { exact: true })).toBeVisible();
  27 |   await page.getByRole('button', { name: 'All work', exact: true }).click();
  28 |   await expect(page.locator('[data-project]')).toHaveCount(3);
  29 | });
  30 | 
  31 | test('mobile reflow, keyboard focus and reduced motion', async ({ page }) => {
  32 |   await page.emulateMedia({ reducedMotion: 'reduce' });
  33 |   await page.goto('/');
  34 |   await page.keyboard.press('Tab');
  35 |   await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  36 |   await expect(page.getByRole('link', { name: 'Skip to content' })).toBeInViewport();
  37 |   expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy();
  38 |   for (const width of [320, 375, 768, 1440]) {
  39 |     await page.setViewportSize({ width, height: 900 });
  40 |     expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy();
  41 |   }
  42 | });
  43 | 
  44 | async function fillContact(page: import('@playwright/test').Page) {
> 45 |   await page.getByLabel('Full name').fill('Portfolio reviewer');
     |                                      ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  46 |   await page.getByLabel('Email address').fill('reviewer@example.com');
  47 |   await page.getByLabel('Message', { exact: true }).fill('A test inquiry that must never be sent to a real recipient.');
  48 | }
  49 | 
  50 | test('unconfigured contact prepares a draft without losing input', async ({ page }, info) => {
  51 |   test.skip(info.project.name === 'email-configured');
  52 |   await page.goto('/#contact');
  53 |   await fillContact(page);
  54 |   await page.getByRole('button', { name: 'Prepare email draft' }).click();
  55 |   await expect(page.getByRole('status')).toContainText('Your message is ready');
  56 |   await expect(page.getByRole('link', { name: 'Open email draft' })).toHaveAttribute('href', /^mailto:rayyanahmed265@yahoo\.com\?subject=/);
  57 |   await expect(page.getByLabel('Full name')).toHaveValue('Portfolio reviewer');
  58 | });
  59 | 
  60 | test('delivery failure retains input; retry success clears it', async ({ page }, info) => {
  61 |   test.skip(info.project.name !== 'email-configured');
  62 |   let attempts = 0;
  63 |   await page.route('https://api.emailjs.com/**', async route => {
  64 |     attempts++;
  65 |     await route.fulfill({ status: attempts === 1 ? 500 : 200, body: attempts === 1 ? 'Unavailable' : 'OK' });
  66 |   });
  67 |   await page.goto('/#contact');
  68 |   await fillContact(page);
  69 |   await page.getByRole('button', { name: 'Send message', exact: true }).click();
  70 |   await expect(page.getByRole('alert')).toContainText('could not be sent');
  71 |   await expect(page.getByLabel('Full name')).toHaveValue('Portfolio reviewer');
  72 |   await page.getByRole('button', { name: 'Send message', exact: true }).click();
  73 |   await expect(page.getByRole('status')).toContainText('Message sent');
  74 |   await expect(page.getByLabel('Full name')).toHaveValue('');
  75 |   expect(attempts).toBe(2);
  76 | });
  77 | 
```