import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";


const Footer = () => {
  return (
    <footer id="footer">
      <a
        href="#"
        className="footer__logo mb-[2rem] text-[2rem] hover:text-[#ebecf1]"
      >
        Rayyan Ahmed
      </a>

      <ul className="permalinks max-sm:gap-1.5rem mb-[3rem] mt-0 flex flex-wrap justify-center gap-[2rem] max-sm:flex-col">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#experience">EXPERIENCE</a>
        </li>
        <li>
          <a href="#services">SERVICES</a>
        </li>
        <li>
          <a href="#portfolio">PROJECTS</a>
        </li>
        {/* TODO: Uncomment this line when I receive testimonials */}
        {/* <li>
          <a href="#testimonials">TESTIMONIALS</a>
        </li> */}
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>

      <div className="footer__socials mb-[2rem] flex justify-center gap-[1rem] max-sm:mb-[2.2rem]">
        <a href="" target="_blank" rel="noopener">
          <FiTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/rayyan-ahmed9477/"
          target="_blank"
          rel="noopener"
        >
          <GrLinkedinOption />
        </a>

        <a
          href="https://github.com/Rayyan9477"
          target="_blank"
          rel="noopener"
        >
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright mb-[4rem]">
        <small>&copy; Rayyan Ahmed. All rights reserved!</small>
      </div>
    </footer>
  );
};

export default Footer;