import { useState, useRef, useEffect } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

interface Message {
  sender: "user" | "ai";
  text: string;
}

const KNOWLEDGE_BASE = [
  {
    keywords: ["medcodex", "medical", "coding", "icd", "cpt", "40%"],
    answer:
      "MedCodex is a 4-agent LangGraph system built at Nobility RCM. It extracts clinical context from doctor notes, proposes ICD-10-CM, CPT, and HCPCS billing candidates, and validates them against medical reference databases using a 3-layer anti-hallucination pipeline with retry and escalation paths. This improved medical coding efficiency by ~40% and shifted the team from manual drafting to reviewing AI outputs with full PHI masking and audit trails.",
  },
  {
    keywords: ["prism", "finance", "sql", "financial"],
    answer:
      "Prism is an agentic GenAI platform for financial analytics. It uses Text-to-SQL grounded RAG with tool calling to turn hours of recurring financial analysis into minutes. Crucially, it separates deterministic calculations from LLM reasoning, adding capability-aware routing, provenance tracking, evaluation gates, and human review to ensure zero financial hallucination.",
  },
  {
    keywords: ["autoapply", "browser", "playwright", "job"],
    answer:
      "Auto Apply AI is a computer-use browser agent platform. It orchestrates Browser Use and Playwright agents with LiteLLM and AWS Bedrock routing, FAISS vector matching, Redis queues, and WebSocket streaming. It performs job discovery, ATS resume matching, tailored cover letters, and handles CAPTCHA/2FA with human-in-the-loop handoff.",
  },
  {
    keywords: ["streak", "github", "commits"],
    answer:
      "Rayyan currently holds an active consecutive GitHub streak of 460+ days with 53+ public repositories covering Agentic AI, Model Context Protocol (MCP) servers, fine-tuning, and MLOps pipelines.",
  },
  {
    keywords: ["competition", "qwen", "lora", "prize", "third"],
    answer:
      "Rayyan won Third Prize in the global Qwen-Image LoRA Training Competition. He fine-tuned a 1.7 GB LoRA model across 12,000+ multimodal images and 40 categories on a single consumer GPU, optimizing PEFT/QLoRA hyperparameters and convergence efficiency.",
  },
  {
    keywords: ["langgraph", "agent", "agents", "mcp"],
    answer:
      "Rayyan specializes in LangGraph state machines, multi-agent orchestration, and Model Context Protocol (MCP) servers. He designs workflows with state persistence, tool calling, structured Pydantic outputs, provider-agnostic routing, and human-in-the-loop review checkpoints.",
  },
  {
    keywords: ["contact", "hire", "email", "reach"],
    answer:
      "You can contact Rayyan directly at rayyanahmed265@yahoo.com or connect with him on LinkedIn (linkedin.com/in/rayyan-ahmed9477) and X (x.com/Rayyan9477). His resume is also available for instant download in the header!",
  },
];

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: "Hello! I am Rayyan's AI Agent. Ask me anything about his LangGraph architectures, MedCodex (40% speedup), Prism financial RAG, or his Qwen LoRA competition win!",
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (userText: string) => {
    if (!userText.trim()) return;

    const newMessages: Message[] = [...messages, { sender: "user", text: userText }];
    setMessages(newMessages);
    setInput("");

    // Find best answer from knowledge base
    const lower = userText.toLowerCase();
    const match = KNOWLEDGE_BASE.find((item) =>
      item.keywords.some((k) => lower.includes(k))
    );

    setTimeout(() => {
      if (match) {
        setMessages((prev) => [...prev, { sender: "ai", text: match.answer }]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: "ai",
            text: `Rayyan is a Generative AI Engineer with 2+ years of production experience in LangGraph, MCP, RAG, and fine-tuning. He is currently at Nobility RCM building healthcare compliance agents. You can also reach him directly at rayyanahmed265@yahoo.com!`,
          },
        ]);
      }
    }, 400);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-[9998]">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-2 rounded-full border border-cyan-400/40 bg-surface/90 px-4 py-2.5 font-mono text-xs text-white backdrop-blur-xl shadow-[0_0_25px_rgba(56,189,248,0.3)] hover:scale-105 hover:border-cyan-400 transition-all"
            aria-label="Open AI Assistant"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
            </span>
            <FaRobot className="text-cyan-400 text-sm group-hover:rotate-12 transition-transform" />
            <span className="font-semibold hidden sm:inline">Ask Rayyan's AI</span>
          </button>
        )}
      </div>

      {/* Interactive Modal Drawer */}
      {isOpen && (
        <div className="fixed bottom-6 right-4 sm:right-6 z-[9999] w-[92vw] sm:w-[380px] max-w-[420px] rounded-2xl border border-cyan-500/30 bg-surface/95 p-4 backdrop-blur-2xl shadow-[0_15px_50px_rgba(0,0,0,0.8)]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-cyan-500/20 p-1.5 text-cyan-400">
                <FaRobot className="text-sm" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                  Rayyan AI Agent
                  <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.2 rounded border border-emerald-800/40">
                    Online
                  </span>
                </h4>
                <p className="text-[10px] text-slate-400 font-mono">Grounded on Resume & Systems</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
              aria-label="Close Assistant"
            >
              <FaTimes />
            </button>
          </div>

          {/* Quick Prompt Chips */}
          <div className="mb-3 flex flex-wrap gap-1.5">
            {[
              "MedCodex 40% speedup",
              "Prism Financial RAG",
              "Qwen LoRA 3rd Prize",
              "GitHub Streak",
            ].map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(chip)}
                className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-mono text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400/40 transition-all flex items-center gap-1"
              >
                <HiSparkles className="text-[9px]" /> {chip}
              </button>
            ))}
          </div>

          {/* Chat Messages */}
          <div className="max-h-[260px] overflow-y-auto space-y-2.5 pr-1 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`rounded-xl px-3 py-2 leading-relaxed max-w-[88%] ${
                    m.sender === "user"
                      ? "bg-cyan-600 text-white font-mono text-[11px]"
                      : "bg-surface-elevated border border-white/10 text-slate-200"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="mt-3 flex items-center gap-2 pt-2 border-t border-white/10"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Rayyan's architecture..."
              className="flex-1 rounded-xl bg-surface-elevated border border-white/10 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-400"
            />
            <button
              type="submit"
              className="rounded-xl bg-cyan-500 p-2 text-slate-950 hover:bg-cyan-400 transition-colors flex-shrink-0"
              aria-label="Send Message"
            >
              <FaPaperPlane className="text-xs" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
