import { useContext } from "react";
import { BsFolderCheck } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { AppContext } from "../../App";
import aboutImage from "../../assets/about-image.webp";

const About = () => {
  const context = useContext(AppContext);

  const { setActiveNav } = context as {
    setActiveNav: React.Dispatch<React.SetStateAction<string>>;
  };

  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="about__container grid-cols-35-50 container grid gap-[13%] max-md:grid-cols-1 max-md:place-items-center max-md:gap-0">
        <div className="about__myself linear-grad-45 grid aspect-square w-full place-items-center rounded-2rem max-md:m-[2.5rem] max-md:w-[50%] max-sm:mx-auto max-sm:mb-[3rem] max-sm:mt-0 max-sm:w-[65%]">
          <div className="about__image w-100 rotate-10 overflow-hidden rounded-2rem hover:rotate-0 hover:duration-600">
            <img
              src={aboutImage}
              alt="About Me Image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="about__content max-sm:text-center">
          <div className="about__cards grid grid-cols-3 gap-[1.3rem] max-md:mt-3 max-sm:grid-cols-2 max-sm:gap-[1rem]">
            <article className="flex flex-col">
              <div className="about__card h-full flex-1">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>1+ Years of Experience</small>
              </div>
            </article>
            <article className="flex flex-col">
              <div className="about__card h-full flex-1">
                <HiOutlineUsers className="about__icon flex justify-center" />
                <h5>Worked With</h5>
                <small>5+ Clients Globally</small>
              </div>
            </article>
            <article className="flex flex-col">
              <div className="about__card h-full flex-1">
                <BsFolderCheck className="about__icon" />
                <h5>Projects</h5>
                <small>30+ Finished Projects</small>
              </div>
            </article>
          </div>
          <p className="my-[2rem] ml-0 mr-[2.6rem] text-[#9b969d] max-md:mx-0 max-md:mb-[1.5rem] max-md:mt-[1rem] max-sm:mx-0 max-sm:my-[1.5rem] leading-relaxed">
            AI Engineer and Data Scientist with expertise in Python, RAG, MCP, and AI-Agents, 
            specializing in scalable machine learning, computer vision, and NLP solutions.
            <br /><br />
            Proven track record of optimizing deep learning models and deploying production-grade 
            pipelines using frameworks like Hugging Face and advanced transformer architectures.
            <br /><br />
            Enhanced model accuracy by 18% at Mentorness through feature engineering and ensemble methods, 
            and reduced customer service response time by 40% at Ozibook by deploying AI-driven solutions.
            <br /><br />
            Currently driving automation initiatives at Nobility MBS, leveraging browser automation, 
            AI agents, LLMs, and RAG pipelines to streamline medical billing processes,
            resulting in a 35% reduction in manual workload and a 20% improvement in billing accuracy.
            <br /><br />
            Committed to advancing AI innovation, automating complex workflows, and delivering measurable business value.
          </p>
          <a
            href="#contact"
            className="btn btn-primary rounded-2xl"
            onClick={() => {
              setActiveNav("#contact");
            }}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
