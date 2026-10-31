import { FaGithub } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import { IoFlame } from "react-icons/io5";

const Footer = () => {
  return (
    <footer id="footer">
      <a
        href="#"
        className="footer__logo mb-4 inline-block font-primary text-2xl font-bold tracking-wider text-white hover:text-cyan-400"
      >
        Rayyan<span className="text-cyan-400">.ai</span>
      </a>

      <div className="mb-6 flex items-center justify-center gap-2 font-mono text-xs text-amber-400">
        <IoFlame />
        <span>460+ Days GitHub Streak &bull; 53+ Open Source Repositories</span>
      </div>

      <ul className="permalinks mb-8 mt-0 flex flex-wrap justify-center gap-6 font-mono text-xs uppercase tracking-wider text-slate-400 max-sm:flex-col max-sm:gap-3">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#professional-experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Systems</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials mb-8 flex justify-center gap-3">
        <a
          href="https://x.com/Rayyan9477"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
        >
          <FiTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/rayyan-ahmed9477/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <GrLinkedinOption />
        </a>
        <a
          href="https://github.com/Rayyan9477"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright mb-6 font-mono text-xs text-slate-500">
        <small>&copy; {new Date().getFullYear()} Rayyan Ahmed. All rights reserved. Deployed with production AI standards.</small>
      </div>
    </footer>
  );
};

export default Footer;
