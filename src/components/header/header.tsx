import { useContext } from "react";
import { AppContext } from "../../App";

const Header = () => {
  const context = useContext(AppContext);

  const { setActiveNav } = context as {
    setActiveNav: React.Dispatch<React.SetStateAction<string>>;
  };

  return (
    <header className="py-7 border-b border-white/[0.04]">
      <div className="container">
        <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-4">
          <a
            className="transition-none flex items-center gap-2 group"
            href="#"
            onClick={() => {
              setActiveNav("#");
            }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8] animate-pulse"></span>
            <p className="bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text font-primary text-[1.85rem] font-bold tracking-wider text-transparent group-hover:opacity-90">
              Rayyan<span className="text-white font-light">.ai</span>
            </p>
          </a>
          <div className="flex items-center gap-3">
            <a
              href="/Rayyan_Ahmed_AI_Engineer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Rayyan_Ahmed_AI_Engineer_Resume.pdf"
              className="btn-header h-[44px] rounded-full px-5 text-xs font-mono uppercase tracking-wider text-white flex items-center justify-center hover:scale-[1.02] transition-transform"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={() => {
                setActiveNav("#contact");
              }}
              className="h-[44px] rounded-full px-5 text-xs font-mono uppercase tracking-wider text-slate-200 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 flex items-center justify-center transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
