import { useEffect, useState } from "react";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import portrait from "./assets/my-logo.webp";
import Contact from "./components/contact/contact";
import { Category, profile, projects, roles, skills } from "./data/profile";

const navigation = [
  ["portfolio", "Work"],
  ["professional-experience", "Experience"],
  ["experience", "Skills"],
  ["contact", "Contact"],
];

export default function App() {
  const [filter, setFilter] = useState<Category>("all");
  const [active, setActive] = useState("");
  useEffect(() => {
    const update = () => {
      const sections = navigation
        .map(([id]) => document.getElementById(id))
        .filter((el): el is HTMLElement => !!el)
        .filter((el) => el.getBoundingClientRect().top <= 160);
      setActive(sections[sections.length - 1]?.id ?? "");
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="wordmark" href="#home" aria-label="Rayyan Ahmed home">
            rayyan<span>.ai</span>
          </a>
          <nav aria-label="Main navigation">
            {navigation.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={active === id ? "location" : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            className="button small header-resume"
            href={profile.resume}
            download
          >
            Resume <FiArrowDown aria-hidden="true" />
          </a>
        </div>
      </header>
      <main id="main" tabIndex={-1}>
        <section id="home" className="hero shell" aria-labelledby="hero-name">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              {profile.title}
            </p>
            <h1 id="hero-name">Rayyan Ahmed</h1>
            <p className="hero-statement">
              AI systems built for
              <br />
              <span>real-world work.</span>
            </p>
            <p className="hero-description">
              I turn operational problems into end-to-end agentic AI solutions —
              connecting models, data, and tools with evaluation, guardrails,
              and human review.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#portfolio">
                Explore my work <FiArrowDown aria-hidden="true" />
              </a>
              <a className="button" href="#contact">
                Let’s talk <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <p className="location">
              {profile.location}
              <span>AI Engineer at Nobility RCM</span>
            </p>
          </div>
          <div className="hero-portrait">
            <div className="portrait-frame">
              <img src={portrait} alt="Rayyan Ahmed" width="600" height="600" />
            </div>
            <div className="portrait-caption">
              <span>Engineering with context.</span>
              <span>Building with care.</span>
            </div>
          </div>
          <div className="hero-proof">
            <div>
              <strong>2+ years</strong>
              <span>Turning operational problems into AI solutions</span>
            </div>
            <div>
              <strong>~40%</strong>
              <span>Medical-coding workflow efficiency improvement</span>
            </div>
            <div>
              <strong>Third prize</strong>
              <span>Qwen-Image LoRA Training Competition</span>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="section shell about"
          aria-labelledby="about-title"
        >
          <div>
            <p className="eyebrow">01 / Approach</p>
            <h2 id="about-title">
              Beyond the model.
              <br />
              The whole system.
            </h2>
          </div>
          <div className="about-copy">
            <p>
              I’m a Generative AI Engineer with 2+ years of experience
              translating business requirements into working systems. My work
              spans healthcare, mental health, revenue cycle management, medical
              coding, financial analytics, document intelligence, and browser
              automation.
            </p>
            <p>
              I design retrieval and data flows, orchestrate agents and tools,
              integrate cloud and local models, and implement the APIs,
              evaluation, and human review that make a workflow useful and
              auditable.
            </p>
            <p className="principles">
              Communication. Ownership. Execution.
              <br />
              Collaboration, prioritization, and adaptability.
            </p>
          </div>
        </section>
        <section
          id="portfolio"
          className="section shell"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / Selected systems</p>
              <h2 id="work-title">Selected work</h2>
            </div>
            <p>
              Real operational problems.
              <br />
              Thoughtful engineering behind each one.
            </p>
          </div>
          <div className="filters" role="group" aria-label="Filter projects">
            {(
              [
                ["all", "All work"],
                ["healthcare", "Healthcare"],
                ["finance", "Finance"],
                ["automation", "Automation"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                aria-pressed={filter === key}
                onClick={() => setFilter(key)}
              >
                {label}
              </button>
            ))}
          </div>
          <p className="sr-only" aria-live="polite">
            {
              projects.filter((p) => filter === "all" || p.category === filter)
                .length
            }{" "}
            projects shown
          </p>
          <div className="projects">
            {projects
              .filter((p) => filter === "all" || p.category === filter)
              .map((project) => (
                <article
                  className="project"
                  key={project.id}
                  data-project={project.id}
                >
                  <div className="project-intro">
                    <p className="eyebrow">{project.domain}</p>
                    <h3>{project.name}</h3>
                    <p className="project-headline">{project.headline}</p>
                    <ul
                      className="tags"
                      aria-label={`${project.name} technologies`}
                    >
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="project-body">
                    <p>{project.summary}</p>
                    <p className="outcome">{project.outcome}</p>
                    <details>
                      <summary>
                        Read {project.name} case study{" "}
                        <FiArrowDown aria-hidden="true" />
                      </summary>
                      <div className="case-study">
                        <h4>The problem</h4>
                        <p>{project.problem}</p>
                        <h4>What I built</h4>
                        <p>{project.architecture}</p>
                        <h4>Reliability & human review</h4>
                        <p>{project.safeguards}</p>
                        {!project.github && (
                          <p className="private-note">
                            Private enterprise work. This overview shares the
                            approach described in my resume; source code and
                            internal data are not public.
                          </p>
                        )}
                      </div>
                    </details>
                    {project.github && (
                      <a
                        className="text-link"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Explore source code{" "}
                        <FiArrowUpRight aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </article>
              ))}
          </div>
        </section>
        <section
          id="professional-experience"
          className="section shell"
          aria-labelledby="career-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / Career</p>
              <h2 id="career-title">Experience, in practice.</h2>
            </div>
            <a className="text-link" href={profile.resume} download>
              Download full resume <FiArrowDown aria-hidden="true" />
            </a>
          </div>
          <div className="timeline">
            {roles.map((role) => (
              <article className="role" key={role.company}>
                <div className="role-meta">
                  <p>{role.date}</p>
                  <span>{role.location}</span>
                </div>
                <div>
                  <h3>{role.title}</h3>
                  <p className="company">{role.company}</p>
                  <ul>
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <div className="recognition">
            <article>
              <p className="eyebrow">Recognition</p>
              <h3>Third Prize — Qwen-Image LoRA Training Competition</h3>
              <p>
                1.7 GB LoRA · 12,000+ images · 40 categories · single-GPU
                training.
              </p>
            </article>
            <article>
              <p className="eyebrow">Education</p>
              <h3>BS Software Engineering</h3>
              <p>FAST NUCES Islamabad</p>
              <p>Aug 2022 — Jun 2026 · Islamabad, Pakistan</p>
            </article>
          </div>
        </section>
        <section
          id="experience"
          className="section shell"
          aria-labelledby="skills-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">04 / Toolkit</p>
              <h2 id="skills-title">From orchestration to operations.</h2>
            </div>
            <p>
              The tools behind the work,
              <br />
              organized by what they enable.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((group) => (
              <article key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul className="tags">
                  {group.items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
        <Contact />
      </main>
      <footer className="shell site-footer">
        <a className="wordmark" href="#home">
          rayyan<span>.ai</span>
        </a>
        <p>© {new Date().getFullYear()} Rayyan Ahmed</p>
        <div className="socials">
          <a
            href={profile.github}
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub />
          </a>
          <a
            href={profile.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email Rayyan">
            <FiMail />
          </a>
        </div>
      </footer>
    </>
  );
}
