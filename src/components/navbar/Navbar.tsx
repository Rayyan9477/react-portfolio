import { useContext, useEffect } from "react";
import { AiOutlineMessage, AiOutlineUser } from "react-icons/ai";
import { BsPersonWorkspace } from "react-icons/bs";
import { HiOutlineCode, HiOutlineHome } from "react-icons/hi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";
import { AppContext } from "../../App";

const Navbar = () => {
  const context = useContext(AppContext);

  const { activeNav, setActiveNav } = context as {
    activeNav: string;
    setActiveNav: React.Dispatch<React.SetStateAction<string>>;
  };

  useEffect(() => {
    const sections = [
      { id: "home", nav: "#" },
      { id: "about", nav: "#about" },
      { id: "professional-experience", nav: "#professional-experience" },
      { id: "portfolio", nav: "#portfolio" },
      { id: "experience", nav: "#experience" },
      { id: "services", nav: "#services" },
      { id: "contact", nav: "#contact" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = sections.find((s) => s.id === entry.target.id);
            if (match) {
              setActiveNav(match.nav);
            }
          }
        });
      },
      {
        rootMargin: "-25% 0px -40% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [setActiveNav]);

  return (
    <nav
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-1.5 rounded-full border border-white/10 bg-surface/85 px-3 py-2 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
      aria-label="Quick Navigation"
    >
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
        aria-label="Home"
        title="Home"
      >
        <HiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        aria-label="About Me"
        title="About Me"
      >
        <AiOutlineUser />
      </a>
      <a
        href="#professional-experience"
        onClick={() => setActiveNav("#professional-experience")}
        className={activeNav === "#professional-experience" ? "active" : ""}
        aria-label="Work Experience"
        title="Work Experience"
      >
        <MdOutlineWorkOutline />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
        aria-label="Projects & Systems"
        title="Projects & Systems"
      >
        <BsPersonWorkspace />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
        aria-label="Skills & Stack"
        title="Skills & Stack"
      >
        <HiOutlineCode />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
        aria-label="Services"
        title="Services"
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        aria-label="Contact"
        title="Contact"
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Navbar;
